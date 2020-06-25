/////
// VARIABLES
/////

// This is our API key.
var APIKey = "75880f1a2313ab8b5d85907f998f30f7";


$("#find-food").on("click", function(event) {

    // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();

    // Here we grab the text from the input box
    var strFood = $("#food-input").val();

    // Here we construct our URL
    var queryURL = "https://api.edamam.com/search?q=" + strFood + "&app_id=ff0891d5" + "&app_key=75880f1a2313ab8b5d85907f998f30f7";

    // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
    // and display it in the div with an id of food-view
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);

        // creating index to hold the 'randomize'
        var indexCreator = Math.floor((Math.random() * 10) + 1);

        // creating a food div to hold the food
        var foodDiv = $("<div class='food'>");

        // Storing the recipe label
        var foodlabel = response.hits[indexCreator].recipe.label;
        console.log(foodlabel);
        document.getElementById("food-label").innerHTML += "<b>" + foodlabel + "</b>";
        console.log(response);

        // adding food photo
        var foodImageSource = response.hits[indexCreator].recipe.image
        var foodImage = $("<img>");

        foodImage.attr("src", foodImageSource);
        foodImage.attr("alt", "Food image");

        $("#food-images").prepend(foodImage);

        // Source of website URL
        var foodSource = response.hits[indexCreator].recipe.url
        console.log(foodSource);

        var foodLink = $("<a>" + "Click here for full recipe!" + "</a>");
        console.log(foodLink);


        foodLink.attr("href", foodSource);

        $("#food-link").prepend(foodLink);
    


        // ingredient list
        var ingredientList = response.hits[indexCreator].recipe.ingredientLines;
        console.log(ingredientList);


        // var toAdd = document.createDocumentFragment();

        for (var i = 0; i < ingredientList.length; i++){
            document.getElementById("food-view").innerHTML += "<li>" + ingredientList[i] + "</li>";
            console.log(ingredientList[i]);

        }


    });
});


$("button").click(function(){
    $("div").empty();
    $("ul").empty();
 });



