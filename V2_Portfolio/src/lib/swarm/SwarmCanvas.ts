/**
 * SwarmCanvas - A high-performance cursor swarm effect using HTML Canvas
 * 
 * Features:
 * - Dual-mode behavior: idle floating and cursor attraction
 * - Central zone detection (configurable width percentage)
 * - Organic swarm physics (cohesion, separation, alignment)
 * - Custom cursor image support
 * - Responsive to viewport changes
 * - Respects prefers-reduced-motion
 */

interface Particle {
	x: number;
	y: number;
	vx: number;
	vy: number;
	targetX: number;
	targetY: number;
	size: number;
	angle: number;
	idlePhase: number;
}

interface Pointer {
	x: number;
	y: number;
}

interface CentralBounds {
	x: number;
	y: number;
	w: number;
	h: number;
}

type Mode = 'idle' | 'activate';

export class SwarmCanvas {
	private canvas: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D;
	private particles: Particle[] = [];
	private pointer: Pointer = { x: 0, y: 0 };
	private mode: Mode = 'idle';
	private centralBounds: CentralBounds = { x: 0, y: 0, w: 0, h: 0 };
	private animationId: number = 0;
	private particleCount: number;
	private centralWidthPct: number;
	private cursorImg: CanvasImageSource | null = null;
	private prefersReducedMotion: boolean = false;

	// Physics constants
	private readonly SPRING_STRENGTH = 0.015;
	private readonly DAMPING = 0.92;
	private readonly SEPARATION_RADIUS = 40;
	private readonly SEPARATION_STRENGTH = 0.5;
	private readonly IDLE_SPEED = 0.3;
	private readonly IDLE_WAVE_AMPLITUDE = 0.5;
	private readonly IDLE_WAVE_FREQUENCY = 0.02;
	private readonly MAX_VELOCITY = 8;
	private readonly CURSOR_SIZE = 12;

	constructor(
		canvas: HTMLCanvasElement,
		particleCount: number = 80,
		centralWidthPct: number = 0.45,
		cursorImage?: string | CanvasImageSource
	) {
		this.canvas = canvas;
		this.particleCount = particleCount;
		this.centralWidthPct = centralWidthPct;

		// Get 2D context with alpha for transparency
		const ctx = canvas.getContext('2d', { alpha: true });
		if (!ctx) {
			throw new Error('Failed to get 2D context');
		}
		this.ctx = ctx;

		// Check for reduced motion preference
		if (typeof window !== 'undefined') {
			const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
			this.prefersReducedMotion = mediaQuery.matches;

			// Listen for changes
			mediaQuery.addEventListener('change', (e) => {
				this.prefersReducedMotion = e.matches;
				if (this.prefersReducedMotion && this.animationId) {
					this.stop();
				}
			});
		}

		// Load cursor image if provided
		if (cursorImage) {
			if (typeof cursorImage === 'string') {
				this.loadCursorImage(cursorImage);
			} else {
				this.cursorImg = cursorImage;
			}
		}
	}

	/**
	 * Load a cursor image from a URL
	 */
	private loadCursorImage(url: string): void {
		const img = new Image();
		img.onload = () => {
			this.cursorImg = img;
		};
		img.onerror = () => {
			console.warn('Failed to load cursor image:', url);
		};
		img.src = url;
	}

	/**
	 * Set a custom cursor image
	 */
	public setCursorImage(img: CanvasImageSource): void {
		this.cursorImg = img;
	}

	/**
	 * Initialize the swarm - spawn particles and setup bounds
	 */
	public init(): void {
		this.resize();
		this.spawnParticles();
	}

	/**
	 * Spawn particles at random positions across the viewport
	 */
	private spawnParticles(): void {
		this.particles = [];
		const w = this.canvas.width;
		const h = this.canvas.height;

		for (let i = 0; i < this.particleCount; i++) {
			this.particles.push({
				x: Math.random() * w,
				y: Math.random() * h,
				vx: (Math.random() - 0.5) * 2,
				vy: (Math.random() - 0.5) * 2,
				targetX: Math.random() * w,
				targetY: Math.random() * h,
				size: this.CURSOR_SIZE + (Math.random() - 0.5) * 4,
				angle: Math.random() * Math.PI * 2,
				idlePhase: Math.random() * Math.PI * 2
			});
		}
	}

