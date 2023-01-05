<script>
	let navItems = [
		['Zackary Santana', '/'],
		['LinkedIn', 'https://linkedin.com/in/zackary-santana'],
		['GitHub', 'https://github.com/ZackarySantana/'],
		['Resume', '/ZackarySantana_Resume.pdf']
	];
</script>

<header>
	<nav>
		<ul>
			<li class="logo">
				<a href={navItems[0][1]}>{navItems[0][0]}</a>
			</li>
			<div class="wrapper">
				<div class="hamburger">
					<div />
					<div />
					<div />
				</div>
				<div class="items">
					{#each navItems.splice(1) as item}
						<li>
							{#if item[1].startsWith('/')}
								<a href={item[1]}>{item[0]}</a>
							{:else}
								<a href={item[1]} target="_blank" rel="noreferrer">{item[0]}</a>
							{/if}
						</li>
					{/each}
				</div>
			</div>
		</ul>
	</nav>
</header>

<style>
	header {
		width: 100vw;
		height: 5vh;
		min-height: 50px;
		padding-block: 25px;
		background-color: #313131;
		box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);
	}

	nav {
		height: 100%;
	}

	ul {
		padding: 0;
		margin: 0;
		margin-inline: 20vw;
		height: 100%;

		display: flex;
		align-items: center;

		list-style-type: none;
	}

	div.wrapper {
		flex: 1;
		height: 100%;
		position: relative;
	}

	div.hamburger {
		display: none;
	}

	div.items {
		display: flex;
		gap: 10px;
		justify-content: space-around;
		align-items: center;
		height: 100%;
	}

	li.logo {
		font-size: 2em;
		margin-right: 20vw;
	}

	li {
		transition: all 200ms;
	}

	a {
		text-decoration: none;
		color: white;
	}

	@media (max-width: 1250px) {
		ul {
			margin-inline: 5vw;
		}

		li.logo {
			font-size: 1.5em;
			margin-right: 5vw;
		}
	}

	@media (min-width: 551px) {
		li:not(.logo):hover {
			font-size: 1.5em;
		}
	}

	@media (max-width: 550px) {
		div.wrapper {
			margin-left: auto;
			width: 50px;
			flex: unset;
		}

		div.hamburger {
			display: unset;
		}

		div.hamburger div {
			position: absolute;
			right: 20px;

			transform: rotate(90deg);

			width: 4px;
			height: 50%;

			background-color: white;
		}

		div.hamburger div:nth-of-type(1) {
			top: 0px;
		}

		div.hamburger div:nth-of-type(2) {
			top: 10px;
		}

		div.hamburger div:nth-of-type(3) {
			top: 20px;
		}

		div.items {
			display: none;
			position: absolute;
			z-index: 100;
			top: 90%;
			right: 0;

			flex-direction: column;
			gap: 10px;

			background-color: #313131;
			padding-block: 30px;
			padding-inline: 20px;
			box-shadow: 2px 2px 20px 5px rgba(0, 0, 0, 0.2);
		}

		div.wrapper:hover div.items {
			display: flex;
		}
	}
</style>
