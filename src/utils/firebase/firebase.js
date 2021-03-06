// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHZo4VZw0fI3ZXqJxif1jTo46v9VsGgfQ",
  authDomain: "e-commerce-site-db-49d22.firebaseapp.com",
  projectId: "e-commerce-site-db-49d22",
  storageBucket: "e-commerce-site-db-49d22.appspot.com",
  messagingSenderId: "446262616024",
  appId: "1:446262616024:web:3fce8f49e41ee3e5cd9cad",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();
// 1st see if userdata already exist
// If the data does exists then I do not want to do anything, just return user document reference
// If the user data does not exist, I want to create and set the document with the data from the userAuth in my collection

export const createUserDocumentFromAuth = async (
  // this function gets user info and stores in data store
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid); // checks to see if there is an exisiting document reference - 3 arguments (db, collection, unique identifier)

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    // if user name does not exist, capture the displayname, email, and time it was created
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
