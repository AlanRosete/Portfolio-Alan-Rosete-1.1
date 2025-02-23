// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, addDoc, collection } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyD2jaH9mp1K_bdT0G2MKNLzO9MBsCOt948",
  authDomain: "formmaindb.firebaseapp.com",
  projectId: "formmaindb",
  storageBucket: "formmaindb.firebasestorage.app",
  messagingSenderId: "808721546269",
  appId: "1:808721546269:web:3adc02768ef08738a85af4",
  measurementId: "G-86K8Y29QH4"
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
