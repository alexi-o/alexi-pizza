import Title from './Title';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBZrGwtC8a_HyQufvwazM8x46jaRPh1KB8",
  authDomain: "alexipizza.firebaseapp.com",
  databaseURL: "https://alexipizza-default-rtdb.firebaseio.com",
  projectId: "alexipizza",
  storageBucket: "alexipizza.appspot.com",
  messagingSenderId: "586516213446",
  appId: "1:586516213446:web:3753885117f53175c071c7",
  measurementId: "G-Z7LJXPMVXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function MessageBoard(){
    console.log("db", db)
    return (
        <Title title="Message Board"/>
    )
};