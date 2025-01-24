// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getActionFromState } from "@react-navigation/native";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD30_D1-ZTLFVE772ZbW11sq7IZmYzVvwg",
  authDomain: "my-project-96eb8.firebaseapp.com",
  projectId: "my-project-96eb8",
  storageBucket: "my-project-96eb8.firebasestorage.app",
  messagingSenderId: "347685018008",
  appId: "1:347685018008:web:17c0318901c407468af3ed",
  measurementId: "G-SCP1GRKTJR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//initialize firestore
const db = getFirestore(app);
const auth = getAuth(app);
export{db,app,auth};