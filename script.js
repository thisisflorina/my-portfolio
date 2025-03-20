document.addEventListener("DOMContentLoaded", function () {
    console.log("%c Welcome to Florina's Cyber World! ", "color: lime; font-size: 16px;");
});
document.addEventListener("DOMContentLoaded", function() {
    let text = "Welcome to Florina's Cyber World...";
    let index = 0;
    function typeEffect() {
        if (index < text.length) {
            document.getElementById("typing").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();
});
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrz9fIrf85BxYCx-rQrJfae4O8-AY9hag",
  authDomain: "portfolio-d0a5a.firebaseapp.com",
  projectId: "portfolio-d0a5a",
  storageBucket: "portfolio-d0a5a.firebasestorage.app",
  messagingSenderId: "74107609413",
  appId: "1:74107609413:web:33a97111192cfa02259e2c",
  measurementId: "G-ENRK2SG573"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
