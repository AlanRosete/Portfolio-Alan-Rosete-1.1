// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, addDoc, collection } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBQnUVDTRkPUfQtJh6eNXbTv6bk7-csJes",

  authDomain: "form-portfolio-ec8f0.firebaseapp.com",

  projectId: "form-portfolio-ec8f0",

  storageBucket: "form-portfolio-ec8f0.appspot.com",

  messagingSenderId: "100926940687",

  appId: "1:100926940687:web:36c35175d9879bd4e5657a",
  
  measurementId: "G-VKDQQWYBJ9"
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
