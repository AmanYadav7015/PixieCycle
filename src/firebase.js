import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup,connectAuthEmulator } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBFE5lmvgIBvwOQjuWl3Jr8QLKr2Zr2zRA",
  authDomain: "pixiecycle-91448.firebaseapp.com",
  projectId: "pixiecycle-91448",
  storageBucket: "pixiecycle-91448.firebasestorage.app",
  messagingSenderId: "776334094264",
  appId: "1:776334094264:web:913dd3d3c845ffdd13694d",
  measurementId: "G-MTVB3ZMZ4R"
};
//forget password

// const auth = getAuth();

// Connect Firebase Authentication to the Emulator

const actionCodeSettings = {
  url: 'https://pixiecycle-91448.web.app/login',
  handleCodeInApp: true, 
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup,actionCodeSettings };