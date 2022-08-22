
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup}from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA526ioZRo2wXSplQu66BIuMPkbXpX_pl4",
  authDomain: "movie-2de68.firebaseapp.com",
  projectId: "movie-2de68",
  storageBucket: "movie-2de68.appspot.com",
  messagingSenderId: "940570590248",
  appId: "1:940570590248:web:fd1fa52ccbefbca067c91d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
 const provider=new GoogleAuthProvider();
 export const signInWithGoogle=()=>{
    signInWithPopup(auth,provider).then((result)=>{
        console.log(result)

    }).catch((err)=>{
        console.log(err)
    })
}
