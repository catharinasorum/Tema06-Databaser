const oversikt = document.querySelector("#oversikt");

const db = firebase.firestore(); 
const mr = db.collection("moebelregister");
