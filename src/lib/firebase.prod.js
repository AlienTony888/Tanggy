// src/lib/firebase.prod.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYu_uh8D6CQ5mIo19a9XV7WEuZ0AFFtf8",
  authDomain: "tanggy-85666.firebaseapp.com",
  projectId: "tanggy-85666",
  storageBucket: "tanggy-85666.firebasestorage.app",
  messagingSenderId: "201997265381",
  appId: "1:201997265381:web:665ed578a649be8f98a70c",
  measurementId: "G-NHY1X8057H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Wrap for context compatibility
const firebase = { app, auth, db };

export { app, auth, db, firebase };
