// Import the functions you need from the SDKs you need
import { initializeApp }  from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRU61ZF7FvqQugFOlh3ZVNaFT-soe-lQY",
  authDomain: "finances-36d4f.firebaseapp.com",
  projectId: "finances-36d4f",
  storageBucket: "finances-36d4f.appspot.com",
  messagingSenderId: "554892062062",
  appId: "1:554892062062:web:010e01fe03f3b5a0f3257f",
  measurementId: "G-XH9KGXXZSD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
