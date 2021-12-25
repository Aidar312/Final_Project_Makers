import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCd7WNGVkP-Pd26gzpjLeE8rmodLgV6O9I",
  authDomain: "aidar-max.firebaseapp.com",
  projectId: "aidar-max",
  storageBucket: "aidar-max.appspot.com",
  messagingSenderId: "399970121782",
  appId: "1:399970121782:web:4376ef4e0c6ae5354b0097"
};


const fire = firebase.initializeApp(firebaseConfig);

export default fire;


