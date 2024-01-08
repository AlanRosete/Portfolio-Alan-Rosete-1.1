// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, addDoc, collection } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyD3Q-lfogx38ArECVHcTFmnn1UAEI7SkIw",
  authDomain: "form-8fc5a.firebaseapp.com",
  databaseURL: "https://form-8fc5a-default-rtdb.firebaseio.com",
  projectId: "form-8fc5a",
  storageBucket: "form-8fc5a.appspot.com",
  messagingSenderId: "314958638040",
  appId: "1:314958638040:web:4278994755966c6e0da0ad",
  measurementId: "G-9868HPEGDW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Función para enviar el formulario a Firestore
export async function sendFormData(name, email, message) {
  try {
    await addDoc(collection(db, "contacts"), {
      name,
      email,
      message,
    });
    return true; // Éxito
  } catch (error) {
    console.error("Error: ", error);
    return false; // Error
  }
}
