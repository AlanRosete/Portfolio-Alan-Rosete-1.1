// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, addDoc, collection } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAloRGcFDdedMAFedFEmTTnpp3Z8skPuo8",
  authDomain: "js-portfolio-form.firebaseapp.com",
  projectId: "js-portfolio-form",
  storageBucket: "js-portfolio-form.firebasestorage.app",
  messagingSenderId: "236762152691",
  appId: "1:236762152691:web:c270c1dbb943c612e10186",
  measurementId: "G-HMMES2CEXC"
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
