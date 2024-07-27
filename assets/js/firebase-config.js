// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, addDoc, collection } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBKT6yEKArmmxaVuLo2jUGOT6-Gn5VJzoA",

  authDomain: "testing-form-3ed5a.firebaseapp.com",

  projectId: "testing-form-3ed5a",

  storageBucket: "testing-form-3ed5a.appspot.com",

  messagingSenderId: "143993195071",

  appId: "1:143993195071:web:2251df6828bdf65b9ec68a",
  
  measurementId: "G-6B6Y4QWMXX"
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
