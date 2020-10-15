import firebase from "firebase";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDNn5FqIuwYT0N134-HYVefxFYEzS4Y-tg",
    authDomain: "slack-clone-2-e51f1.firebaseapp.com",
    databaseURL: "https://slack-clone-2-e51f1.firebaseio.com",
    projectId: "slack-clone-2-e51f1",
    storageBucket: "slack-clone-2-e51f1.appspot.com",
    messagingSenderId: "191854871008",
    appId: "1:191854871008:web:419f6a038e63f93a47ab85",
    measurementId: "G-3KC8T1KXLZ"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default firebase;