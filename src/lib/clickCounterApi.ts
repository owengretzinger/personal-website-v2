"use server";

import { initializeApp } from "firebase/app";
import {
  doc,
  getDocFromServer,
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

export async function fetchCounterClicks() {
  try {
    const counterRef = doc(db, "click-counter", "counter");
    const docSnap = await getDocFromServer(counterRef);
    return docSnap.data()!.count;
  } catch (e) {
    console.error(e);
    return 0;
  }
}

export async function incrementGlobalCounterClicks(amount: number) {
  const counterRef = doc(db, "click-counter", "counter");
  await updateDoc(counterRef, { count: increment(amount) });
}
