import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBlcyJkJv3frakZo4ZwsIIqC5ed5LoM1t0",
  authDomain: "react-pallav.firebaseapp.com",
  projectId: "react-pallav",
  storageBucket: "react-pallav.appspot.com",
  messagingSenderId: "1032604083092",
  appId: "1:1032604083092:web:04493a2e5e374ff0c5e581",
  measurementId: "G-T5N3MJQK0P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;