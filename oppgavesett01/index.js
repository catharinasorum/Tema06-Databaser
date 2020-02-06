// HTML elementer
const moebelliste = document.querySelector("#moebelliste");
const inpNavn = document.querySelector("#inpNavn");
const inpType = document.querySelector("#inpType");
const inpPris = document.querySelector("#inpPris");
const inpRabatt = document.querySelector("#inpRabatt");
const btnEndre = document.querySelector("#btnEndre");




// Koblingen til databasen 
const db = firebase.firestore(); 
const mr = db.collection("moebelregister");

const endrePris = (id) => {
    const inpFelt = document.getElementById(id);
    const nyPris = inpFelt.value;

    mr.doc(id).update({
        pris: nyPris
    });
};

mr.onSnapshot(snap => {
    moebelliste.innerHTML = "";

    for(const moebel of snap.docs) {
        moebelliste.innerHTML += `
            <div> ${moebel.data().navn} </div>
            <div> ${moebel.data().type} </div>
            <div> ${moebel.data().pris} </div>
            <input type="number" id="${moebel.id}">
            <button onclick="endrePris('${moebel.id}')">Endre pris</button>
            <div> ${moebel.data().rabatt} </div>
        `;
    }
});

// Funksjonen for å legge til møbel
const leggtilMoebel = async (navn, type, pris, rabatt) => {
    const nyttMoebel = await mr.add({
        navn: navn,
        type: type,
        pris: pris,
        rabatt: rabatt
    });
};

btnEndre.onclick = () => {
    leggtilMoebel(inpNavn.value, inpType.value, inpPris.value, inpRabatt.value);
    inpNavn.value = "";
    inpType.value = "";
    inpPris.value = ""; 
    inpRabatt.value = "";
    inpNavn.focus();
};


// Oppgave 2
/*
mr.doc("hpsTd7Fw7oxFOgm8MZU9").update({
    pris: 3999
});
*/

// Oppgave 1 - Hentet møbler fra Jysk
/*
leggtilMoebel("Vandborg", "Skrivebord", 599, 0);
leggtilMoebel("Vandborg", "Reol", 799, 0);
leggtilMoebel("Trappedal", "Reol", 899, 0);
leggtilMoebel("Hejlsminde", "Vegghylle", 250, 0);
leggtilMoebel("Dokkedal", "TV-bord", 699, 0);
leggtilMoebel("Temprakon", "Kontinentalseng", 23000, 19999);
leggtilMoebel("Halshuse", "Lenestol", 4699, 0);
leggtilMoebel("Egedal", "Sofa", 4499, 0);
leggtilMoebel("Virum", "Konsollbord", 899, 450);
leggtilMoebel("Branderup", "Spisegruppe", 4999, 0);
*/