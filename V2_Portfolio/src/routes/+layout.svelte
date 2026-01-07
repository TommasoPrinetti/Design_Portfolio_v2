<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import BurgerButton from '$lib/components/burgerButton.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<BurgerButton />
{@render children()}
