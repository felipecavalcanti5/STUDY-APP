
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDw5ukzpdQZdCtPu5g48oY1ft_2Xtg6T6M",
  authDomain: "study-app-2024-2-felipec.firebaseapp.com",
  projectId: "study-app-2024-2-felipec",
  storageBucket: "study-app-2024-2-felipec.firebasestorage.app",
  messagingSenderId: "447170610230",
  appId: "1:447170610230:web:6e2d601c6890dbfdd10497",
  measurementId: "G-RP6YW0K6LT"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app)
export const db = getFirestore(app)

const analytics = getAnalytics(app);