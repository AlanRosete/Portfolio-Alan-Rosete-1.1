// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, addDoc, collection } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";


const firebaseConfig = {
  apiKey: "AIzaSyAoPVPPHnoKyJfrTTY1S9IWdV3cRr-MEOA",
  authDomain: "form-portafolio-8c80a.firebaseapp.com",
  projectId: "form-portafolio-8c80a",
  storageBucket: "form-portafolio-8c80a.appspot.com",
  messagingSenderId: "883227823817",
  appId: "1:883227823817:web:708441ce872883257f0718",
  measurementId: "G-HLKKJYP2BG"
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
