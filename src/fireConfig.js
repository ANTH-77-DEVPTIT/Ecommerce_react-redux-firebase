// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyBIn-g6rwj3HtWeC37oIkb6UJXluIo6xhE",
  authDomain: "firecommerce-c5ba8.firebaseapp.com",
  projectId: "firecommerce-c5ba8",
  storageBucket: "firecommerce-c5ba8.appspot.com",
  messagingSenderId: "992539608729",
  appId: "1:992539608729:web:67166d28e8c66e1b235a08",
  measurementId: "G-KRZZE1R8Q8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);

export default fireDB;
