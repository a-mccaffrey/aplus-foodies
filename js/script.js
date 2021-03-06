// jQuery call to allow the dropdown menu function
$(document).ready(function () {
  $("select").formSelect();

  const apiKey = "6d32852b741eb95d8988031957d11ab4";
  const apiId = "cd86986f";

  //get recipe button
  $("#find-food").click(function (e) {
    e.preventDefault();
    renderSearch();
  });

  //create recipe card
  const renderSearch = () => {
    var temp = getparam();
    let url =
      "https://api.edamam.com/search?app_id=" +
      apiId +
      "&app_key=" +
      apiKey +
      "&" +
      temp;
    //console.log(url)
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        showRecipe(data);
      });
  };

  //display the recipe
  const showRecipe = (data) => {
    // Mobile
    var div1 = $('<div class="row hide-on-large-only"/>');
    var div2 = $('<div class="col s12"/>');
    var div3 = $('<div class="card vertical-card z-depth-5"/>');
    var div4 = $('<div id="image-box" class="card-image vertical-image"/>');
    var imageMobile = $('<img alt="Recipe Image"/>');
    var div6 = $('<div class="card-content vertical-content"/>');
    var header = $('<h5 class="recipe-title"/>');
    var listMobile = $('<ul class="ingredients-list"/>');
    var cardActionMobile = $('<div class="card-action"/>');
    var cardLinkMobile = $("<a/>");

    // Generate the content for the mobile recipe

    var index = Math.floor(Math.random() * 10 + 1);
    header.text(data.hits[index].recipe.label);
    var ingNo = data.hits[index].recipe.ingredientLines;

    //append the ingredients to the list
    for (var i = 0; i < ingNo.length; i++) {
      var item = $("<li>");
      item.text(ingNo[i]);
      listMobile.append(item);
    }

    cardLinkMobile.attr("href", data.hits[index].recipe.url);
    imageMobile.attr("src", data.hits[index].recipe.image);
    cardLinkMobile.text("Link to the full recipe and steps");

    // Append all the necessary content to the mobile card in the right order
    $("#recipe-space").prepend(div1.append(div2.append(div3.append(div4))));
    div3.append(div6.append(header));
    div4.append(imageMobile);
    div3.append(cardActionMobile.append(cardLinkMobile));
    div6.append(listMobile);
    // Desktop
    var div11 = $('<div class="row hide-on-med-and-down"/>');
    var div22 = $('<div class="col s12"/>');
    var div33 = $('<div class="card horizontal z-depth-5"/>');
    var div44 = $('<div class="card-image"/>');
    var imageDesktop = $('<img class="horizontal-image" alt="Recipe Image"/>');
    var div66 = $("<div class=card-stacked/>");
    var div77 = $("<div class=card-content/>");
    var header1 = $('<h5 class="recipe-title"/>');
    var listDesktop = $('<ul class="ingredients-list"/>');
    var cardActionDesktop = $('<div class="card-action"/>');
    var cardLinkDesktop = $("<a/>");

    
    // Generate the content for the desktop recipe

    // var index = Math.floor(Math.random() * 10 + 1);
    header1.text(data.hits[index].recipe.label);
    // var ingNo = data.hits[index].recipe.ingredientLines;

    //append the ingredients to the list
    for (var i = 0; i < ingNo.length; i++) {
      var item = $("<li>");
      item.text(ingNo[i]);
      listDesktop.append(item);
    }

    cardLinkDesktop.attr("href", data.hits[index].recipe.url);
    imageDesktop.attr("src", data.hits[index].recipe.image);
    cardLinkDesktop.text("Link to the full recipe and steps");

    // Append all the necessary content to the desktop card in the right order
    $("#recipe-space").prepend(div11.append(div22.append(div33.append(div44))));
    div44.append(imageDesktop);
    div33.append(div66.append(div77).prepend(header1));
    div77.append(listDesktop);
    div66.append(cardActionDesktop.append(cardLinkDesktop));
  };

  //get the url based on the user input
  const getparam = (e) => {
    var input = {};
    var food = $("#food-input").val();
    var pref = $("#dPreference").val();
    var label = $("#hLabel").val();
    if (food) {
      input.q = food;
    }
    if (pref) {
      input.diet = pref;
    }
    if (label) {
      input.health = label;
    }
    console.log($.param(input));
    return $.param(input);
  };

  $("#find-video").click(function (e) {
    e.preventDefault();
    getYtVideo();
  });
  // Get the youtube API key from the user (Bring Your Own API)
 
  // run the youtube video function
  const getYtVideo = () => {
    var apiYoutube = $("#key-input").val();
    var temp = ytparam();
    var url =
      "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=" +
      temp +
      "&type=video&key=" +
      apiYoutube;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        createVideoDiv(data);
      });
  };

  const createVideoDiv = (data) => {
    //stuff
    var index = Math.floor((Math.random() * data.items.length) + 1);
    //videoID
    var videoID = data.items[index].id.videoId;
    //videoURL
    var videoSource = "https://www.youtube.com/embed/" + videoID;
    //videoTitle
    var videoTitle = data.items[index].snippet.title;
    //
    var div1 = $('<div class="row"/>');
    var div2 = $('<div class="col s12"/>');
    var div3 = $('<div class="card video-card z-depth-5"/>');
    var div4 = $('<div class="card-content"/>');
    var div5 = $('<div class="video-container"/>');
    var div6 = $("<div class=card-action/>");
    var span = $("<span>");
    span.text(videoTitle);
    var frame = $('<iframe src=""/>');
    //

    frame.attr("src", videoSource);

    var a = $("<a>");
    a.text("Video Link");
    a.attr("href", videoSource);
    console.log(data);
    div5.append(frame);
    div6.append(a);
    div4.append(span);
    div4.append(div5);
    div3.append(div4);
    div3.append(div6);
    div2.append(div3);
    div1.append(div2);

    $("#recipe-space").prepend(div1);
  };

  //youtube parameter
  const ytparam = () => {
    var input = "";
    var food = $("#food-input").val();
    var pref = $("#dPreference").val();
    var label = $("#hLabel").val();
    if (food) {
      input += food;
    }
    if (pref) {
      input += "+" + pref;
    }
    if (label) {
      input += "+" + label;
    }
    console.log(input);
    return input;
  };

  //function to clear recipe space
  $("#clear").click(function(e){
    $("#recipe-space").empty()
  })

});
