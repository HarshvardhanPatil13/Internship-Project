// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMQLR_snoIXmfUGlYwFD0LV0UScJBAKo4",
  authDomain: "internarea-193f6.firebaseapp.com",
  projectId: "internarea-193f6",
  storageBucket: "internarea-193f6.firebasestorage.app",
  messagingSenderId: "186401079193",
  appId: "1:186401079193:web:5ef8f53964a572b39a5d08",
  measurementId: "G-3ENDJFG9CP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider}