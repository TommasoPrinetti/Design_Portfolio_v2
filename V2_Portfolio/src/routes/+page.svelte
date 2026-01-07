<script lang="ts">
	import Me from '$lib/assets/IconMe.png';
	import { portfolioData } from '$lib/data/portfolio';
	import { goto } from '$app/navigation';
	import Header from '$lib/components/header.svelte';
	import Canvas from '$lib/components/canvas.svelte';

	const { header, sections, footer } = portfolioData;
</script>

<section
	class="relative mx-auto my-auto flex w-full max-w-full flex-col justify-center gap-4 md:max-w-[45%] md:justify-items-center"
	id="central_section"
>
	<Header
		title={header.name}
		payoff={header.title}
		image={Me}
		description={header.description}
		email={header.email}
	/>

	<div
		class="scrollbar-none flex h-dvh flex-col justify-center gap-4 p-5 md:justify-start md:p-0"
		id="Sections"
	>
		{#each sections as section}
			<div class="flex flex-col gap-1">
				<h2 class="text-lg font-normal">{section.categoryTitle}</h2>
				{#each section.items as item}
					{#if item.isHighlighted}
						<p class="text-m inline flex-wrap items-center" id="section-item">
							{#if item.routeId || item.url}
								<a
									href={item.routeId ? `/archive/${item.routeId!}` : item.url}
									target={item.url ? '_blank' : undefined}
									rel={item.url ? 'noopener noreferrer' : undefined}
									onclick={(e) => {
										if (item.routeId) {
											e.preventDefault();
											goto(`/archive/${item.routeId!}`);
										}
									}}
									class="underline underline-offset-3"
								>
									{#if item.title}
										<span
											class="text-[#0A0A0A] transition-all duration-200 ease-in-out hover:pl-0.5"
										>
											{item.title}
											({item?.timespan})
										</span>
									{/if}
								</a>
							{:else}
								<span class="text-[#0A0A0A] underline"> {item.title} </span>
							{/if}
							{#if item.icon}
								<img src={item.icon} alt={item.title} class="mx-1 inline h-4 align-middle" />
							{/if}
							{#if item.description}
								{@const description = item.description.trim().split(' ').slice(0, 30).join(' ')}
								<span class="hidden text-[#777777] md:inline"> {description}... </span>
							{/if}
						</p>
					{/if}
				{/each}
			</div>
		{/each}

		<!-- Footer -->
		<div class="hidden flex-col gap-2 pt-2 md:flex">
			<div class="flex gap-4">
				{#each footer.links as link}
					<a href={link.url} class="text-xs text-[#777777] hover:underline">
						{link.label}
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>
