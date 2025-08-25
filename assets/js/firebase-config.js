import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, addDoc, collection } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBhS_HiO1d6SnW32fyytvwXiu6nah3x4Hg",
  authDomain: "add-form-portfolio.firebaseapp.com",
  projectId: "add-form-portfolio",
  storageBucket: "add-form-portfolio.firebasestorage.app",
  messagingSenderId: "809001225924",
  appId: "1:809001225924:web:71ff4c459dc16348efc391"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export async function sendFormData(name, email, message) {
  try {
    await addDoc(collection(db, "contacts"), {
      name,
      email,
      message,
    });
    return true;
  } catch (error) {
    console.error("Error: ", error);
    return false;
  }
}
