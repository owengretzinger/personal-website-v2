"use server";

import { initializeApp } from "firebase/app";
import {
  doc,
  getFirestore,
  increment,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const counterRef = doc(db, "click-counter", "counter");

export async function fetchCounterClicks() {
  const unsubscribe = onSnapshot(
    counterRef,
    (docSnap) => {
      if (docSnap.exists()) {
        return docSnap.data()!.count;
      } else {
        console.log("No such document!");
        return 0;
      }
    },
    (error) => {
      console.error("Error fetching document: ", error);
      return 0;
    },
  );

  // Remember to unsubscribe from the snapshot when you're done.
  return () => unsubscribe();
}

export async function incrementGlobalCounterClicks(amount: number) {
  await updateDoc(counterRef, { count: increment(amount) });
}
