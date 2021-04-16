import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDWW7R7HMVluMOsEKzyaJDKLvCBPdn5ToM",
  authDomain: "iegriez-pasauli.firebaseapp.com",
  projectId: "iegriez-pasauli",
  storageBucket: "iegriez-pasauli.appspot.com",
  messagingSenderId: "365548556656",
  appId: "1:365548556656:web:a2563eec832aac4497ffb5",
  measurementId: "G-Z0G8C0YL53",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
