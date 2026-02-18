const env = (typeof window !== "undefined" && window.env) || {};

export const firebaseConfig = {
  apiKey: process.env.API_KEY || env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN || env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID || env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET || env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID || env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID || env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID || env.MEASUREMENT_ID,
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