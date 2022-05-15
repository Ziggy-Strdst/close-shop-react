import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbQveiFIh_KaxlMs_1DEx-q1xkiEtFYcY",
  authDomain: "close-shop-db.firebaseapp.com",
  projectId: "close-shop-db",
  storageBucket: "close-shop-db.appspot.com",
  messagingSenderId: "509839729838",
  appId: "1:509839729838:web:9092239bd632df8be0f93f",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async userAuth => {
  // const userDocRef = doc(db, "users");
};
