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
// Disable right-click
document.addEventListener("contextmenu", (event) => event.preventDefault());

// Disable keyboard shortcuts for DevTools
document.addEventListener("keydown", (event) => {
    if (
        event.key === "F12" || // Disable F12
        (event.ctrlKey && event.shiftKey && event.key === "I") || // Disable Ctrl+Shift+I
        (event.ctrlKey && event.shiftKey && event.key === "J") || // Disable Ctrl+Shift+J
        (event.ctrlKey && event.key === "U") // Disable Ctrl+U (view source)
    ) {
        event.preventDefault();
    }
});

// Disable Inspect Element on right-click for all elements
document.addEventListener("mousedown", function (event) {
    if (event.button === 2) {
        alert("Inspecting is disabled on this website!");
        event.preventDefault();
    }
});
