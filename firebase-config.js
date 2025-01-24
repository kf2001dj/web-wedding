// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGot5TDPIPP4mN5k-baYInGFxkEUV07Tw",
  authDomain: "my-web-wedding-dongnt.firebaseapp.com",
  projectId: "my-web-wedding-dongnt",
  storageBucket: "my-web-wedding-dongnt.firebasestorage.app",
  messagingSenderId: "824631142752",
  appId: "1:824631142752:web:1e68d84edbf59d34fad605",
  measurementId: "G-CSBL95BE0G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);