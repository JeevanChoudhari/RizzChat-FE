
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARiLwaJWkQu134kAcirEvFNq5LIp93vxs",
  authDomain: "auth-02-10-2006.firebaseapp.com",
  projectId: "auth-02-10-2006",
  storageBucket: "auth-02-10-2006.firebasestorage.app",
  messagingSenderId: "855947770457",
  appId: "1:855947770457:web:8bf4b57c95532b9aee4f48",
  measurementId: "G-3YBVZCKSB1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




export default app;