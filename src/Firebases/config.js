import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4zSfgOGqAGgQpl4zAtFoKBnTNZJyCaS0",
  authDomain: "ecommerce-shop-7104f.firebaseapp.com",
  projectId: "ecommerce-shop-7104f",
  storageBucket: "ecommerce-shop-7104f.appspot.com",
  messagingSenderId: "54690480563",
  appId: "1:54690480563:web:34ca86e77eba998cdacbc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
