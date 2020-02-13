<script>

    import {db} from "./firebase.js"
    let artikler = []

    const arkiv = db.collection("arkiv");
    arkiv.onSnapshot(snap => {
        artikler = snap.docs
    })

</script>

<div class="under">
    <h1>Dagens nytt</h1>
    <hr>

    <section>
        {#each artikler as artikkel}
            <article>
                <img src={artikkel.data().url} alt="">
                <h2>{artikkel.data().overskrift}</h2>
            </article>
        {:else}
            <div>Laster innhold...</div>
        {/each}
    </section>
</div>

<style>

.under {
    margin-top: 5rem;
    margin-bottom: 2rem;
}

h1 {
    color: #0d5e3c;
    text-transform: uppercase;
    font-size: 2em;
    font-weight: 100;
}

h2 {
    color: #0d5e3c;
    text-transform: uppercase;
    font-size: 1.4em;
    font-weight: 100;
}

section img {
    width: 100%;
}

hr {
    width: 20vw;
    margin-bottom: 2rem;
}

section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
}
</style>