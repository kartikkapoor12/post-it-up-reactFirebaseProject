import { initializeApp } from "firebase/app";
import {getAuth ,GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA96XI8xszfVvuQvETk3f6t7cdugYPfgpU",
  authDomain: "postitup-1214d.firebaseapp.com",
  projectId: "postitup-1214d",
  storageBucket: "postitup-1214d.appspot.com",
  messagingSenderId: "22487472502",
  appId: "1:22487472502:web:1e632081bd508b2ad08257",
  measurementId: "G-F7V188H10B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);   //