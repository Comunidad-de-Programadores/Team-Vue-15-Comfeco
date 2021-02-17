import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDYcAxXNHTgfa5vAxCl-mvHEF2_bCrGHsI",
  authDomain: "team-vue-15.firebaseapp.com",
  projectId: "team-vue-15",
  storageBucket: "team-vue-15.appspot.com",
  messagingSenderId: "573765845416",
  appId: "1:573765845416:web:34e9d86528881c4b0c1d9d"
};
let app = null;

if(!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
}

export default { firebase };