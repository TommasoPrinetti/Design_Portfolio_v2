<script lang="ts">
	import Me from '$lib/assets/iconMe.png';
	import portfolioData from '$lib/data/portfolio.json';

	const { header, mainExperiences, foregroundProjects, archives, highlights, footer } =
		portfolioData;
</script>

<section
	class="mx-auto my-auto flex max-h-screen w-full max-w-[45%] flex-col justify-center gap-8 overflow-y-hidden"
>
	<!-- Header Section -->
	<div class="flex flex-col gap-2">
		<h1 class="text-xl font-normal">
			<span>{header.name}</span>
			<img src={Me} alt={header.name} class="mx-1 inline h-5 w-5 align-middle" />
			<span class="text-[#777777]"> {header.title} </span>
		</h1>
		<p>{header.description}</p>
		<a href="mailto:{header.email}" target="_blank">
			<p class="text-xs text-[#777777] hover:underline">{header.email}</p>
		</a>
	</div>

	<div class="flex flex-col gap-4">
		<!-- Main Experiences -->
		<div class="flex flex-col gap-1">
			<h2 class="text-lg font-normal">Main Experiences</h2>
			{#each mainExperiences as experience}
				<p>
					<span class="text-[#0A0A0A] underline"> {experience.title} </span>
					{#if experience.icon}
						<img
							src={experience.icon}
							alt={experience.title}
							class="mx-1 inline h-5 w-5 align-middle"
						/>
					{/if}
					<span class="text-[#777777]"> {experience.description} </span>
				</p>
			{/each}
		</div>

		<!-- Foreground Projects -->
		<div class="flex flex-col gap-1">
			<h2 class="text-lg font-normal">Foreground Projects</h2>
			{#each foregroundProjects as project}
				<p>
					<span class="text-[#0A0A0A] underline"> {project.title} </span>
					<span class="text-[#777777]"> {project.description} </span>
				</p>
			{/each}
		</div>

		<!-- Archives -->
		<div class="flex flex-col gap-1">
			<h2 class="text-lg font-normal">{archives.title}</h2>
			<p>
				<span class="text-[#0A0A0A] underline"> Archive </span>
				<span class="text-[#777777]"> {archives.description} </span>
			</p>
		</div>

		<!-- Highlights -->
		<div class="flex flex-col gap-1">
			<h2 class="text-lg font-normal">Highlights</h2>
			{#each highlights as highlight}
				<p>
					<span class="text-[#0A0A0A] underline"> {highlight.title} </span>
					<span class="text-[#777777]"> {highlight.description} </span>
				</p>
			{/each}
		</div>

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
