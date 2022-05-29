
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { collection } from "firebase/firestore";

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
const db = getFirestore(app);
export const usersCollection = collection(db, "users");
