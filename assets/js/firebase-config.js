// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, addDoc, collection } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

const firebaseConfig = {

  apiKey: "AIzaSyAtHM0KnBDm2IOTi3wBQSOxb9IdGiISvN8",

  authDomain: "form-portfolio-3692e.firebaseapp.com",

  projectId: "form-portfolio-3692e",

  storageBucket: "form-portfolio-3692e.appspot.com",

  messagingSenderId: "784136490108",

  appId: "1:784136490108:web:2b6e48f750e2283ddf4df9"

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
