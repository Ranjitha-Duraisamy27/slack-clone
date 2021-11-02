// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2j_ZfTW2EZQb90k8FMW0smSiqMha7Tg0",
  authDomain: "slack-clone-42b93.firebaseapp.com",
  projectId: "slack-clone-42b93",
  storageBucket: "slack-clone-42b93.appspot.com",
  messagingSenderId: "202020960323",
  appId: "1:202020960323:web:f1cb16a2a3859371e1fcf6",
  measurementId: "G-H1X8VDJKB2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore(app);
