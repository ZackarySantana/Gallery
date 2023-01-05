<script>
	import Project from './Project.svelte';
	import { projects } from './projects';
</script>

<main>
	<h1>Table of Contents</h1>
	<ul>
		{#each projects as project}
			<li class="title">
				<a href={`#${project.idElement}`}>{project.title}</a>
				<ul>
					<li>{project.shortDescription}</li>
					{#if project.github}
						<li><a href={project.github}>GitHub</a></li>
					{/if}
					{#if project.demo}
						<li><a href={project.demo}>Demo</a></li>
					{/if}
				</ul>
			</li>
		{/each}
	</ul>
</main>
{#each projects as project}
	<section>
		<Project {project} />
	</section>
{/each}

<style>
	main,
	section {
		margin-inline: 20vw;
		margin-top: 2vh;
		padding: 20px;
		color: white;
		background-color: #313131;
		box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);
	}

	main {
		margin-top: 5vh;
	}

	h1 {
		margin: 0;
		font-size: 1.5em;
	}

	li.title {
		margin-top: 10px;
	}

	a {
		color: white;
		text-decoration: underline;
		text-decoration-color: rgba(255, 255, 255, 0.4);
	}

	@media (max-width: 1250px) {
		main,
		section {
			margin-inline: 5vw;
		}
	}
</style>
