import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB1ZRuBYyO0a5a1PjKg0AuKesT6dejF8_0",
  authDomain: "messanger-376912.firebaseapp.com",
  databaseURL: "https://messanger-376912-default-rtdb.firebaseio.com",
  projectId: "messanger-376912",
  storageBucket: "messanger-376912.appspot.com",
  messagingSenderId: "951200771336",
  appId: "1:951200771336:web:f6821853ee5b6b5a3590bd",
  measurementId: "G-W2QT68YDLR"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };




// Rules: 

// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if true;
//     }
//   }
// }