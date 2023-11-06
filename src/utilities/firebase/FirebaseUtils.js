import {initializeApp} from 'firebase/app';
import {
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

//Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJzW2ZfQetA5X_yVqbItaWNBlWkkrSfVQ",
    authDomain: "enns-clothing-db.firebaseapp.com",
    projectId: "enns-clothing-db",
    storageBucket: "enns-clothing-db.appspot.com",
    messagingSenderId: "1094883286283",
    appId: "1:1094883286283:web:56073d820e31c1c107960e"
  };
  

  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth(); 
export const signInWithGooglePopup = () => 
    signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
    signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

//firestore db

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid)
    // console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef)
    // console.log(userSnapshot)
    // console.log(userSnapshot.exists)

    //if the user doesn't exist, register the user
    
    if (!userSnapshot.exists()) {
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
          console.log('error creating the user', error.message);
        }
      }

      //if the user exist, return the following
    
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