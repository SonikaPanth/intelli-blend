// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "intelliblend-20a0c.firebaseapp.com",
  projectId: "intelliblend-20a0c",
  storageBucket: "intelliblend-20a0c.firebasestorage.app",
  messagingSenderId: "310560454224",
  appId: "1:310560454224:web:b3663a73dde901c9e60355",
  measurementId: "G-Z12LM1V6HS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
