  import firebase from 'firebase';
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCZU_QfPp8G2joj-tbNXASyOYEvNRUdVk4",
    authDomain: "ieee-delhi-ssn.firebaseapp.com",
    projectId: "ieee-delhi-ssn",
    storageBucket: "ieee-delhi-ssn.appspot.com",
    messagingSenderId: "904391723987",
    appId: "1:904391723987:web:1d5f27108d431b36c2bd26"
  };
  // Initialize Firebase
  const Fire=firebase.initializeApp(firebaseConfig);
  export default Fire;