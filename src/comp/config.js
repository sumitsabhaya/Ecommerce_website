import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCACgB_xb2IGxHDl91qoqbugjyz4iunmjI",
  authDomain: "react-ecommerce-contact-5dc8d.firebaseapp.com",
  databaseURL: "https://react-ecommerce-contact-5dc8d-default-rtdb.firebaseio.com",
  projectId: "react-ecommerce-contact-5dc8d",
  storageBucket: "react-ecommerce-contact-5dc8d.appspot.com",
  messagingSenderId: "289941585103",
  appId: "1:289941585103:web:560b949dc71b641f4e8bba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};