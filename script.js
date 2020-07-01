/////
// VARIABLES
/////

// This is our API key.
var APIKey = "75880f1a2313ab8b5d85907f998f30f7";



$("#find-video").on("click", function(event){
    // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();

    // Here we grab the text from the input box and checkboxes for health labels
    var strFood1 = $("#food-input").val();
    var healthType1 = document.querySelector('input[name="label"]:checked').value;
    var foodDiet1 = document.querySelector('input[name="diet"]:checked').value;
    console.log(strFood1)
    console.log(healthType1)
    console.log(foodDiet1)


    var youQuery = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=" + strFood1 + "+" +  healthType1 + "+" + foodDiet1 + "&type=video&key=AIzaSyBFBwcFoLzvUM3aOw8whDCKsRk7-Q9IYoo";

    // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
    // and display it in the div with an id of food-view

    $.ajax({
        url: youQuery,
        method: "GET"
    }).then(function(response){
        console.log(response);

        // creating index to hold the 'randomize'
        var indexCreator1 = Math.floor((Math.random() * 10) + 1);

        // obtaining video ID
        var videoID = response.items[indexCreator1].id.videoId;
        // console.log(videoID);
        // create a video card
        var videoCard = $("<div class='row'> <div class='col s12'> <div class='card video-card z-depth-5'> <div class='card-content'> <span class='card-title'>Video Recipe</span> <div class='video-container'> <iframe id='food-youtube' src='' ></iframe> </div> </div> <div class='card-action'></div> </div> </div> </div>");

        // url for the video
        var videoSource = "https://www.youtube.com/embed/" + videoID;

        //$("#food-youtube").attr("src", videoSource);

        // link
        var videoLink = $("<a>" + "Click here to watch on full-screen!" + "</a>");

        videoLink.attr("href", videoSource);

        $(".card-action").append(videoLink);

        $("#recipe-space").append(videoCard);

    });

});



$("#find-food").on("click", function(event) {

    // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();

    // Here we grab the text from the input box and checkboxes for health labels
    var strFood = $("#food-input").val();
    var healthType = document.querySelector('option[name="label"]:selected').value;
    var foodDiet = document.querySelector('option[name="diet"]:selected').value;
    // console.log(foodDiet);

    // Here we construct our URL
    var queryURL = "https://api.edamam.com/search?q=" + strFood + "&diet=" + healthType + "&health=" + foodDiet + "&app_id=ff0891d5" + "&app_key=75880f1a2313ab8b5d85907f998f30f7";

    // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
    // and display it in the div with an id of food-view
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);

        // creating index to hold the 'randomize'
        var indexCreator = Math.floor((Math.random() * 10) + 1);


        // Storing the recipe label
        var foodlabel = response.hits[indexCreator].recipe.label;
 
        document.getElementById("food-label").innerHTML += "<b>" + foodlabel + "</b>";


        // adding food photo
        var foodImageSource = response.hits[indexCreator].recipe.image
        var foodImage = $("<img>");

        foodImage.attr("src", foodImageSource);
        foodImage.attr("alt", "Food image");

        $("#food-images").prepend(foodImage);

        // Source of website URL
        var foodSource = response.hits[indexCreator].recipe.url


        var foodLink = $("<a>" + "Click here for full recipe!" + "</a>");
        // console.log(foodLink);


        foodLink.attr("href", foodSource);

        $("#food-link").prepend(foodLink);
    

        // ingredient list
        var ingredientList = response.hits[indexCreator].recipe.ingredientLines;
        // console.log(ingredientList);


        // List the ingredients

        for (var i = 0; i < ingredientList.length; i++){
            document.getElementById("food-view").innerHTML += "<li>" + ingredientList[i] + "</li>";
            // console.log(ingredientList[i]);

        }

    });
});

$("#clear").click(function(){
    $("div").empty();
    $("ul").empty();
    $("iframe").empty();
 });

