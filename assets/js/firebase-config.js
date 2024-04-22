// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, addDoc, collection } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";


const firebaseConfig = {

  apiKey: "AIzaSyAuN5pyXzoS92u-uWaC3ZaDgY1zX1oH4Us",

  authDomain: "form-port-55c86.firebaseapp.com",

  databaseURL: "https://form-port-55c86-default-rtdb.firebaseio.com",

  projectId: "form-port-55c86",

  storageBucket: "form-port-55c86.appspot.com",

  messagingSenderId: "766003034055",

  appId: "1:766003034055:web:9b43fd52a9c808f82f8be2",

  measurementId: "G-T6R1S6W60R"

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
