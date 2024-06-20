import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBRU61ZF7FvqQugFOlh3ZVNaFT-soe-lQY",
  authDomain: "finances-36d4f.firebaseapp.com",
  projectId: "finances-36d4f",
  storageBucket: "finances-36d4f.appspot.com",
  messagingSenderId: "554892062062",
  appId: "1:554892062062:web:010e01fe03f3b5a0f3257f",
  measurementId: "G-XH9KGXXZSD"
};

firebase.initializeApp(firebaseConfig);
console.log(firebase.database());
console.log(firebase.database().ref('dev.finances:transactions'));
console.log(firebase.database().ref('dev.finances:transactions').push());
console.log(firebase.database().ref('dev.finances:transactions').push().key);
export default firebase.database();