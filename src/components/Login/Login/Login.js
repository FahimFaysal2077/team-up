import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBI_TXZsBk-UjOGPeXmVJpSFs-9-TGU1Fs",
  authDomain: "team-up-fahim.firebaseapp.com",
  projectId: "team-up-fahim",
  storageBucket: "team-up-fahim.appspot.com",
  messagingSenderId: "766237643401",
  appId: "1:766237643401:web:dd29a45cfea850412c2c58"
};
    
      const firebaseApp = firebase.initializeApp(firebaseConfig);
      const db = firebaseApp.firestore();
      const auth = firebase.auth();
      const provider = new firebase.auth.GoogleAuthProvider();
      

      export { auth, provider, db };
    

