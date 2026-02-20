// Lee la config generada por generate-env.js (inyectada via firebase-env.js)
const config = (typeof window !== "undefined" && window.__FIREBASE_CONFIG__) || {};

export const firebaseConfig = {
  apiKey: config.API_KEY,
  authDomain: config.AUTH_DOMAIN,
  projectId: config.PROJECT_ID,
  storageBucket: config.STORAGE_BUCKET,
  messagingSenderId: config.MESSAGING_SENDER_ID,
  appId: config.APP_ID,
  measurementId: config.MEASUREMENT_ID,
};

console.log("Firebase config loaded:", firebaseConfig);

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const analytics = firebase.analytics();

export async function sendFormData(name, email, message) {
  try {
    await db.collection("contacts").add({
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