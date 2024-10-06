// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Corrected the import
import { getFirestore } from "firebase/firestore"; // Corrected the import
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMIWjG4Shdd4V73Z_I0RJJcEb9dLlQcus",
    authDomain: "ecbot-b75e4.firebaseapp.com",
    projectId: "ecbot-b75e4",
    storageBucket: "ecbot-b75e4.appspot.com",
    messagingSenderId: "839721775787",
    appId: "1:839721775787:web:978ac0088fe357747bfdee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app); // Pass `app` to `getAuth`
export const db = getFirestore(app)
export default app;
