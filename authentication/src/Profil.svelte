<script>

    import {db} from ".firebase.js"

    export let displayName
    export let uid
    export let photoURL

    const users = db.collection("users")

    users
        .doc(uid)
        .set({displayName, photoURL})

</script>

<section>
    <p>Display Name: {displayName}</p>
    <p>User ID: {uid}</p>
    <p>Photo URL: {photoURL}</p>
</section>