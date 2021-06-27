import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyCG9tDz7Ys8J5AFgusgrL3gWLwlhrQ8urQ",
    authDomain: "weather-6dd2b.firebaseapp.com",
    projectId: "weather-6dd2b",
    storageBucket: "weather-6dd2b.appspot.com",
    messagingSenderId: "634687085302",
    appId: "1:634687085302:web:616a102e283f81d26f6ad7"
};
firebase.initializeApp(firebaseConfig)
const auth = firebase.auth();
const db = firebase.firestore();
const stoage = firebase.stoage();

export { auth,db,stoage }
