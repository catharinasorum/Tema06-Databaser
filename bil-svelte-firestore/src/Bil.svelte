<script>

    import {db} from "./firestore.js"
    const bilregister = db.collection("bilregister")

    export let id = ""
    export let bildata = {}

    let endre = false;

    const endreBil = () => {
        const bil = bilregister.doc(id)

        bil.update({
            merke: bildata.merke,
            modell: bildata.modell
        });
    }

    const slettBil = () => {
        const bil = bilregister.doc(id)
        bil.delete()
    }

    const toggleEndre = () => {
        endre = !endre;
    }
</script>

{#if !endre}
<section class="bil">
    <div>{id}</div>
    <div>{bildata.merke}</div>
    <div>{bildata.modell}</div>
    <button on:click={toggleEndre}>Endre</button>
    <button on:click={slettBil}>X</button>
</section>
{:else}
<section class="bil">
    <div>{id}</div>
    <input type="text" bind:value={bildata.merke} on:input={endreBil}>
    <input type="text" bind:value={bildata.modell} on:input={endreBil}>
    <button on:click={toggleEndre}>Lagre</button>
    <button on:click={slettBil}>X</button>
</section>
{/if}


<style>
    .bil {
        display: grid;
        grid-template-columns: auto 2fr 2fr auto auto;
        align-items: center;
        gap: 1rem;
        padding: .5rem;
    }

    .bil div {
        padding: .25rem;
    }

    .bil input, .bil button {
        margin: 0;
    }

    .bil:nth-child(odd) {
        background-color: #eee;
    }


</style>