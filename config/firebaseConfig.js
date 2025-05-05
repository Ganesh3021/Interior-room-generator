// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getstorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-interior-room-design.firebaseapp.com",
  projectId: "ai-interior-room-design",
  storageBucket: "ai-interior-room-design.firebasestorage.app",
  messagingSenderId: "960312560480",
  appId: "1:960312560480:web:7954def6d5a5e453366c05",
  measurementId: "G-XHDYGC1QG3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getstorage(app)
