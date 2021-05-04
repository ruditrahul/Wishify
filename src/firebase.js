
import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
        apiKey: "AIzaSyA7bH2D2qEXLKIpleG0JEsFXI5KG2eVF7A",
        authDomain: "wishify-fd553.firebaseapp.com",
        projectId: "wishify-fd553",
        storageBucket: "wishify-fd553.appspot.com",
        messagingSenderId: "804809975132",
        appId: "1:804809975132:web:9cec3fb28ce67091b6cd99"
})

const db=firebaseApp.firestore();

export  default  db ;