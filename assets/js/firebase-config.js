// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, addDoc, collection } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";


const firebaseConfig = {

  apiKey: "AIzaSyCiQarW0EW_sFhlHjRnsXOCyDK3dcqvlP0",

  authDomain: "testt-af3ac.firebaseapp.com",

  projectId: "testt-af3ac",

  storageBucket: "testt-af3ac.appspot.com",

  messagingSenderId: "119958141785",

  appId: "1:119958141785:web:54888a8c0a6af9cb45ea48",

  measurementId: "G-T4G9ZPHX6B"

};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Function Send Data 
export async function sendFormData(name, email, message) {
  try {
    await addDoc(collection(db, "contacts"), {
      name,
      email,
      message,
    });
    return true; // Good 
  } catch (error) {
    console.error("Error: ", error);
    return false; // Internal Error
  }
}
