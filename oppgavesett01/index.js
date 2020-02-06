// HTML elementer


// Koblingen til databasen 
const db = firebase.firestore(); 
const mr = db.collection("moebelregister");

// Funksjonen for å legge til møbel
const leggtilMoebel = async (navn, type, pris, rabatt) => {
    const nyttMoebel = await mr.add({
        navn: navn,
        type: type,
        pris: pris,
        rabatt: rabatt
    });
};

// Hentet møbler fra Jysk
leggtilMoebel("Vandborg", "Skrivebord", 599, 399);
leggtilMoebel("Vandborg", "Reol", 799, 599);
leggtilMoebel("Trappedal", "Reol", 899, 699);
leggtilMoebel("Hejlsminde", "Vegghylle", 250, 250);
leggtilMoebel("Dokkedal", "TV-bord", 699, 599);
leggtilMoebel("Temprakon", "Kontinentalseng", 23000, 19999);
leggtilMoebel("Halshuse", "Lenestol", 4699, 3999);
leggtilMoebel("Egedal", "Sofa", 4499, 3999);
leggtilMoebel("Virum", "Konsollbord", 899, 450);
leggtilMoebel("Branderup", "Spisegruppe", 4999, 3895);