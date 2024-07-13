"use server";

import { initializeApp } from "firebase/app";
import {
  doc,
  getDoc,
  getFirestore,
  increment,
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
  try {
    const docSnap = await getDoc(counterRef);
    return docSnap.data()!.count;
  } catch (e) {
    console.error(e);
    return 0;
  }
}

export async function incrementGlobalCounterClicks(amount: number) {
  if (amount > 40) {
    throw "Hacker detected";
  }
  await updateDoc(counterRef, { count: increment(amount) });
}
