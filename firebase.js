// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "portfolio-9a3ea.firebaseapp.com",
  databaseURL: "https://portfolio-9a3ea-default-rtdb.firebaseio.com",
  projectId: "portfolio-9a3ea",
  storageBucket: "portfolio-9a3ea.appspot.com",
  messagingSenderId: "541567822675",
  appId: "1:541567822675:web:53972b5119031b65160fa6",
  measurementId: "G-L1QB70GVJ5",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
