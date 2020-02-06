// HTML elementer
const inpNavn = document.querySelector("#inpNavn");
const inpYrke = document.querySelector("#inpYrke");
const btn = document.querySelector("#btn");
const info = document.querySelector("#info");


const db = firebase.firestore(); //db = database
const pr = db.collection("personregister"); // pr = personregister

pr.onSnapshot(snap => {
    info.innerHTML = `
        <div class="heading"><b>Navn</b></div>
        <div class="heading"><b>Yrke</b></div>
    
    `;
    for(const person of snap.docs) {
        info.innerHTML += `
            <div> ${ person.data().navn } </div>
            <div> ${ person.data().yrke } </div>
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