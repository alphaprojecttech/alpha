import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyAGKQZh2a1B8OiCZbf2T9UmOEaOJHVwZT4",
  authDomain: "alpha-project-405b5.firebaseapp.com",
  databaseURL: "https://alpha-project-405b5-default-rtdb.firebaseio.com",
  projectId: "alpha-project-405b5",
  storageBucket: "alpha-project-405b5.appspot.com",
  messagingSenderId: "10242689522",
  appId: "1:10242689522:web:2b3d16fd2e7186de6a436b",
  measurementId: "G-D9JN87C1XB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const fsDb = getFirestore(app);
const storage = getStorage(app);
const rtDb = getDatabase(app)

export { auth, fsDb, rtDb, storage };