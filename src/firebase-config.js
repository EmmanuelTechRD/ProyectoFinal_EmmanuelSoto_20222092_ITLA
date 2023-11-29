import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbMmWU8X6D4yqMCoSi9nyhekJKni5LYKI",
  authDomain: "muro-interactivo-esoto.firebaseapp.com",
  projectId: "muro-interactivo-esoto",
  storageBucket: "muro-interactivo-esoto.appspot.com",
  messagingSenderId: "732062700989",
  appId: "1:732062700989:web:e08390366f57162998aed4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();