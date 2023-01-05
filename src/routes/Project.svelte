<script lang="ts">
	import type { Project } from './projects';

	export let project: Project;
</script>

<section>
	<div id={project.idElement} class="left">
		<h2>{project.title}</h2>
		<img src={project.images[0].src} alt={project.images[0].alt} />
		<div class="links">
			{#if project.demo}
				<a href={project.demo} target="_blank" rel="noreferrer">Live Preview</a>
			{/if}
			{#if project.github}
				<a href={project.github} target="_blank" rel="noreferrer">Source</a>
			{/if}
		</div>
		<p class="description">{project.description}</p>
		<h3 class="techs-header">Technology</h3>
		<ul class="techs">
			{#each project.techs as tech}
				<li>{tech}</li>
			{/each}
		</ul>
	</div>
	<div class="right">
		<h3>Project difficulties</h3>
		<p>{project.projectDifficulties}</p>
		<h3>Solution</h3>
		<p>{project.solution}</p>
		<h3>Features</h3>
		<ul>
			{#each project.features as feature}
				<li>{feature}</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	section {
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-template-rows: 1fr;
		grid-template-areas: 'left right';
	}

	div.left {
		grid-area: left;
		width: calc(150px * 16 / 9);
		margin-right: 1rem;
	}

	h2,
	h3 {
		margin-top: 0;
	}

	h3 {
		margin: 0;
	}

	a {
		color: rgb(129, 129, 233);
		text-decoration: underline;
		text-decoration-color: rgb(129, 129, 233, 0.4);
	}

	img {
		width: 100%;
		min-width: 100%;
		height: 150px;
		aspect-ratio: 16 / 9;
	}

	div.links {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	p.description {
		margin: 0;
		margin-top: 0.5em;
		font-size: 0.9em;
		font-weight: 400;
	}

	h3.techs-header {
		margin-top: 2rem;
	}

	ul.techs {
		columns: 2;
	}

	div.right p {
		color: rgba(255, 255, 255, 0.8);
		font-weight: 400;
		margin-top: 0.25em;
		margin-bottom: 1.5rem;
	}

	li {
		color: rgba(255, 255, 255, 0.8);
		font-weight: 400;
	}

	li {
		margin-bottom: 0.5rem;
	}
</style>
