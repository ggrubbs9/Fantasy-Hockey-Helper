import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAHbrjbO8zYmRznTLSQUDySicqhfst0avo",
    authDomain: "fantasy-hockey-helper.firebaseapp.com",
    databaseURL: "https://fantasy-hockey-helper-default-rtdb.firebaseio.com/"
  };
  firebase.initializeApp(config);
  export const auth = firebase.auth;
  export const db = firebase.database();