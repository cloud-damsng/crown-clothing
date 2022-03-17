
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import{
    GoogleAuthProvider,
    getAuth, 
    signInWithPopup,
    signInWithRedirect
} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmGmF_gozmN04vMBUcOawBes7Ilyq8tTU",
  authDomain: "crown-clothing-db-b81b8.firebaseapp.com",
  projectId: "crown-clothing-db-b81b8",
  storageBucket: "crown-clothing-db-b81b8.appspot.com",
  messagingSenderId: "225377062893",
  appId: "1:225377062893:web:fe7ec4056bd8bd42bba1e4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt:"select_account"
});

export const auth =getAuth();
export const signInWithGooglePopup =() => signInWithPopup(auth, googleProvider);


export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) =>{
    const userDocRef = doc(db, 'users', userAuth.uid);   
    const userSnapshot =await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });

        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }
    return userDocRef;

};