<svelte:head>
    <title>Registrer nye lag</title>
</svelte:head>

<script>
    import {onMount} from "svelte"

    let db 
    let lagData

    // Verdier som skal bindes til skjemaet
    let lagID = ""
    let lagNavn = ""

    onMount(
        async () => {
            db = firebase.firestore()
            lagData = db.collection("lagData")
        }
    )

    const regLag = () => {
        lagData
            .doc(lagID)
            .set({
                navn: lagNavn,
                s: 0,
                v: 0,
                u: 0,
                t: 0,
                m: 0,
                mp: 0,
                mm: 0,
                p: 0
            })

        lagID = ""
        lagNavn = ""
    }


</script>

<h1>Registrer et nytt lag til turneringen</h1>

<form on:submit|preventDefault={regLag}>
    <input bind:value={lagID} placeholder="Lagets id" required>
    <input bind:value={lagNavn} placeholder="Navn på laget" required>
    <button>Registrer nytt lag</button>
</form>

<hr>


<p>ID: {lagID}</p>
<p>Lagnavn: {lagNavn}</p>


<style>

    form {
        margin-top: 2rem;
    }

    input, button {
        border-radius: 5px;
    }

    input {
        padding: 1rem;
    }
    button {
        padding: 1rem 4rem;
    }


</style>