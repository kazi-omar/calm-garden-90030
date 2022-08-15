const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyDhkoZdv4OMWwoCWW4AHFogxBAN-m2m6zg",
  authDomain: "restcountryokazi.firebaseapp.com",
  projectId: "restcountryokazi",
  storageBucket: "restcountryokazi.appspot.com",
  messagingSenderId: "616742731943",
  appId: "1:616742731943:web:733f3004c9477d03141b82",
  measurementId: "G-ERVFRK03LK",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const Countries = db.collection("Countriess");
module.exports = Countries;
