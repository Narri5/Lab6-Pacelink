// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzWyHlYXWBskaoSvawWk1vZfxIbZA-hHQ",
  authDomain: "lab6-pacelink-fd85d.firebaseapp.com",
  projectId: "lab6-pacelink-fd85d",
  storageBucket: "lab6-pacelink-fd85d.firebasestorage.app",
  messagingSenderId: "966056799086",
  appId: "1:966056799086:web:7b962a46600897d380ef7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
