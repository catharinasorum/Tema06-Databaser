const user = "Catharina";

const messageDiv = document.querySelector("#messageDiv");
const messageForm = document.querySelector("#messageForm");
const messageText = document.querySelector("#messageText");
const inpFarge = document.querySelector("#inpFarge");
const main = document.querySelector("main");



// db = database
const db = firebase.firestore();
const chatten = db.collection("chatten");

chatten.onSnapshot(snap => {
    for( const message of snap.docChanges() ) {

        if(message.type === "added") {
            const melding = message.doc.data();
            messageDiv.innerHTML += `
                <div id="${message.id}">
                    <span>${melding.from}:</span>
                    <span>${melding.text}</span>
                </div>
            `;
        };
    };
});

// Hindrer submitten til å oppdatere siden på nytt når du sender skjemaet
messageForm.onsubmit = (evt) => {
    evt.preventDefault();

    chatten.add({
        from: user,
        text: messageText.value,
        time: firebase.firestore.FieldValue.serverTimestamp()
    });

    messageForm.reset();
};

