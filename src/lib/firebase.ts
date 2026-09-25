import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyB3bn6LZqdH-Uioh4rmdC1Yh8BP68RsX0Y",
  authDomain: "angry-cactus-alicelabs-1.firebaseapp.com",
  projectId: "angry-cactus-alicelabs-1",
  storageBucket: "angry-cactus-alicelabs-1.firebasestorage.app",
  messagingSenderId: "753769828516",
  appId: "1:753769828516:web:488411d295320a1c9e5631",
  measurementId: "G-7ZZ7DYZGQK"
};

// Initialize Firebase app (safe to call once at module load).
export const app = initializeApp(firebaseConfig);

// Analytics only loads in supported browser environments.
// Wrapped in isSupported() to avoid SSR / non-browser crashes.
export const analytics = isSupported().then((ok) => (ok ? getAnalytics(app) : null));
