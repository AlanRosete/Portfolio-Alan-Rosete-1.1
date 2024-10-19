// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, addDoc, collection } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";


const firebaseConfig = {
  apiKey: "AIzaSyBYZbpJ0DNi9vzWfifECduUmdfhfoAhMZ4",
  authDomain: "form-main-portfolio.firebaseapp.com",
  projectId: "form-main-portfolio",
  storageBucket: "form-main-portfolio.appspot.com",
  messagingSenderId: "908324247776",
  appId: "1:908324247776:web:6544040ed668d602a81885",
  measurementId: "G-SQB9XBFPPS"
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
