<script lang="ts">
	let { data } = $props();

	import Header from '$lib/components/header.svelte';
	import BackButton from '$lib/components/backButton.svelte';
	import IntersectionObserver from 'svelte-intersection-observer';

	let elements: (HTMLImageElement | HTMLVideoElement)[] = $state([]);
	let intersecting: boolean[] = $state([]);

	$inspect(data);
</script>

<div
	class="relative mx-auto my-auto flex h-fit w-full max-w-full flex-col justify-center gap-2 md:max-w-[45%] md:justify-items-start"
>
	<BackButton />
	<div class="flex flex-col gap-8">
		{#if data.project.title}
			{@const logoMedia = Object.values(data.medias).find((media) =>
				media.default.includes('Logo')
			)}
			{@const logo = logoMedia?.default}
			<Header
				title={data.project.title}
				payoff={data.project.payoff}
				description={data.project.description}
				info={data.project.info}
				{logo}
			/>
		{/if}
		<!-- Content Section -->
		<div class="flex-start group relative mb-6 flex flex-col gap-4 p-5 md:p-0" id="Sections">
			{#each Object.values(data.medias) as media, i}
				{@const mediaName = media.default}
				{#if mediaName.includes('.jpg')}
				<IntersectionObserver
						element={elements[i]}
						bind:intersecting={intersecting[i]}
						threshold={0.9}
					>
					<img bind:this={elements[i]} class="h-auto w-full object-cover" src={mediaName} alt="" />
				</IntersectionObserver>
				{:else if mediaName.includes('.mp4')}
					<IntersectionObserver
						element={elements[i]}
						bind:intersecting={intersecting[i]}
						threshold={0.9}
					>
						<video
							bind:this={elements[i]}
							class="h-auto w-full object-cover transition-all duration-600 ease-in-out group-hover:opacity-50 hover:opacity-100 {intersecting[i] ? 'inview' : 'notinview'}"
							src={mediaName}
							autoplay
							muted
							loop
						>
							<track kind="captions" class="display: none;" />
						</video>
					</IntersectionObserver>
				{/if}
			{/each}
		</div>
	</div>
</div>

<style>
	:global(.inview) {
		transform: scale(1.05);
		transform-origin: center;
		box-sizing: content-box;
		padding: 10px 0px;
		margin: 10px 0px;
		border-radius: 5px;
	}

	:global(.notinview) {
		transform: scale(1);
		transform-origin: center;
		border-radius: 5px;
	}
</style>
