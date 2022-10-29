import {initializeApp} from "firebase/app"
import "firebase/auth"

const appInit = initializeApp({
  apiKey: "AIzaSyBxbzTagJPmfidODUorZfP6yaI_wwWYLuU",
  authDomain: "cats-sfs-d.firebaseapp.com",
  databaseURL: "https://cats-sfs-d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cats-sfs-d",
  storageBucket: "cats-sfs-d.appspot.com",
  messagingSenderId: "1008017100879",
  appId: "1:1008017100879:web:9a9148febaa41094735a3a"
})

export const auth = appInit.auth()
export default appInit
