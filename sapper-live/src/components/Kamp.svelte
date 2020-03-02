<script>

    import {onMount} from "svelte"

    export let hjemmeID
    export let borteID

    let db // Firestore
    let lagData // Collection om lagene
    let hjemmelag // Hjemmelag i databasen
    let bortelag // Bortelag i databasen

    onMount(
        () => {
            db = firebase.firestore()
            lagData = db.collection("lagData")
            hjemmelag = lagData.doc(hjemmeID)
            bortelag = lagData.doc(borteID)


            // Skru denne av og på for å nulle ut
         /*    hjemmelag.update({
                p: 0,
                m: 0,
                mp: 0,
                mm: 0
            })

            bortelag.update({
                p: 0,
                m: 0,
                mp: 0,
                mm: 0
            }) */
            // Ferdig med utnulling
        }
    )

</script>

<div>{hjemmeID} - {borteID}</div>