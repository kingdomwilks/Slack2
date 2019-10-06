import * as firebase from 'firebase';

// Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: "AIzaSyAWtrAyASeOGjE6d6sy9AsCVQCRZAmj39c",
    authDomain: "slack2-21bd2.firebaseapp.com",
    databaseURL: "https://slack2-21bd2.firebaseio.com/",
    storageBucket: ""
  };
  //Initialise Firebase
  firebase.initializeApp(config);

  // Get a reference to the database service

  export const database = firebase.database;