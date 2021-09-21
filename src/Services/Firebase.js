import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDGKIbniHAeSXqvJL70NvytEt7tuvNXl0Q",
  authDomain: "first-project-with-fireb-f1803.firebaseapp.com",
  databaseURL:
    "https://first-project-with-fireb-f1803-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "first-project-with-fireb-f1803",
  storageBucket: "first-project-with-fireb-f1803.appspot.com",
  messagingSenderId: "955963316358",
  appId: "1:955963316358:web:e220b89e998a8416d8d907",
};

firebase.initializeApp(firebaseConfig);
