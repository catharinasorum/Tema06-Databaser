<svelte:head>
    <title>SAPPER LIVE</title>
</svelte:head>

<script>
    import Kamper from "./../components/Kamper.svelte"
    import {onMount} from "svelte"

    let db // ref til firestore
    let lagData // ref til collection i Firestore

    let lagene = [] // et array med alle lagene

    onMount(
        () => {
            db = firebase.firestore()
            lagData = db.collection("lagData")

            lagData
                .orderBy("p", "desc")
                .orderBy("m", "desc")
                .orderBy("mp", "desc")
                .onSnapshot(snap => {
                    lagene = snap.docs
                })
        }
    )
</script>


<h1>Dagens tabell</h1>

<table>
    <thead>
        <tr>
            <th></th>
            <th></th>
            <th>S</th>
            <th>V</th>
            <th>U</th>
            <th>T</th>
            <th>MF</th>
            <th>M</th>
            <th>P</th>
        </tr>
    </thead>

    <tbody>
        {#each lagene as lag, indeks}
            <tr>
                <td>{indeks + 1}</td>
                <td class="left">{lag.data().navn}</td>
                <td>{lag.data().s}</td>
                <td>{lag.data().v}</td>
                <td>{lag.data().u}</td>
                <td>{lag.data().t}</td>
                <td>{lag.data().m}</td>
                <td>{lag.data().mp}-{lag.data().mm}</td>
                <td>{lag.data().p}</td>
            </tr>
        {:else}
            <tr>
                <td>Loading...</td>
            </tr>
        {/each}
    </tbody>
</table>

<Kamper />

<style>
    table {
        width: 100%;
        border-collapse: collapse; /* får vekk kantlinjene fra tabellen */
    }

    th, td {
        text-align: center;
        padding: .5rem 1rem;
    }

     .left {
        text-align: left;
    }

    tbody tr {
        border-bottom:  1px solid #ddd;
    }
    s
    tbody tr:nth-child(even) {
        background-color: #eee;
    }

   
</style>