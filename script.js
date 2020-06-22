/////
// VARIABLES
/////

// This is our API key.
var APIKey = "75880f1a2313ab8b5d85907f998f30f7";

// Here we are building the URL we need to query the database
var ingredient = "noodle"
var queryURL = "https://api.edamam.com/search?q=" + ingredient + "&app_id=ff0891d5" + "&app_key=75880f1a2313ab8b5d85907f998f30f7"; // + "&from=0&to=3&calories=591-722&health=alcohol-free";
console.log(queryURL);

// // array to add cities to, to be grabbed from after search
// var citiesArray = JSON.parse(localStorage.getItem("cities")) || [];

// const m = moment();