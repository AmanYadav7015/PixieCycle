import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup,connectAuthEmulator } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyB_dTIPmZU00oJeALzDwqt1WIUCRc6AxbU",
  authDomain: "pixiecycle-bd155.firebaseapp.com",
  projectId: "pixiecycle-bd155",
  storageBucket: "pixiecycle-bd155.firebasestorage.app",
  messagingSenderId: "337441092386",
  appId: "1:337441092386:web:fc439e0450647fce7cab7b",
  measurementId: "G-Y5WGZEPY0R"
};
//forget password

// const auth = getAuth();

// Connect Firebase Authentication to the Emulator

const actionCodeSettings = {
  url: 'https://pixie-cycle.vercel.app/',
  handleCodeInApp: true, 
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup,actionCodeSettings };
