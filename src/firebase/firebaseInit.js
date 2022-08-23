import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  // ENTER YOUR CONFIG HERE
  apiKey: "AIzaSyBVZdXSkG4Y1Mu3HK0CTTP-OYrA0FshUr4",
  authDomain: "my-blog-cf270.firebaseapp.com",
  projectId: "my-blog-cf270",
  storageBucket: "my-blog-cf270.appspot.com",
  messagingSenderId: "430456689773",
  appId: "1:430456689773:web:60a03fc3640656eb45db64",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
