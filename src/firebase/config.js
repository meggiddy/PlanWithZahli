import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyCHPHyskZt4X5YSbIJHFaw4W0ZTMhXRovY",
  authDomain: "planwithzahli.firebaseapp.com",
  projectId: "planwithzahli",
  storageBucket: "planwithzahli.appspot.com",
  messagingSenderId: "946681974126",
  appId: "1:946681974126:web:39a30b4fce5d3c7c49057f",
  measurementId: "G-W50LERP1GQ",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


export { firebaseConfig };
