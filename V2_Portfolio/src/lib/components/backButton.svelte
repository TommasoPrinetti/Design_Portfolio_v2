<script>
	import iconBack from '$lib/assets/backIcon.svg';
</script>

<button
	class="fixed z-50 cursor-pointer border-none bg-transparent p-0 transition-all duration-300 ease-in-out hover:scale-115 hover:rotate-5 hover:opacity-80"
	onclick={() => window.history.back()}
>
	<img src={iconBack} alt="back" class="h-6 w-6" />
</button>

<style>
	button {
		left: 20px;
		top: 20px;
	}

	@media (min-width: 768px) {
		button {
			left: calc(50vw - 22.5vw - 2rem);
			top: 3rem;
		}
	}
</style>
