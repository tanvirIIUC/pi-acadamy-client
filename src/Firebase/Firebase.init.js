// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn0_j5NlLfuc353PJjHG5VzuLirJ7yegI",
  authDomain: "pi-acadamy.firebaseapp.com",
  projectId: "pi-acadamy",
  storageBucket: "pi-acadamy.appspot.com",
  messagingSenderId: "640838230292",
  appId: "1:640838230292:web:b8edd6d53c10c013e6a201"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;