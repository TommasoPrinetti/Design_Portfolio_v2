<script lang="ts">
	let props = $props();
	import { onMount } from 'svelte';
	let target = $state<HTMLElement | null>(null);

	onMount(() => {
		target = document.getElementById(props.targetId);
	});
</script>

{#if target}
	<button
		class="absolute right-0 bottom-2 left-0 z-2 inline cursor-pointer md:hidden"
		onclick={() => {
			if (target) {
				window.scrollTo({
					top: target.offsetTop,
					behavior: 'smooth'
				});
			}
		}}
	>
		<p class="text-xs text-[#777777]">[Look down here]</p>
	</button>
{/if}
