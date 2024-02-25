import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_KBlyFNxzGFxFjkRZMXY-Qj6vuDmZ-YU",
  authDomain: "ofppt-project.firebaseapp.com",
  projectId: "ofppt-project",
  storageBucket: "ofppt-project.appspot.com",
  messagingSenderId: "97755127678",
  appId: "1:97755127678:web:fef2a983fead9f7d061d2f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
