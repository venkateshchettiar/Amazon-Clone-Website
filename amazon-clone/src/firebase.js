import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeu4QDs_RDCYOpOekR7Obat7tp8G1KqNs",
  authDomain: "clone-c91d0.firebaseapp.com",
  projectId: "clone-c91d0",
  storageBucket: "clone-c91d0.appspot.com",
  messagingSenderId: "705756766631",
  appId: "1:705756766631:web:b3d2f48c82201cc0675682",
  measurementId: "G-99CLNGBRDB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };