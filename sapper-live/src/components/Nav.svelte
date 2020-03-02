<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
		gap: .1rem;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - .5rem);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav>
	<a aria-current='{segment === undefined ? "page" : undefined}' href='.'>home</a>
	<a aria-current='{segment === "about" ? "page" : undefined}' href='about'>about</a>
	<a aria-current='{segment === "tabell" ? "page" : undefined}' href='tabell'>tabell</a>
	<a aria-current='{segment === "registrer" ? "page" : undefined}' href='registrer'>registrer lag</a>
</nav>
