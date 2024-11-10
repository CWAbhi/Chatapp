// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBH0fmMbWOWyhymhjrq7qlvgyU9BlpjrPs",
  authDomain: "chatapp-a86f6.firebaseapp.com",
  projectId: "chatapp-a86f6",
  storageBucket: "chatapp-a86f6.firebasestorage.app",
  messagingSenderId: "573876975388",
  appId: "1:573876975388:web:f5ae6fa366b9bda972ecd9",
  measurementId: "G-2FZHLCXNVS"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();