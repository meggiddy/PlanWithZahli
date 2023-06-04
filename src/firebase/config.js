import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export { firebaseConfig };
