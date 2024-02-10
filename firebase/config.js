// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8TIVYfUTGvqWNq13rnHK-waRSTYZTzMw",
  authDomain: "lemonies-f40a0.firebaseapp.com",
  projectId: "lemonies-f40a0",
  storageBucket: "lemonies-f40a0.appspot.com",
  messagingSenderId: "766029477710",
  appId: "1:766029477710:web:a383130219717bd2f3101f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)