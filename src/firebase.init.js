// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtWvqz0Rpre4GWJGrcfSoRCfIuKnhP_u8",
  authDomain: "todolist-task-88106.firebaseapp.com",
  projectId: "todolist-task-88106",
  storageBucket: "todolist-task-88106.appspot.com",
  messagingSenderId: "845278925235",
  appId: "1:845278925235:web:3386e435abd2a4561d3bc6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
