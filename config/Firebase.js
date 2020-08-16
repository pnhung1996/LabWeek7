import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyDI_m6m6Fdv5nROOXdOj_X9a3Ywr25uiHk",
  authDomain: "aichatbot-justgo.firebaseapp.com",
  databaseURL: "https://aichatbot-justgo.firebaseio.com",
  projectId: "aichatbot-justgo",
  storageBucket: "aichatbot-justgo.appspot.com",
  messagingSenderId: "761628735057",
  appId: "1:761628735057:web:45062f9fe23efdbc27ea70",
  measurementId: "G-4N8V4Y0F1J"
})

const database = firebase.database();

export default database;