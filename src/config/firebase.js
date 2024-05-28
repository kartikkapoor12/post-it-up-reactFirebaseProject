import { initializeApp } from "firebase/app";
import {getAuth ,GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCIepXDtoit0N_Yzv_fSIfhZAnFrtSaSkc",
  authDomain: "post-it-up-e20b5.firebaseapp.com",
  projectId: "post-it-up-e20b5",
  storageBucket: "post-it-up-e20b5.appspot.com",
  messagingSenderId: "775386208110",
  appId: "1:775386208110:web:81234c33cb9e57e12e137f",
  measurementId: "G-J270SS54PB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);   //