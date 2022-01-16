import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged,signInWithEmailAndPassword} from "firebase/auth";
import initializeFirebase from '../Pages/Firebase/firebase.init';
import { Unsubscribe } from '@mui/icons-material';

initializeFirebase();
const useFirebase = () => {
    const [user, setUser]=useState({})

    const auth = getAuth();

    const registerUser = (email,password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });                                                   
    }
    const loginUser = (email,password)=>{
        signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });

    }
    //observe user state
    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
             setUser({}) 
            }
          });
          return () => Unsubscribe;
    },[])
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
    
    return (
       user,
       registerUser,
       loginUser,
       logOut
    );
};

export default useFirebase;