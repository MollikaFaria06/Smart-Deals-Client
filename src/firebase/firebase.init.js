// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXUTiMvMFCzL96_NPQwWUrWQ5r74XdLiE",
  authDomain: "smart-deals-a9a09.firebaseapp.com",
  projectId: "smart-deals-a9a09",
  storageBucket: "smart-deals-a9a09.firebasestorage.app",
  messagingSenderId: "1061808780171",
  appId: "1:1061808780171:web:e204595d5c4e349b90758e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app); 