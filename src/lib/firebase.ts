import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACe8pL0vqD_2NqzhTNOi0VoTyJaYVTkbA",
  authDomain: "panchayat-sahahayk-portal-up.firebaseapp.com",
  projectId: "panchayat-sahahayk-portal-up",
  storageBucket: "panchayat-sahahayk-portal-up.firebasestorage.app",
  messagingSenderId: "709368114724",
  appId: "1:709368114724:web:208c828040f499060e72b1",
};

// Initialize Firebase
export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
