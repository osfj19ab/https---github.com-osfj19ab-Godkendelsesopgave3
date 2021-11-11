import firebase from "firebase";

//Herunder foregår konfiguration til firebase..
const firebaseConfig = {
  apiKey: "AIzaSyDvwZ7PMXrjBUfNBnbvp3n0XWo9VJ2Qidk",
  authDomain: "fir-f9163.firebaseapp.com",
  projectId: "fir-f9163",
  storageBucket: "fir-f9163.appspot.com",
  messagingSenderId: "619662504973",
  appId: "1:619662504973:web:ce9dfe06236bfd01211144",
};

//Koden sikrer at kun én Firebase initieres under brug af appen.
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

export { auth };
