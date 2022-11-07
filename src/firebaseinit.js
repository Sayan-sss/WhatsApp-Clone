import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBgTdtx3PgXDKO9yniM-jdxTk1rLaJ9k6c",
  authDomain: "whatsapp-clone-498cf.firebaseapp.com",
  projectId: "whatsapp-clone-498cf",
  storageBucket: "whatsapp-clone-498cf.appspot.com",
  messagingSenderId: "39140318610",
  appId: "1:39140318610:web:98c2ae4790837d13a7f54b",
  measurementId: "G-8SDGKLV706",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;