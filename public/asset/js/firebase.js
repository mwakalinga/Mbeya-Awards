const db = firebase.firestore();

console.log("hello am in firebase");

const increment = firebase.firestore.FieldValue.increment(1);
const storyRef = db.collection("votes").doc("numbers");

// storyRef.onSnapshot(function (doc) {
//   console.log("Current data: ", doc.data().vote);
//   document.getElementById("number").innerHTML = doc.data().vote;
// });

// function vote() {
//   storyRef.update({ vote: increment });
//   console.log("vote is called");

//   storyRef.onSnapshot(function (doc) {
//     console.log("Current data: ", doc.data().vote);
//     document.getElementById("number").innerHTML = doc.data().vote;
//   });
// }


function signup() {
  var email = document.getElementById("user_email").value;
  var password = document.getElementById("password-1").value;
  var password2 = document.getElementById("password-2").value;

  if (password == password2) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  } else {
    console.log("error");
  }

  console.log("clicked");
}

signout.addEventListener("click", (e) => {
  firebase
    .auth()
    .signOut()
    .then(function () {
      //console.log("user sign out");
      noSignIn();
      // Sign-out successful.
    })
    .catch(function (error) {
      //console.log(error);
      // An error happened.
    });
});

console.log("over");
