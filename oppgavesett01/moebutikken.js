mr.onSnapshot(snap => {
    moebelliste.innerHTML = "";

    // Må legge inn NUMBER i input type number
    for(const moebel of snap.docs) {
        moebelliste.innerHTML += `
            <div> ${moebel.data().navn} </div>
            <div> ${moebel.data().type} </div>
            <div> ${moebel.data().pris} </div>
            <div> ${moebel.data().rabatt} </div>
        `;
    }
});