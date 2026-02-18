const env = (typeof window !== "undefined" && window.env) || {};

let parcelEnv = {};
try {
  parcelEnv = {
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    APP_ID: process.env.APP_ID,
    MEASUREMENT_ID: process.env.MEASUREMENT_ID,
  };
} catch (e) {
  console.log("Error en variables parcel", e);
}

export const firebaseConfig = {
  apiKey: parcelEnv.API_KEY || env.API_KEY,
  authDomain: parcelEnv.AUTH_DOMAIN || env.AUTH_DOMAIN,
  projectId: parcelEnv.PROJECT_ID || env.PROJECT_ID,
  storageBucket: parcelEnv.STORAGE_BUCKET || env.STORAGE_BUCKET,
  messagingSenderId: parcelEnv.MESSAGING_SENDER_ID || env.MESSAGING_SENDER_ID,
  appId: parcelEnv.APP_ID || env.APP_ID,
  measurementId: parcelEnv.MEASUREMENT_ID || env.MEASUREMENT_ID,
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