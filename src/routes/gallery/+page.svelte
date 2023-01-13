<script lang="ts">
	import Image from './Image.svelte';
	import { projects } from '../projects';

	let mouseDown = 0;
	let lastPercentage = 0;
	let percentage = 0;
	let trackElement: HTMLElement;
	let mainElement: HTMLElement;

	let move = (positionX: number) => {
		if (mouseDown == 0 || trackElement == null) {
			return;
		}
		const mouseDelta = mouseDown - positionX,
			maxDelta =
				window.innerWidth /
				Number(getComputedStyle(mainElement).getPropertyValue('--delta_change'));
		percentage = (mouseDelta / maxDelta) * -100 + lastPercentage;
		percentage = Math.min(0, percentage);
		percentage = Math.max(-90, percentage);

		trackElement.animate(
			{ transform: `translate(${percentage}%, -50%)` },
			{ duration: 1200, fill: 'forwards' }
		);

		for (const image of trackElement.querySelectorAll('img')) {
			if (!(image instanceof HTMLElement)) {
				continue;
			}

			image.animate(
				{ objectPosition: `${percentage + 100}% -50%` },
				{ duration: 1200, fill: 'forwards' }
			);
		}
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main
	data-mouse-down-at={mouseDown}
	bind:this={mainElement}
	on:mousedown={(e) => (mouseDown = e.clientX)}
	on:touchstart={(e) => (mouseDown = e.touches[0].clientX)}
	on:mouseup={(e) => {
		mouseDown = 0;
		lastPercentage = percentage;
	}}
	on:touchend={(e) => {
		mouseDown = 0;
		lastPercentage = percentage;
	}}
	on:mousemove={(e) => move(e.clientX)}
	on:touchmove={(e) => move(e.touches[0].clientX)}
>
	<div class="track" bind:this={trackElement}>
		{#each projects as project}
			<Image title={project.title} href={project.demo ?? ''} src={project.images[0].src} />
		{/each}
	</div>
</main>

<style>
	main {
		position: absolute;
		inset: 0;
		background-color: black;
		overflow: hidden;

		--width: 40vmin;
		--height: 56vmin;
		--delta_change: 2;
	}

	@media (max-width: 768px) {
		main {
			--width: 250px;
			--height: 400px;
			--delta_change: 1;
		}
	}

	.track {
		display: flex;
		gap: 4vmin;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(0, -50%);
		margin-left: calc(var(--width) / -2);
		user-select: none;
	}

	.track :global(img) {
		width: var(--width);
		height: var(--height);
		object-fit: cover;
		object-position: 100% 50%;
	}
</style>
