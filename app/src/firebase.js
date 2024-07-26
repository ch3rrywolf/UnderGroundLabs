import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAzFFg09kAxSO3yFK-wIe6t1tSG73jkopo",
  authDomain: "otp-udergroundlabs.firebaseapp.com",
  projectId: "otp-udergroundlabs",
  storageBucket: "otp-udergroundlabs.appspot.com",
  messagingSenderId: "887655077780",
  appId: "1:887655077780:web:83b8c18a7fd41af693e181",
  measurementId: "G-WQDCGP1EC0"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
