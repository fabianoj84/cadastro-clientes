// firebase/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_tFCiFHOftFJFyWxweBQ-8MKELjlbzmU",
  authDomain: "quoting-126d0.firebaseapp.com",
  projectId: "quoting-126d0",
  storageBucket: "quoting-126d0.firebasestorage.app",
  messagingSenderId: "153908530646",
  appId: "1:153908530646:web:2f6fc1b58539375a3aa877",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
