<script lang="ts">
	import { goto } from '$app/navigation';
	import { isBurgerOpen } from '$lib/data/stores';
	import { cubicInOut } from 'svelte/easing';
	import { fade, slide } from 'svelte/transition';
</script>

{#if $isBurgerOpen}
	<div
		out:fade={{ duration: 300, easing: cubicInOut, delay: 450 }}
		in:fade={{ duration: 300, easing: cubicInOut, delay: 0 }}
		class="fixed top-0 right-0 bottom-0 left-0 z-40 flex w-full flex-col justify-center gap-2 bg-white p-5 md:hidden"
		id="burger-menu"
	>
		<a
			href="/"
			onclick={(e) => {
				e.preventDefault();
				goto('/');
			}}
			onkeydown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					goto('/');
				}
			}}
			role="button"
			tabindex="0"
		>
			<h1 transition:slide={{ duration: 300, easing: cubicInOut, delay: 100 }}>Projects</h1>
		</a>
		<a
			href="/experiences"
			onclick={(e) => {
				e.preventDefault();
				goto('/experiences');
			}}
			onkeydown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					goto('/experiences');
				}
			}}
			role="button"
			tabindex="0"
		>
			<h1 transition:slide={{ duration: 300, easing: cubicInOut, delay: 150 }}>Experiences</h1>
		</a>
		<a
			href="/archive"
			onclick={(e) => {
				e.preventDefault();
				goto('/archive');
			}}
			onkeydown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					goto('/archive');
				}
			}}
			role="button"
			tabindex="0"
		>
			<h1 transition:slide={{ duration: 300, easing: cubicInOut, delay: 200 }}>Archive</h1>
		</a>
		<a
			href="/curriculum"
			onclick={(e) => {
				e.preventDefault();
				goto('/curriculum');
			}}
			onkeydown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					goto('/curriculum');
				}
			}}
			role="button"
			tabindex="0"
		>
			<h1 transition:slide={{ duration: 300, easing: cubicInOut, delay: 250 }}>Curriculum</h1>
		</a>
		<a href="https://github.com/TommasoPrinetti" target="_blank">
			<h1 transition:slide={{ duration: 300, easing: cubicInOut, delay: 300 }}>Github</h1>
		</a>
		<a href="mailto:tommi.prinetti@gmail.com" target="_blank">
			<h1 transition:slide={{ duration: 300, easing: cubicInOut, delay: 350 }}>Contact me</h1>
		</a>
	</div>
{/if}
