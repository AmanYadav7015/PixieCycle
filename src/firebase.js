import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyC4ydHQbLQA1sVti6DfnsERIwr0ayhRfJ8",
  authDomain: "pixiecycle-4.firebaseapp.com",
  projectId: "pixiecycle-4",
  storageBucket: "pixiecycle-4.firebasestorage.app",
  messagingSenderId: "186312504852",
  appId: "1:186312504852:web:efa59d56805c5bab8d1901",
  measurementId: "G-C35C82JVZE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };