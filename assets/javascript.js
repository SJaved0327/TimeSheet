
 var config = {

    apiKey: "AIzaSyA1rLAiVhAnj8DnNQg9G9nAYd_umt3Ns6A",
    authDomain: "bobby-test-22440.firebaseapp.com",
    databaseURL: "https://bobby-test-22440.firebaseio.com",
    projectId: "bobby-test-22440",
    storageBucket: "bobby-test-22440.appspot.com",
    messagingSenderId: "824839189113"
  };

firebase.initializeApp(config);

var database = firebase.database();

var name = "";
var rate = 0;
var role = "";
var start = "";


$("#sumbitbutton").on("click", function(event){
  event.preventDefault();
  name = $("#name-input").val().trim();
  rate = $("#rate-input").val().trim();
  role = $("#role-input").val().trim();
  start = $("#start-input").val().trim();

   database.ref().push({
      name: name,
      rate: rate,
      role: role,
      start: start
    });

});

database.ref().on("child_added", function(snapshot) {

      // Log everything that's coming out of snapshot

      console.log(snapshot.val());

      console.log(snapshot.val().name);

      console.log(snapshot.val().rate);

      console.log(snapshot.val().role);

      console.log(snapshot.val().start);

      // Change the HTML to reflect

      $("#display-name").html(snapshot.val().name);

      $("#display-role").html(snapshot.val().rate);

      $("#display-start").html(snapshot.val().role);

      $("#display-rate").html(snapshot.val().start);

    // Handle the errors

    }, function(errorObject) {

      console.log("Errors handled: " + errorObject.code);

    });
