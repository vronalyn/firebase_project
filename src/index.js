// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword,  createUserWithEmailAndPassword } from "firebase/auth";
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
//import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword,  createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGPOnEilGSDUFs2AHehyRmPvxtiWaCXbw",
  authDomain: "rmv-project.firebaseapp.com",
  projectId: "rmv-project",
  storageBucket: "rmv-project.appspot.com",
  messagingSenderId: "220570554353",
  appId: "1:220570554353:web:0764b7e3f6c953eaf1be50",
  measurementId: "G-TW4YWP18MS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)

const googleSignInBtn = document.querySelector('.google-signIN');
const provider = new GoogleAuthProvider();
const auth = getAuth();

document.getElementById("signup-btn").addEventListener("click", function() {
    var username = document.getElementById("signup-uname").value;
    var email= document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;

    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        //console.log(user);
        alert("Signed up Successful!", user);
        window.location.href = "./main.html";
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorMessage);
        alert(error);
    });
});

document.getElementById("login-btn").addEventListener("click", function(){
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        //console.log(user);
        alert("Welcome back! "+user.email);
        window.location.href = "./main.html";
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        console.log(errorMessage);
        alert(errorMessage);
    });
});

googleSignInBtn.addEventListener('click', () => {
    signInWithPopup(auth, provider).then((result) => {
       const user = result.user;
       alert(`Hello ${user.displayName}! You signed in using Google.`); 
       window.location.href = "./main.html";
    }).catch((error) => {
        const errorMessage = error.message;
        alert(`Error: ${errorMessage}!`);
    });
});

