// Initialize Firebase
var config = {
    apiKey: "AIzaSyBRPwp0wQKRemlMGAMoxdNzRkaJrmFXOtA",
    authDomain: "omsmaniwa-api.firebaseapp.com",
    databaseURL: "https://omsmaniwa-api.firebaseio.com",
    projectId: "omsmaniwa-api",
    storageBucket: "omsmaniwa-api.appspot.com",
    messagingSenderId: "474922377118",
    appId: "1:474922377118:web:4d10c46eb32b7be8"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('kotakpesan').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e) {
    e.preventDefault();
  
    //Get value
    var nama = document.getElementById('nama').value;
    var pesan = document.getElementById('pesan').value;
    var surel = document.getElementById('surel').value;
  
    // Save message
    saveMessage(nama, pesan, surel);
  
    // Clear form
    document.getElementById('kotakpesan').reset();
  }
  
  // Function to get form value
  function getInputVal(id) {
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(nama, pesan, surel) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        nama: nama,
        pesan: pesan,
        surel: surel
    });
  }