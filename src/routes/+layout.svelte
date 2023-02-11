<script>
  	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import Navbar from './Navbar.svelte';
</script>

	<Navbar />

	<main class="w-full h-full px-3">
		<slot />
	</main>
