import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { collection, getDocs , addDoc } from "firebase/firestore";
import React from "react";
    
export const firebaseConfig = {
    apiKey: "AIzaSyCB1wxToLQ71SwKrlG7RP3vRhNAaGAqLQo",
    authDomain: "musicaster-2cddb.firebaseapp.com",
    projectId: "musicaster-2cddb",
    storageBucket: "musicaster-2cddb.appspot.com",
    messagingSenderId: "107264780654",
    appId: "1:107264780654:web:9cc6e49bd33d27eda1f97f",
    measurementId: "G-Q0W9XKPKHW",
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const usersCollection = collection(db, "users")


// Initialize Firebase


export function InputName(props) {
const [newName, setNewName] = React.useState("")
const [newPass, setNewPass] = React.useState("")
const createUser = async () => {
 await addDoc(usersCollection, {name: newName, pass: newPass })
}
    return <>
      <input placeholder="User Name" onChange={(event) => {setNewName(event.target.value)}}/>
      <input placeholder="User Name" onChange={(event) => {setNewPass(event.target.value)}}/>
      </>
    }