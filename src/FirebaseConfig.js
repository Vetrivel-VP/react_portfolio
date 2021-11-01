import Firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyDzZo2WQGQEIyGXTC9KG7R862maVSMLIjY",
  authDomain: "reactportfolio-7640f.firebaseapp.com",
  databaseURL: "https://reactportfolio-7640f-default-rtdb.firebaseio.com",
  projectId: "reactportfolio-7640f",
  storageBucket: "reactportfolio-7640f.appspot.com",
  messagingSenderId: "678052510111",
  appId: "1:678052510111:web:95b8d02778b305dd8025aa",
};

Firebase.initializeApp(firebaseConfig);

export default Firebase;
