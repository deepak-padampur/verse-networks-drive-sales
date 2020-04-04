import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCn2Qrirfk2SEOfilJyEzwQ4LqayHFKkdk",
    authDomain: "drive-sales-verse-network.firebaseapp.com",
    databaseURL: "https://drive-sales-verse-network.firebaseio.com",
    projectId: "drive-sales-verse-network",
    storageBucket: "drive-sales-verse-network.appspot.com",
    messagingSenderId: "381978676998",
    appId: "1:381978676998:web:4d9b8f8fc1ebf30b15d887",
    measurementId: "G-SGNS4RSFRR"
};
firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
