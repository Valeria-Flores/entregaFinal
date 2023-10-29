// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPN40iJqgODnkRahe8OuI2DYlSi-UCpmc",
  authDomain: "proyectofinalflores.firebaseapp.com",
  projectId: "proyectofinalflores",
  storageBucket: "proyectofinalflores.appspot.com",
  messagingSenderId: "227996176792",
  appId: "1:227996176792:web:abc9c6ea95666911c7dbed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)