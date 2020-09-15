import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firebase-database';

const fb = firebase.initializeApp({
    apiKey: "AIzaSyBPZ_8-Zhw5yJWrUX8KbM7HEzff5VmeMKY",
    authDomain: "order-1440a.firebaseapp.com",
    databaseURL: "https://order-1440a.firebaseio.com",
    projectId: "order-1440a",
    storageBucket: "order-1440a.appspot.com",
    messagingSenderId: "369960312938",
    appId: "1:369960312938:web:c0070905b5d6cf5828aa13"
});

export default fb; 