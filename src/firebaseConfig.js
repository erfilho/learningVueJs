// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWUWz8bOV3yttHvJQjmnNLCdwO7Tr5VJU",
  authDomain: "tasklist-78cdb.firebaseapp.com",
  projectId: "tasklist-78cdb",
  storageBucket: "tasklist-78cdb.firebasestorage.app",
  messagingSenderId: "650133943063",
  appId: "1:650133943063:web:884516ce5c3428d3ce3d52",
  measurementId: "G-WMMPGWVBBC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, db };
