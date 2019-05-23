firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.


  } else {
    // No user is signed in.
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
      console.log(error);
    });

}

function logout() {
  firebase.auth().signOut();
  console.log("User Logged Out")
}

function forgotpassword() {
  window.location.replace("forgot-password.html");
}