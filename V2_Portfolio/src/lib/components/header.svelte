<script lang="ts">
	let props = $props();
	import BottomSignal from '$lib/components/bottomSignal.svelte';
	import { isBurgerOpen } from '$lib/data/stores';
	import Burger from '$lib/components/burger.svelte';

	$inspect(isBurgerOpen);
</script>

<div
	class="relative flex h-screen w-full flex-col justify-center gap-2 p-5 md:mt-12 md:h-auto md:w-auto md:justify-start md:p-0"
>
	<BottomSignal targetId="Sections" />
	<Burger />

	{#if props?.logo}
		<div class="flex flex-col justify-center gap-2 md:hidden">
			<img src={props.logo} alt="logo of {props.title}" class="h-7 w-fit" />
		</div>
	{/if}

	{#if props.image}
		<img
			src={props.image}
			alt={props.title}
			class="mx-1 inline h-7 w-7 align-middle transition-all duration-500 ease-in-out hover:scale-200 md:hidden"
		/>
	{/if}

	<h1>
		{#if props.title}
			<span>{props.title}</span>
		{/if}
		{#if props.image}
			<img
				src={props.image}
				alt={props.title}
				class="mx-1 hidden h-5 w-5 align-middle transition-all duration-500 ease-in-out hover:scale-200 md:inline"
			/>
		{/if}
		{#if props.payoff}
			<span class="payoff-text"> - {props.payoff} </span>
		{/if}
	</h1>
	<p class="text-[#000001]">{props.description}</p>
	{#if props.info}
		<p class="text-sm">{props.info}</p>
	{:else if props.email}
		<a href="mailto:{props.email}" target="_blank" class="w-fit">
			<p class="w-fit text-xs text-[#777777] hover:underline">{props.email}</p>
		</a>
	{/if}
</div>

<style>
	.payoff-text {
		color: #000001;
	}

	@media (min-width: 768px) {
		.payoff-text {
			color: #777777;
		}
	}
</style>
