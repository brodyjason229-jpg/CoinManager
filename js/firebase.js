// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAv9O--wMT7tQw6urGBbGYannzPFWeDmRE",
  authDomain: "coinmanager-24e60.firebaseapp.com",
  projectId: "coinmanager-24e60",
  storageBucket: "coinmanager-24e60.firebasestorage.app",
  messagingSenderId: "271294282874",
  appId: "1:271294282874:web:410eb047c96d620bb74fc3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);