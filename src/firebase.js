import firebase from "firebase/app";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyB1uxy5D0HsqnHOMgq-qPrSMLrodeNrwCo",
  authDomain: "todo-list-73bb0.firebaseapp.com",
  projectId: "todo-list-73bb0",
  storageBucket: "todo-list-73bb0.appspot.com",
  messagingSenderId: "903683801927",
  appId: "1:903683801927:web:0ee86263b9060433988262"
};
const app = firebase.initializeApp(firebaseConfig);
export const fire = app.firestore()
export default app;
