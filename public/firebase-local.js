firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    alert("You Have Logged In!!!");
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

  } else {
    // No user is signed in.
    alert("PLEASE LOGIN!");
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
  }
});

function loginapi() {

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
    .then(function (data) {
      alert("Login Success");
      console.log(data);
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error : " + errorMessage);
      console.log(errorCode)
    });

}

function logout() {
  firebase.auth().signOut();
}