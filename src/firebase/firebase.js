
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyeiCz2k0wLTrDgFWJNLBfxi8wIFPANUM",
  authDomain: "mdev-dashboard.firebaseapp.com",
  projectId: "mdev-dashboard",
  storageBucket: "mdev-dashboard.appspot.com",
  messagingSenderId: "125671107142",
  appId: "1:125671107142:web:c651b720fba5a0a9d3b847"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };