// jQuery call to allow the dropdown menu function
$(document).ready(function(){
  $('select').formSelect();
});


/////
// VARIABLES
/////

// // This is our API key.
// var APIKey = "75880f1a2313ab8b5d85907f998f30f7";


// $("#find-food").on("click", function(event) {

//     // event.preventDefault() can be used to prevent an event's default behavior.
//     // Here, it prevents the submit button from trying to submit a form when clicked
//     event.preventDefault();

//     // Here we grab the text from the input box
//     var strFood = $("#food-input").val();

//     // Here we construct our URL
//     var queryURL = "https://api.edamam.com/search?q=" + strFood + "&app_id=ff0891d5" + "&app_key=75880f1a2313ab8b5d85907f998f30f7" + "&from=0&to=3";

//     // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
//     // and display it in the div with an id of food-view
    
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function(response){

//         // creating a food div to hold the food
//         var foodDiv = $("<div class='food'>");

//         // Storing the recipe label
//         var foodlabel = response.hits[0].recipe.label;

//         // Source of website URL

//         // ingredient list
//         var ingredientList = response.hits[0].recipe.ingredientLines;
//         console.log(ingredientList);

//         // create element to hold ingredient
//         var pIngredient = $("<ul>").text("Ingredient list: " + ingredientList)


//         $("#food-view").text(JSON.stringify(response));
//         console.log(response.hits[0]);

//         // render the first 5

//     });
// });

  

