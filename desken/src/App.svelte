<script>
	import {db, storage} from "./firebase.js"
	import Preview from "./Preview.svelte"
	
	let overskrift = ""
	let progresjon = "Venter på preview av bildet"
	let url = ""
	let files = []
	$: file = files[0] // en dynamisk variabel

	// laster opp bildet
	const lastOpp = async () => {

		progresjon = "... laster opp bildet ..."

		const sti = storage
			.ref()
			.child("minebilder/" + file.name)

		const opplastning = await sti.put(file)
		const imgURL = await opplastning.ref.getDownloadURL()
		url = imgURL
	}

	// bildet er lastet opp i storage, nå legges denne overskriften inn sammen med bildet i databasen
	const lagreArtikkel = () => {
		const arkiv = db.collection("arkiv")
		arkiv.add({url, overskrift});

		url = ""
		overskrift = ""
		progresjon = ""
	}

</script>

<main>
	<h1>Desken</h1>

	<div class="container">
		<input type="file" bind:files multiple>
		{#if file}
			<div>Filen du har valg er {file.name}</div>
			<button on:click={lastOpp}>Last opp bilde</button>
		{:else}
			<div>Velg en fil som du vil laste opp</div>
		{/if}

		{#if url}
			<img src={url} alt="">

			<form on:submit|preventDefault={lagreArtikkel}>
				<input type="text" bind:value={overskrift} placeholder="overskrift" required>
				<button>Lagre artikkel</button>
			</form>
		{:else} 
			<div>{progresjon}</div>
		{/if}
	</div>
	
	<Preview />


</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		width: 70vw;
		margin: 0 auto;
	}


	main img {
		max-width: 100%;
	}

	h1 {
		color: #069c5e;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	.container {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: 2rem;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>