	/**
	 * Update canvas size and central bounds based on viewport
	 */
	public resize(): void {
		const dpr = window.devicePixelRatio || 1;
		const rect = this.canvas.getBoundingClientRect();

		// Set canvas size with device pixel ratio for crisp rendering
		this.canvas.width = rect.width * dpr;
		this.canvas.height = rect.height * dpr;

		// Scale context to match
		this.ctx.scale(dpr, dpr);

		// Update central bounds (using CSS pixels)
		const centralWidth = rect.width * this.centralWidthPct;
		this.centralBounds = {
			x: (rect.width - centralWidth) / 2,
			y: 0,
			w: centralWidth,
			h: rect.height
		};

		// Clamp existing particles to new bounds
		this.particles.forEach((p) => {
			p.x = Math.max(0, Math.min(rect.width, p.x));
			p.y = Math.max(0, Math.min(rect.height, p.y));
		});
	}

	/**
	 * Update pointer position and check if it's in the central zone
	 */
	public updatePointer(x: number, y: number): void {
		this.pointer.x = x;
		this.pointer.y = y;

		// Check if pointer is inside central bounds
		const inCentral =
			x >= this.centralBounds.x &&
			x <= this.centralBounds.x + this.centralBounds.w &&
			y >= this.centralBounds.y &&
			y <= this.centralBounds.y + this.centralBounds.h;

		this.mode = inCentral ? 'idle' : 'activate';
	}

	/**
	 * Main animation loop
	 */
	private animate = (): void => {
		// Clear canvas with transparent background
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		// Update and render particles
		if (this.mode === 'idle') {
			this.updateIdleParticles();
		} else {
			this.updateActiveParticles();
		}

		this.renderParticles();

		// Continue animation
		this.animationId = requestAnimationFrame(this.animate);
	};

	/**
	 * IDLE MODE: Gentle floating with sine wave bobbing
	 */
	private updateIdleParticles(): void {
		const w = this.canvas.width / (window.devicePixelRatio || 1);
		const h = this.canvas.height / (window.devicePixelRatio || 1);

		this.particles.forEach((p) => {
			// Update idle phase for sine wave motion
			p.idlePhase += this.IDLE_WAVE_FREQUENCY;

			// Check if particle reached its idle target
			const dx = p.targetX - p.x;
			const dy = p.targetY - p.y;
			const dist = Math.sqrt(dx * dx + dy * dy);

			if (dist < 20) {
				// Pick new random target
				p.targetX = Math.random() * w;
				p.targetY = Math.random() * h;
			}

			// Gentle movement toward target
			const dirX = dx / (dist || 1);
			const dirY = dy / (dist || 1);

			p.vx += dirX * this.IDLE_SPEED * 0.1;
			p.vy += dirY * this.IDLE_SPEED * 0.1;

			// Add sine wave bobbing
			p.vx += Math.sin(p.idlePhase) * this.IDLE_WAVE_AMPLITUDE * 0.1;
			p.vy += Math.cos(p.idlePhase * 0.7) * this.IDLE_WAVE_AMPLITUDE * 0.1;

			// Apply damping
			p.vx *= 0.95;
			p.vy *= 0.95;

			// Limit velocity
			const vel = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
			if (vel > this.IDLE_SPEED) {
				p.vx = (p.vx / vel) * this.IDLE_SPEED;
				p.vy = (p.vy / vel) * this.IDLE_SPEED;
			}

			// Update position
			p.x += p.vx;
			p.y += p.vy;

			// Wrap around edges
			if (p.x < 0) p.x = w;
			if (p.x > w) p.x = 0;
			if (p.y < 0) p.y = h;
			if (p.y > h) p.y = 0;

			// Update angle based on velocity
			if (Math.abs(p.vx) > 0.1 || Math.abs(p.vy) > 0.1) {
				p.angle = Math.atan2(p.vy, p.vx);
			}
		});
	}

