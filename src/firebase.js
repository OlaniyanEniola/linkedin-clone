// import * as firebase from "@firebase/app";
// import "firebase/firestore";
// import "firebase/auth";
// import "firebase/storage";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBAn-VxiHh7EJImKRP_Ck48H3e2FXI-Zqs",
  authDomain: "linkedin-clone-6685f.firebaseapp.com",
  projectId: "linkedin-clone-6685f",
  storageBucket: "linkedin-clone-6685f.appspot.com",
  messagingSenderId: "70842187766",
  appId: "1:70842187766:web:db67c0e8e861fb03a6d1d7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

