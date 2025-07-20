// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, addDoc, collection } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDqV_Vs_SdttCNMbxOilkwRgRGJexY0joY",
  authDomain: "form-portfolio-db.firebaseapp.com",
  projectId: "form-portfolio-db",
  storageBucket: "form-portfolio-db.firebasestorage.app",
  messagingSenderId: "114797988180",
  appId: "1:114797988180:web:e6c2888752527ce6fae0c1",
  measurementId: "G-E6HX02DB8M"
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
