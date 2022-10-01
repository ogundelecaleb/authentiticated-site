import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'


const app = firebase.initializeApp({
  apiKey: "AIzaSyA0aiUbOz0LPhE0MioZqX-3ArGJzYm-Lpk",
  authDomain: "react-app2-51c78.firebaseapp.com",
  projectId: "react-app2-51c78",
  storageBucket: "react-app2-51c78.appspot.com",
  messagingSenderId: "118241263766",
  appId: "1:118241263766:web:e156a83d0bcc290d98c2b7"
})

export const auth = app.auth()
export default app

