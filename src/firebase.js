import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey:"",
  authDomain: "react-pallav.firebaseapp.com",
  projectId: "react-pallav",
  storageBucket: "react-pallav.appspot.com",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
