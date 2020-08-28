import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBK7IJDViK0p13DFHv6qpISQStqWlRt5gQ",
  authDomain: "whatsapp-clone-720c2.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-720c2.firebaseio.com",
  projectId: "whatsapp-clone-720c2",
  storageBucket: "whatsapp-clone-720c2.appspot.com",
  messagingSenderId: "106327815948",
  appId: "1:106327815948:web:fc645f9d0fa67d82ea7b29",
  measurementId: "G-84CM9DFSYQ",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
