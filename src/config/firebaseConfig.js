import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAEgj55mVr-iC_8echVUHgxPtRe5kEvL7Q",
    authDomain: "drive-sales-verse-networ-5b1ee.firebaseapp.com",
    databaseURL: "https://drive-sales-verse-networ-5b1ee.firebaseio.com",
    projectId: "drive-sales-verse-networ-5b1ee",
    storageBucket: "drive-sales-verse-networ-5b1ee.appspot.com",
    messagingSenderId: "125270499169",
    appId: "1:125270499169:web:7e97d823ddd56eed76ef20",
    measurementId: "G-J4SS4SP5ZZ"
};
firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
