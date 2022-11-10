import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD-gqa3l0I_nHHICPivakJ5K0UXgLOp518",
  authDomain: "alphaproject-120e3.firebaseapp.com",
  databaseURL: "https://alphaproject-120e3-default-rtdb.firebaseio.com",
  projectId: "alphaproject-120e3",
  storageBucket: "alphaproject-120e3.appspot.com",
  messagingSenderId: "1093550450299",
  appId: "1:1093550450299:web:af4fb894d371d14c7824de",
  measurementId: "G-4VWGE87VDQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };