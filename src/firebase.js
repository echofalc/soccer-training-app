// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDot7uX4OwwVwS85Ty9ifCYWS9tH_IuZEc",
  authDomain: "soccer-app-24a93.firebaseapp.com",
  projectId: "soccer-app-24a93",
  storageBucket: "soccer-app-24a93.appspot.com",
  messagingSenderId: "14148368321",
  appId: "1:14148368321:web:6dca2c13d2545ec3f26140",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
