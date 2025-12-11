// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdAIRb9QlT4Ar74-ENapOER6L69N6wuI4",
  authDomain: "db-dangerzone.firebaseapp.com",
  projectId: "db-dangerzone",
  storageBucket: "db-dangerzone.firebasestorage.app",
  messagingSenderId: "325812011220",
  appId: "1:325812011220:web:ee9773122d71cde6a9fb41",
  measurementId: "G-MG1N15PKD7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);