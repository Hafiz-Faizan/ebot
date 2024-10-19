// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Corrected the import
import { getFirestore } from "firebase/firestore"; // Corrected the import
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfO8a6Yqvr9LZuI_S3WnBlKqRx3nmqMBg",
    authDomain: "ebot-6a534.firebaseapp.com",
    projectId: "ebot-6a534",
    storageBucket: "ebot-6a534.appspot.com",
    messagingSenderId: "253450411753",
    appId: "1:253450411753:web:5b7b97e288f3da6af95a78",
    measurementId: "G-LW7FW281MH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app); // Pass `app` to `getAuth`
export const db = getFirestore(app)
export default app;
