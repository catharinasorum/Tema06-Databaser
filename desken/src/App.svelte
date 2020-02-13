<script>
	import {db, storage} from "./firebase.js"
	
	let files = []
	$: file = files[0] // en dynamisk variabel

</script>

<main>
	<h1>Desken</h1>
	<input type="file" bind:files multiple>
	{#if file}
		<div>Filen du har valg er {file.name}</div>
	{:else}
		<div>Velg en fil som du vil laste opp</div>
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #069c5e;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>