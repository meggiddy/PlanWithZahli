// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseui from "firebaseui";
// To update the snippets in this file, edit the source and then run
// 'npm run snippets'.

import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
const phoneNumber = getPhoneNumberFromUserInput();
const appVerifier = window.recaptchaVerifier;

const auth = getAuth();
signInWithPhoneNumber(auth, phoneNumber, appVerifier)
  .then((confirmationResult) => {
    // SMS sent. Prompt user to type the code from the message, then sign the
    // user in with confirmationResult.confirm(code).
    window.confirmationResult = confirmationResult;
    // ...
  })
  .catch((error) => {
    // Error; SMS not sent
    // ...
  });

window.recaptchaVerifier = new RecaptchaVerifier(
  "sign-in-button",
  {
    size: "invisible",
    callback: (response) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      onSignInSubmit();
    },
  },
  auth
);
grecaptcha.reset(window.recaptchaWidgetId);

// Or, if you haven't stored the widget ID:
window.recaptchaVerifier.render().then(function (widgetId) {
  grecaptcha.reset(widgetId);
});

const code = getCodeFromUserInput();
confirmationResult
  .confirm(code)
  .then((result) => {
    // User signed in successfully.
    const user = result.user;
    // ...
  })
  .catch((error) => {
    // User couldn't sign in (bad verification code?)
    // ...
  });

var credential = firebase.auth.PhoneAuthProvider.credential(
  confirmationResult.verificationId,
  code
);
firebase.auth().signInWithCredential(credential);

// [END auth_phone_recaptcha_verifier_invisible_modular]
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHPHyskZt4X5YSbIJHFaw4W0ZTMhXRovY",
  authDomain: "planwithzahli.firebaseapp.com",
  projectId: "planwithzahli",
  storageBucket: "planwithzahli.appspot.com",
  messagingSenderId: "946681974126",
  appId: "1:946681974126:web:39a30b4fce5d3c7c49057f",
  measurementId: "G-W50LERP1GQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
