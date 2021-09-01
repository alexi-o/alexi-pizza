import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

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

let instance;

export default function getFirebase() {
    if (typeof window !== 'undefined') {
        if (instance) return instance;
        instance = firebase.initializeApp(firebaseConfig);
        return instance;
    }
    return null;
}