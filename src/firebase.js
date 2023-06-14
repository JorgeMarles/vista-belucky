// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFGSdkRFFX3E7AbjxqE1xBr6B3SRHvNBw",
  authDomain: "belucky-f53c4.firebaseapp.com",
  projectId: "belucky-f53c4",
  storageBucket: "belucky-f53c4.appspot.com",
  messagingSenderId: "927409886501",
  appId: "1:927409886501:web:3db16a0750673045c5f6cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app