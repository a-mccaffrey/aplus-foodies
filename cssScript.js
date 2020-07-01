// jQuery call to allow the dropdown menu function
$(document).ready(function(){
  $('select').formSelect();

  const apiKey = "6d32852b741eb95d8988031957d11ab4";
  const apiId = "cd86986f"
  
  //get recipe button
  $("#find-food").click(function(e){
    e.preventDefault()
    renderSearch()
  })

  //create recipe card
  const renderSearch =()=>{
    var temp = getparam()
    let url = "https://api.edamam.com/search?app_id="+apiId+"&app_key="+apiKey+"&"+temp
    //console.log(url)
     fetch(url)
       .then((response)=>{
         return response.json()
       })
       .then((data)=>{
         showRecipe(data)
       })
  }

  //display the recipe
  const showRecipe = (data)=>{
    //create a random index
    var index = Math.floor((Math.random()*10)+1)
    $("#recipe-title").text(data.hits[index].recipe.label)
    $(".ingredients-list").empty()
    var ingNo = data.hits[index].recipe.ingredientLines
    
    //append the ingredients to the list
    for(var i=0; i<ingNo.length; i++){
      var item = $("<li>")
      item.text(ingNo[i])
      $(".ingredients-list").append(item)
    }

    $("#recipe-instructions").empty()
    $("#recipe-link").attr('href', data.hits[index].recipe.url)
    $(".img").attr('src', data.hits[index].recipe.image)
  }

  //get the url based on the user input
  const getparam = (e)=>{
    var input={}
    var food=$("#food-input").val()
    var pref=$("#dPreference").val()
    var label=$("#hLabel").val()
    if(food){
      input.q = food
    }
    if(pref){
      input.diet=pref
    }
    if(label){
      input.health=label
    }
    console.log($.param(input))
    return $.param(input)
  }

  $("#find-video").click(function(e){
    e.preventDefault()
    getYtVideo()
  })

  const getYtVideo=()=>{
    var temp = ytparam()
    var url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=" + temp+ "&type=video&key";
    fetch(url)
      .then((response)=>{
        return response.json()
      }).then((data)=>{
        createVideoDiv(data)
      })
  }

  const createVideoDiv=(data)=>{
    //stuff
    var index = Math.floor((Math.random()*data.items.length)+1)
    //videoID
    var videoID = data.items[index].id.videoId
    //videoURL
    var videoSource = "https://www.youtube.com/embed/" + videoID
    //
    var div1 = $('<div class="row"/>')
    var div2 =$('<div class="col s12"/>')
    var div3 =$('<div class="card video-card z-depth-5"/>')
    var div4 =$('<div class="card-content"/>')
    var div5 =$('<div class="video-contanier"/>')
    var div6 =$('<div class=card-action/>')
    var span =$('<span>')
    span.text("Video Recipe")
    var frame=$('<iframe src=""/>')
    //

    frame.attr('src', videoSource)

    var a =$('<a>')
    a.text("Video Link")
    a.attr("href", videoSource)
    console.log(data)
    div5.append(frame)
    div6.append(a)
    div4.append(span)
    div4.append(div5)
    div3.append(div4)
    div3.append(div6)
    div2.append(div3)
    div1.append(div2)

    $("#recipe-space").append(div1)
  }

  //youtube parameter
  const ytparam=()=>{
    var input=""
    var food=$("#food-input").val()
    var pref=$("#dPreference").val()
    var label=$("#hLabel").val()
    if(food){
      input += food
    }
    if(pref){
      input+="+"+pref
    }
    if(label){
      input+="+"+label
    }
    console.log(input)
    return (input)
  }

});
