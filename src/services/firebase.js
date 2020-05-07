import firebase from 'firebase/app';
import'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDX53NBHPy_IgZpkGK6u16cCv9gvLpERmA",
    authDomain: "freetoss8.firebaseapp.com",
    databaseURL: "https://freetoss8.firebaseio.com",
    projectId: "freetoss8",
    storageBucket: "freetoss8.appspot.com",
    messagingSenderId: "1087519981297",
    appId: "1:1087519981297:web:536adcf19e7f2eef187350",
    measurementId: "G-15RSNW837J"
  }

  firebase.initializeApp(firebaseConfig);
  // Initialize Firebase

  export const auth = firebase.auth();
  export const db = firebase.firestore();
  export const storage = firebase.storage();

  export default firebase;
