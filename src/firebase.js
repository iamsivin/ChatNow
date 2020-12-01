import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC7WrvDEwxzMq5dkrydTjKHv0cQazTxsec",
    authDomain: "chatnow-ba7da.firebaseapp.com",
    databaseURL: "https://chatnow-ba7da.firebaseio.com",
    projectId: "chatnow-ba7da",
    storageBucket: "chatnow-ba7da.appspot.com",
    messagingSenderId: "12343461557",
    appId: "1:12343461557:web:43ab98ce79a985c0f4e0fc",
    measurementId: "G-NSKT31WRHP"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig); 
  const db = firebaseApp.firestore(); 
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;