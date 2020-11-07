import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const config = {
   apiKey: "AIzaSyDnilMyx3L-gWr-1uY4N5pEEnktT6J-bZ8",
   authDomain: "crwn-db-ed773.firebaseapp.com",
   databaseURL: "https://crwn-db-ed773.firebaseio.com",
   projectId: "crwn-db-ed773",
   storageBucket: "crwn-db-ed773.appspot.com",
   messagingSenderId: "1016625628290",
   appId: "1:1016625628290:web:33572185e2b9116140a09b",
   measurementId: "G-2JJQRMVG2H"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: "select_account"})
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export default firebase