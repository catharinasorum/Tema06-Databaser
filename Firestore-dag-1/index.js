// HTML elementer
const inpNavn = document.querySelector("#inpNavn");
const inpYrke = document.querySelector("#inpYrke");
const btn = document.querySelector("#btn");
const info = document.querySelector("#info");


const db = firebase.firestore(); //db = database
const pr = db.collection("personregister"); // pr = personregister

// Oppdatere noe
/*const bilreg = db.collection("bilreg");
bilreg.doc("EV90000").set({
    merke: "Nissan",
    modell: "Leaf",
    hk: 190
});

bilreg.doc("EV90000").update({
    hk: 290
});
*/

const endreYrke = (id) => {
    const inpFelt = document.getElementById(id);
    const nyttYrke = inpFelt.value;

    pr.doc(id).update({
        yrke: nyttYrke
    });
}

pr.onSnapshot(snap => {
    info.innerHTML = `
        <div class="heading"><b>Navn</b></div>
        <div class="heading"><b>Yrke</b></div>
        <div class="heading"><b>Nytt yrke</b></div>
        <div class="heading"><b>Endre yrke</b></div>
    
    `;
    for(const person of snap.docs) {
        info.innerHTML += `
            <div> ${ person.data().navn } </div>
            <div> ${ person.data().yrke } </div>
            <input type="text" id="${person.id}">
            <button onclick="endreYrke('${person.id}')">Endre yrke</button>
        `;

    }
});

// Lager en funksjon for å legge til person
const leggTilPerson = async (navn, yrke) => {
    const nyPerson = await pr.add({
        navn: navn,
        yrke: yrke
    });

};

btn.onclick = () => {
    leggTilPerson(inpNavn.value, inpYrke.value);
    inpNavn.value = "";
    inpYrke.value = "";
    inpNavn.focus();
};