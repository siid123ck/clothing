import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

const config =  {
    apiKey: "AIzaSyDoYJPA2a3d40B9Yb32UOWehAeG07AhzXI",
    authDomain: "clothing-d200d.firebaseapp.com",
    projectId: "clothing-d200d",
    storageBucket: "clothing-d200d.appspot.com",
    messagingSenderId: "767069632372",
    appId: "1:767069632372:web:b8c6a623d06c8b9f265e21",
    measurementId: "G-PGE9LG60NT"
  }
firebase.initializeApp(config);
export const auth= firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;