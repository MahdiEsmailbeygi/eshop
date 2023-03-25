
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyArJ3i4OlRkm2FZsuUfvdHAlChfPzWGGa4",
  authDomain: "eshop-d3e53.firebaseapp.com",
  projectId: "eshop-d3e53",
  storageBucket: "eshop-d3e53.appspot.com",
  messagingSenderId: "144512493566",
  appId: "1:144512493566:web:532dbc87c61831e7a2c2af",
  measurementId: "G-7W7QFY1QSD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth};

