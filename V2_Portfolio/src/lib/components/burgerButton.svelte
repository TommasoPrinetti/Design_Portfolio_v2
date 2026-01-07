<script lang="ts">
	import { isBurgerOpen } from '$lib/data/stores';
	import burgerIcon from '$lib/assets/burgerIcon.svg';
	import closeBurgerIcon from '$lib/assets/closeBurgerIcon.svg';
	import { slide } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
</script>

<button
	id="burger-button"
	class="position fixed top-0 right-0 z-50 cursor-pointer bg-white p-5 active:scale-95 md:hidden"
	onclick={(e) => {
		e.stopPropagation();
		e.preventDefault();
		$isBurgerOpen = !$isBurgerOpen;
	}}
>
	{#if $isBurgerOpen}
		<img
			src={closeBurgerIcon}
			alt="close burger icon"
			class="h-6 w-6"
			transition:slide={{ duration: 300, easing: cubicInOut }}
		/>
	{:else}
		<img
			src={burgerIcon}
			alt="burger icon"
			class="h-6 w-6"
			transition:slide={{ duration: 300, easing: cubicInOut }}
		/>
	{/if}
</button>
