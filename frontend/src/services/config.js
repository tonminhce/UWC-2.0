// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkuv9KP8q1u1CAKrBOrq8ocRJjDofrlOQ",
    authDomain: "uwc2-f2f36.firebaseapp.com",
    projectId: "uwc2-f2f36",
    storageBucket: "uwc2-f2f36.appspot.com",
    messagingSenderId: "34812379163",
    appId: "1:34812379163:web:f0b570f6f8161ad49b38be",
    measurementId: "G-5BDHGRE024"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);