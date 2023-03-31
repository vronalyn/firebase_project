// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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