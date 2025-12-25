<script lang="ts">
	import Me from '$lib/assets/IconMe.png';
	import { portfolioData } from '$lib/data/portfolio';
	import { goto } from '$app/navigation';

	const { header, sections, footer } = portfolioData;
</script>

<section
	class="mx-auto my-auto flex max-h-screen w-full max-w-[45%] flex-col justify-center gap-8 overflow-y-hidden"
>
	<!-- Header Section -->
	<div class="mt-12 flex flex-col gap-2">
		<h1 class="text-xl font-normal">
			<span>{header.name}</span>
			<img src={Me} alt={header.name} class="mx-1 inline h-5 w-5 align-middle" />
			<span class="text-[#777777]"> {header.title} </span>
		</h1>
		<p>{header.description}</p>
		<a href="mailto:{header.email}" target="_blank" class="w-fit">
			<p class="w-fit text-xs text-[#777777] hover:underline">{header.email}</p>
		</a>
	</div>

	<div class="flex flex-col gap-4">
		{#each sections as section}
			<div class="flex flex-col gap-1">
				<h2 class="text-lg font-normal">{section.categoryTitle}</h2>
				{#each section.items as item}
					<p>
						{#if item.route || item.url}
							<a
								href={item.route || item.url || '#'}
								target={item.url ? '_blank' : undefined}
								rel={item.url ? 'noopener noreferrer' : undefined}
								onclick={(e) => {
									if (item.route) {
										e.preventDefault();
										goto(item.route!);
									}
								}}
								class="underline underline-offset-3"
							>
								<span class="text-[#0A0A0A] transition-all duration-200 ease-in-out hover:pl-0.5">
									{item.title}
								</span>
							</a>
						{:else}
							<span class="text-[#0A0A0A] underline"> {item.title} </span>
						{/if}
						{#if item.icon}
							<img src={item.icon} alt={item.title} class="mx-1 inline h-4 align-middle" />
						{/if}
						<span class="text-[#777777]"> {item.description} </span>
					</p>
				{/each}
			</div>
		{/each}

		<!-- Footer -->
		<div class="flex flex-col gap-2 pt-2">
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
