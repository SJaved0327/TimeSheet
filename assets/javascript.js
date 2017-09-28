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