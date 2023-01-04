<script lang="ts">
	import Navbar from './Navbar.svelte';
</script>

<svelte:head>
	<title>Zackary S.</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Navbar />
<slot />

<style>
	:global(body) {
		background-color: #1e1e1e;
		width: 100vw;
		max-width: 100vw;
		margin: 0;
		font-family: 'Queensides', sans-serif;
		font-weight: 600;
	}

	@font-face {
		font-family: 'Queensides';
		src: url('/fonts/QueensidesLight.ttf') format('truetype');
		font-weight: 400;
	}

	@font-face {
		font-family: 'Queensides';
		src: url('/fonts/QueensidesMedium.ttf') format('truetype');
		font-weight: 500;
	}

	@font-face {
		font-family: 'Queensides';
		src: url('/fonts/QueensidesHeavy.ttf') format('truetype');
		font-weight: 600;
	}
</style>
