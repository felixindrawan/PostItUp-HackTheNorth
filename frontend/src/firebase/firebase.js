import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAJC98qCevF2jwcxj3zeF2A5_IWd0Zwmaw",
    authDomain: "postitup.firebaseapp.com",
    projectId: "postitup",
    storageBucket: "postitup.appspot.com",
    messagingSenderId: "500955856267",
    appId: "1:500955856267:web:9c9cbfcdd9cdc61a3a038e",
    measurementId: "G-TE4HTDZ957"
};

firebase.initializeApp(firebaseConfig);

export default firebase;