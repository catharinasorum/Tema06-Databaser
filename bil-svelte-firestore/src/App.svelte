<script>

	import Biler from "./Biler.svelte"

</script>

<main>
	<h1>Bilregisteret</h1>
	<Biler />
</main>

<style>
main {
	text-align: center;
	padding: 1em;
	max-width: 240px;
	margin: 0 auto;
}

h1 {
	color: #000000;
	text-transform: uppercase;
	font-size: 3.5em;
	font-weight: 100;
}

@media (min-width: 640px) {
	main {
		max-width: none;
	}
}
</style>