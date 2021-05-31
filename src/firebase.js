import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi6Ez0GXHxi5FIjs3d88S_k41XPuuUetk",
  authDomain: "slack-clone-835c9.firebaseapp.com",
  projectId: "slack-clone-835c9",
  storageBucket: "slack-clone-835c9.appspot.com",
  messagingSenderId: "919493813314",
  appId: "1:919493813314:web:ecedcc12bd77d0dec439db",
  measurementId: "G-NW9H12DLC0",
};

//db connection
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

//login
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

//db exporting as defualt because its used in many files(for easy of use)
export { auth, provider };
export default db;
