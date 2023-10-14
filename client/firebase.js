// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApN5iYz4JhRyJHzEmTXleSE5yghZOvM3k",
  authDomain: "saxichat.firebaseapp.com",
  projectId: "saxichat",
  storageBucket: "saxichat.appspot.com",
  messagingSenderId: "336911539806",
  appId: "1:336911539806:web:89eab0783d20c79587decf",
  measurementId: "G-39G4LV1L7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
