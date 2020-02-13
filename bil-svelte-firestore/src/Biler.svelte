<script>

    import firebase from "firebase/app"
    import Bil from "./Bil.svelte";
    import {db} from "./firestore.js";
    const bilregister = db.collection("bilregister");

    let merke = "";
    let modell = "";
    let regnr = "";

    let biler = [];

    // Kobler sammen biler og bilregisteret (snapshot fanger opp alt) 
    bilregister.orderBy("tid", "desc").onSnapshot(snap => {
        biler = snap.docs
    });

    const leggTilBil = () => {
        bilregister
            .doc(regnr)
            .set({modell, merke, tid: firebase.firestore.FieldValue.serverTimestamp()})
        
        merke = ""
        modell = ""
        regnr = ""
    }

</script>

<div class="reg">
    <form on:submit|preventDefault={leggTilBil}>
        <input type="text" placeholder="Registreringsnummer" bind:value={regnr}>
        <input type="text" placeholder="Bilmerke" bind:value={merke}>
        <input type="text" placeholder="Bilmodell" bind:value={modell}>
        <button type="submit">Registrer ny bil</button>
    </form>
    
</div>

{#each biler as bil}
    <Bil id={bil.id} bildata={bil.data()} />
{:else}
    <div>Loading...</div>
{/each}

<style>

    .reg {
        margin-bottom: 2rem;
    }
    .reg form{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
    }
</style>