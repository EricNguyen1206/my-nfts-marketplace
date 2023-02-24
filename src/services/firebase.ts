// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "my-ecommerce-app-770f8.firebaseapp.com",
    projectId: "my-ecommerce-app-770f8",
    storageBucket: "my-ecommerce-app-770f8.appspot.com",
    messagingSenderId: "857692709137",
    appId: "1:857692709137:web:5e2ed65ce0919a78fcecb0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
app.options.databaseURL =
    "https://my-ecommerce-app-770f8-default-rtdb.asia-southeast1.firebasedatabase.app";

export const firebaseDatabase = getDatabase(app);
export default app;
