// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSKgfcjnxS6_hjLrO89wBocxvlH3iN0pQ",
  authDomain: "jhmael-cbea3.firebaseapp.com",
  projectId: "jhmael-cbea3",
  storageBucket: "jhmael-cbea3.appspot.com",
  messagingSenderId: "294091859393",
  appId: "1:294091859393:web:1ebb4c86369c2729a0bb40",
  measurementId: "G-DCGB3VY0JW"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

initializeApp(firebaseConfig);

export const db = getFirestore();
export const storage = getStorage();