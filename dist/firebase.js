// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, addDoc, 
  getDocs, onSnapshot, deleteDoc, 
  doc, getDoc, updateDoc } 
from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js';



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


// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();


//connectFirestoreEmulator(db, 'localhost', 8080)

/**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 */
export const saveTask = (title, description) =>
  addDoc(collection(db, "tasks"), { title, description });

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tasks", id), newFields);

export const getTasks = () => getDocs(collection(db, "tasks"));
