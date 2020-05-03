import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCfDB53H6zAdU42itO_ogByVWEUTwKmhS4",
  authDomain: "crwn-db-d2edd.firebaseapp.com",
  databaseURL: "https://crwn-db-d2edd.firebaseio.com",
  projectId: "crwn-db-d2edd",
  storageBucket: "crwn-db-d2edd.appspot.com",
  messagingSenderId: "1035723192852",
  appId: "1:1035723192852:web:df19d30a77ac1fba5d0501",
  measurementId: "G-J1Z8CQ53EC",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
