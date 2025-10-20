import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
// import 'dotenv/config';

const getEnvVar = (key) => {
  return (
    (typeof process !== "undefined" && process.env && process.env[key]) ||
    (typeof window !== "undefined" && window.env && window.env[key]) ||
    null
  );
};

export const firebaseConfig = {
  apiKey: getEnvVar("API_KEY"),
  authDomain: getEnvVar("AUTH_DOMAIN"),
  projectId: getEnvVar("PROJECT_ID"),
  storageBucket: getEnvVar("STORAGE_BUCKET"),
  messagingSenderId: getEnvVar("MESSAGING_SENDER_ID"),
  appId: getEnvVar("APP_ID"),
  measurementId: getEnvVar("MEASUREMENT_ID"),
};

console.log("Firebase config loaded:", firebaseConfig);

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