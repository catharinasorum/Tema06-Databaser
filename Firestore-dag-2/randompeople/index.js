const main = document.querySelector("main");
const inpQuery = document.querySelector("#inpQuery");



const db = firebase.firestore();
const randomusers = db.collection("randomusers");

// Henter fra databasen
const showUsers = async (land) => {
    
    const users = await randomusers
        .where("country", "==", land)
        //.where("country", "==", "Denmark") // får kun opp de som har Danmark som land
        //.where("country", "in", ["Denmark", "Norway"])  // både Norge og Danmark
        //.limit(32) // får bare de 32 første fra databasen
        .get();
    
    for( const theuser of users.docs ) {
        const user = theuser.data();
        main.innerHTML += `
        <article>
            <img src="${user.picture}">
            <div class="info">
                <h2>${user.title} ${user.first} ${user.last}</h2>
                <p>From ${user.city}, ${user.country}</p>
                <p>I am ${user.age} year old</p>
                </div>
        </article>
        `;
    };
};

inpQuery.oninput = () => {
    main.innerHTML = "";    
    showUsers(inpQuery.value);
}

// Lager Random users
const createRandomUsers = async() => {
    const response = await fetch("https://randomuser.me/api/?results=10"); //response = svaret fra api
    const json = await response.json();
    const users = json.results;

    for( const user of users ) {
        randomusers.doc(user.email).set({ // doc(user.email) = bruker doc for å sette IDen til emailen.
            // tar ut de verdiene vi vil ha i vår database.
            first: user.name.first,
            last: user.name.last,
            title: user.name.title,
            country: user.location.country,
            //country_caps: (user.location.country).toUpperCase(),
            city: user.location.city,
            age: user.dob.age,
            picture: user.picture.large
        });
    };
};

// createRandomUsers(); // for å lage flere brukere i databasen, fjern kommenteringen