// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC8TIVYfUTGvqWNq13rnHK-waRSTYZTzMw",
  authDomain: "lemonies-f40a0.firebaseapp.com",
  projectId: "lemonies-f40a0",
  storageBucket: "lemonies-f40a0.appspot.com",
  messagingSenderId: "766029477710",
  appId: "1:766029477710:web:a383130219717bd2f3101f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()