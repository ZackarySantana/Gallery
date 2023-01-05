<script lang="ts">
	let icons = GetLogos();

	function GetLogos() {
		return [
			{
				link: 'https://reactjs.org/',
				icon: 'react'
			},
			{
				link: 'https://preactjs.com/',
				icon: 'preact'
			},
			{
				link: 'https://www.mongodb.com/',
				icon: 'mongodb'
			},
			{
				link: 'https://twind.dev/',
				icon: 'twind'
			},
			{
				link: 'https://remix.run/',
				icon: 'remix'
			},
			{
				link: 'https://www.docker.com/',
				icon: 'docker'
			},
			{
				link: 'https://prometheus.io/',
				icon: 'prometheus'
			},
			{
				link: 'https://www.java.com/',
				icon: 'java'
			},
			{
				link: 'https://grafana.com/',
				icon: 'grafana'
			},
			{
				link: 'https://firebase.google.com/',
				icon: 'firebase'
			},
			{
				link: 'https://svelte.dev/',
				icon: 'svelte'
			},
			{
				link: 'https://tailwindcss.com/',
				icon: 'tailwind'
			},
			{
				link: 'https://git-scm.com/',
				icon: 'git'
			},
			{
				link: 'https://fly.io/',
				icon: 'fly'
			},
			{
				link: 'https://nodejs.org/en/',
				icon: 'nodejs'
			},
			{
				link: 'https://web.dev/progressive-web-apps/',
				icon: 'pwa'
			},
			{
				link: 'https://strapi.io/',
				icon: 'strapi'
			},
			{
				link: 'https://go.dev/',
				icon: 'golang'
			},
			{
				link: 'https://www.splunk.com/',
				icon: 'splunk'
			},
			{
				link: 'https://www.python.org/',
				icon: 'python'
			},
			{
				link: 'https://streamlit.io/',
				icon: 'streamlit'
			},
			{
				link: 'https://www.solidjs.com/',
				icon: 'solid'
			},
			{
				link: 'https://vitejs.dev/',
				icon: 'vite'
			}
		].sort(() => (Math.random() < 0.5 ? -1 : 1));
	}
</script>

<div class="wrapper">
	{#each icons as icon, i}
		<a
			href={icon.link}
			target="_blank"
			rel="noopener noreferrer"
			class="icon"
			style={`animation-delay: -${i * 2}s;`}
		>
			<img src={`/tech/${icon.icon}.svg`} alt={icon.icon} />
		</a>
	{/each}
</div>

<style>
	div.wrapper {
		width: calc(100% - 4vw);
		margin-top: 5vh;
		margin-inline: 2vw;
		position: relative;

		display: flex;
		gap: 30px;
		height: 75px;
	}

	a {
		position: absolute;
		right: 0;
		animation: across-screen 46s linear infinite;
		opacity: 0;
		transition-property: opacity;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
		height: 75px;
		width: 75px;
	}

	img {
		height: 100%;
		width: 100%;
	}

	@keyframes across-screen {
		0% {
			opacity: 0;
		}
		25% {
			opacity: 1;
		}
		45% {
			opacity: 0;
			transform: translate(calc(-100vw + 7.5rem + 75px), 0);
			pointer-events: unset;
		}
		46% {
			pointer-events: none;
		}
	}

	@keyframes across-small-screen {
		0% {
			opacity: 0;
			transform: translate(calc(-1.4rem), 0);
		}
		15% {
			opacity: 1;
		}
		30% {
			opacity: 0;
			transform: translate(calc(-100vw + 4.8rem + 20px), 0);
			pointer-events: unset;
		}
		21% {
			pointer-events: none;
		}
	}

	@keyframes across-very-small-screen {
		0% {
			opacity: 0;
			transform: translate(1.3rem, 0);
		}
		10% {
			opacity: 1;
		}
		20% {
			opacity: 0;
			transform: translate(calc(-100vw + 1rem + 20px), 0);
			pointer-events: unset;
		}
		21% {
			pointer-events: none;
		}
	}

	@media (max-width: 1100px) {
		div.wrapper {
			height: 50px;
		}

		a {
			height: 50px;
			width: 50px;
			animation: across-small-screen 46s linear infinite;
		}
	}

	@media (max-width: 550px) {
		a {
			animation: across-very-small-screen 46s linear infinite;
		}
	}
</style>
