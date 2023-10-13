// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgliWVyeViVUZV024RZ7lketWPBVBnat0",
  authDomain: "imagedata-7e7cd.firebaseapp.com",
  projectId: "imagedata-7e7cd",
  storageBucket: "imagedata-7e7cd.appspot.com",
  messagingSenderId: "658011916267",
  appId: "1:658011916267:web:3270fb0422f1b87d0d7bae",
  measurementId: "G-DH598TDXSG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestoreDB= getFirestore(app)
// export const storage =getStorage(app)
