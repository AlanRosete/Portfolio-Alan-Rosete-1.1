
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