	/**
	 * ACTIVATE MODE: Spring attraction to pointer + repulsion from neighbors
	 */
	private updateActiveParticles(): void {
		const w = this.canvas.width / (window.devicePixelRatio || 1);
		const h = this.canvas.height / (window.devicePixelRatio || 1);

		this.particles.forEach((p, i) => {
			// 1. SPRING ATTRACTION to pointer
			const dx = this.pointer.x - p.x;
			const dy = this.pointer.y - p.y;
			const dist = Math.sqrt(dx * dx + dy * dy);

			if (dist > 0) {
				const force = dist * this.SPRING_STRENGTH;
				p.vx += (dx / dist) * force;
				p.vy += (dy / dist) * force;
			}

			// 2. SEPARATION from neighbors (avoid clustering)
			let sepX = 0;
			let sepY = 0;
			let neighbors = 0;

			this.particles.forEach((other, j) => {
				if (i === j) return;

				const ndx = p.x - other.x;
				const ndy = p.y - other.y;
				const ndist = Math.sqrt(ndx * ndx + ndy * ndy);

				if (ndist < this.SEPARATION_RADIUS && ndist > 0) {
					// Push away from neighbor
					const force = (1 - ndist / this.SEPARATION_RADIUS) * this.SEPARATION_STRENGTH;
					sepX += (ndx / ndist) * force;
					sepY += (ndy / ndist) * force;
					neighbors++;
				}
			});

			if (neighbors > 0) {
				p.vx += sepX;
				p.vy += sepY;
			}

			// 3. DAMPING (momentum reduction)
			p.vx *= this.DAMPING;
			p.vy *= this.DAMPING;

			// 4. LIMIT maximum velocity
			const vel = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
			if (vel > this.MAX_VELOCITY) {
				p.vx = (p.vx / vel) * this.MAX_VELOCITY;
				p.vy = (p.vy / vel) * this.MAX_VELOCITY;
			}

			// 5. UPDATE position
			p.x += p.vx;
			p.y += p.vy;

			// 6. BOUNDARY constraints (soft bounce)
			const margin = 20;
			if (p.x < margin) {
				p.x = margin;
				p.vx = Math.abs(p.vx) * 0.5;
			}
			if (p.x > w - margin) {
				p.x = w - margin;
				p.vx = -Math.abs(p.vx) * 0.5;
			}
			if (p.y < margin) {
				p.y = margin;
				p.vy = Math.abs(p.vy) * 0.5;
			}
			if (p.y > h - margin) {
				p.y = h - margin;
				p.vy = -Math.abs(p.vy) * 0.5;
			}

			// 7. UPDATE angle based on velocity direction
			if (Math.abs(p.vx) > 0.5 || Math.abs(p.vy) > 0.5) {
				p.angle = Math.atan2(p.vy, p.vx);
			}
		});
	}

	/**
	 * Render all particles to canvas
	 */
	private renderParticles(): void {
		this.particles.forEach((p) => {
			this.ctx.save();
			this.ctx.translate(p.x, p.y);
			this.ctx.rotate(p.angle);

			if (this.cursorImg) {
				// Draw custom cursor image
				const size = p.size;
				this.ctx.drawImage(this.cursorImg, -size / 2, -size / 2, size, size);
			} else {
				// Draw default arrow cursor
				this.drawDefaultCursor(p.size);
			}

			this.ctx.restore();
		});
	}

	/**
	 * Draw a default arrow cursor shape
	 */
	private drawDefaultCursor(size: number): void {
		this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
		this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
		this.ctx.lineWidth = 1.5;

		// Arrow path (pointing right)
		this.ctx.beginPath();
		this.ctx.moveTo(0, 0);
		this.ctx.lineTo(size * 0.8, size * 0.3);
		this.ctx.lineTo(size * 0.4, size * 0.4);
		this.ctx.lineTo(size * 0.7, size * 0.9);
		this.ctx.lineTo(size * 0.5, size);
		this.ctx.lineTo(size * 0.2, size * 0.5);
		this.ctx.lineTo(size * 0.4, size * 0.4);
		this.ctx.closePath();

		this.ctx.fill();
		this.ctx.stroke();
	}

	/**
	 * Start the animation loop
	 */
	public start(): void {
		if (this.prefersReducedMotion) {
			console.log('SwarmCanvas: Animation disabled due to prefers-reduced-motion');
			return;
		}

		if (!this.animationId) {
			this.animationId = requestAnimationFrame(this.animate);
		}
	}

	/**
	 * Stop the animation loop
	 */
	public stop(): void {
		if (this.animationId) {
			cancelAnimationFrame(this.animationId);
			this.animationId = 0;
		}
	}

	/**
	 * Clean up resources
	 */
	public destroy(): void {
		this.stop();
		this.particles = [];
	}
}

