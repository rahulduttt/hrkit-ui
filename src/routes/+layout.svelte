<script>
	import '../app.css';
	import NavBar from '$components/NavBar.svelte';
</script>

<div class="md:flex md:flex-col h-screen justify-between">
	<header><NavBar /></header>
	<main class="flex-1">
		<div class="container mx-auto py-4">
			<slot />
		</div>
	</main>
	<footer>
		<div class="max-w-xl mx-auto py-8 px-4">
			<p class="text-center text-gray-500 text-sm">&copy; 2023 HRKit</p>
		</div>
	</footer>
</div>
