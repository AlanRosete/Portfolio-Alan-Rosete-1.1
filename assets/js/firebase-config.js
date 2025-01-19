// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, addDoc, collection } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAXEIw5w6G1HxexuATgXVHBPd5kNJ27dq8",
  authDomain: "test-form-28517.firebaseapp.com",
  projectId: "test-form-28517",
  storageBucket: "test-form-28517.firebasestorage.app",
  messagingSenderId: "770454833881",
  appId: "1:770454833881:web:f295ae765f7e0083fd4cc8",
  measurementId: "G-7MSNYDEJWT"
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
