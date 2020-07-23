import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDGwGXraouP18guuXCX6AGpxO1p1oad4Cc",
        authDomain: "insta-clone-4c134.firebaseapp.com",
        databaseURL: "https://insta-clone-4c134.firebaseio.com",
        projectId: "insta-clone-4c134",
        storageBucket: "insta-clone-4c134.appspot.com",
        messagingSenderId: "1035296039289",
        appId: "1:1035296039289:web:5d67e0db68c895796e0fa8",
        measurementId: "G-P6QSZ3B96H"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};
