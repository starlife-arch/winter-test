import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBOzQLCgmKOFpyNnKXc0gZ-deCpNIqhn60",
  authDomain: "winter-tech-site.firebaseapp.com",
  projectId: "winter-tech-site",
  storageBucket: "winter-tech-site.firebasestorage.app",
  messagingSenderId: "5313650126",
  appId: "1:5313650126:web:dbfbdde6848a1c38411f9f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export { onAuthStateChanged, signOut };
