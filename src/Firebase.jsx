import * as firebase from 'firebase';


// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAG0wNWQ46a88puO0eYSGJrVo2vz99MfEA",
    authDomain: "tseny-59ac4.firebaseapp.com",
    databaseURL: "https://tseny-59ac4.firebaseio.com",
    projectId: "tseny-59ac4",
    storageBucket: "tseny-59ac4.appspot.com",
    messagingSenderId: "306674927891"
  };
  firebase.initializeApp(config);

  export default firebase;