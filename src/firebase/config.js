// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIRE_API_KEY,
  authDomain: "gallery-8ab4e.firebaseapp.com",
  projectId: "gallery-8ab4e",
  storageBucket: "gallery-8ab4e.appspot.com",
  messagingSenderId: "680296230688",
  appId: "1:680296230688:web:2245bbe0e51ef947e3b145"
};

// Initialize Firebase
firebase.FirebaseErrorinitializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };