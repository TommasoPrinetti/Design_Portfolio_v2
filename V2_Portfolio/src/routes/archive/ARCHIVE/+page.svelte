<script>
	import Header from '$lib/components/header.svelte';
	import BackButton from '$lib/components/backButton.svelte';
</script>

<div
	class="relative mx-auto my-auto flex w-full max-w-full flex-col justify-center md:max-w-[45%] md:justify-items-start"
>
	<BackButton />
	<div
		class="flex-start relative scrollbar-none flex max-h-screen w-full flex-col gap-8 overflow-y-scroll"
	>
		<Header
			title="Archive"
			payoff="traces of my design journey."
			description="These “archives” are an agglomerate of all the design projects, brand identities, graphics, visuals, photographic and art direction projects, websites, etc.. that I could put my hands on in the latest years. I’ve never been interested in fixing vertically into one expertise, but rather approaching the same object from various creative angles, forms an holistic bond with each topic, company, project I dig into.."
		/>
	</div>
</div>
