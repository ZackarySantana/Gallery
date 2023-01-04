<script lang="ts">
	export let src: string;
	export let href: string;
	export let title: string;

	let time: number;
	let imgElement: HTMLImageElement;
</script>

<div
	on:mousedown={() => (time = Date.now())}
	on:mouseup={() => {
		if (Date.now() - time < 200) {
			window.open(href, '_blank');
		}
	}}
>
	<p>{title}</p>
	<img {src} bind:this={imgElement} alt="img1" draggable="false" />
</div>

<style>
	div {
		position: relative;
		cursor: pointer;
	}

	p {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		margin: 0;
		color: white;
		font-size: 2rem;
	}
</style>
