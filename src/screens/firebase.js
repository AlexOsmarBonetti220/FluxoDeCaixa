import firebase from "firebase";

let firebaseConfig = {
    apiKey: "AIzaSyBTLTtUef7jsvgQNlQHagJay1ktARFt0eQ",
    authDomain: "app-cardapio-195db.firebaseapp.com",
    databaseURL: "https://app-cardapio-195db.firebaseio.com",
    projectId: "app-cardapio-195db",
    storageBucket: "app-cardapio-195db.appspot.com",
    messagingSenderId: "519787331386",
    appId: "1:519787331386:web:1a58048749a4e1f22fda03",
    measurementId: "G-HP51ZGTDEK"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
