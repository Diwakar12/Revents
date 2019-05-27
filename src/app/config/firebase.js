import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDXfmUXOBdCj60Rv15gExZmiEarRebEUOc",
  authDomain: "revents-3473f.firebaseapp.com",
  databaseURL: "https://revents-3473f.firebaseio.com",
  projectId: "revents-3473f",
  storageBucket: "revents-3473f.appspot.com",
  messagingSenderId: "1002308876141",
  appId: "1:1002308876141:web:0766607fd023d47c"
}

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
}
firestore.settings(settings)
export default firebase;