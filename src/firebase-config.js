// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD7hrZnPvPxY-X2U3WLNlseneW4q2ensw8",
    authDomain: "twitter-login-7da7b.firebaseapp.com",
    projectId: "twitter-login-7da7b",
    storageBucket: "twitter-login-7da7b.appspot.com",
    messagingSenderId: "213028007428",
    appId: "1:213028007428:web:d6e6554129c1f8a53a8f51",
    measurementId: "G-9MT74HGZLJ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const authentication = getAuth(app);