// jQuery call to allow the dropdown menu function
$(document).ready(function(){
  $('select').formSelect();

  //$('#form').parsley()
  const apiKey = "6d32852b741eb95d8988031957d11ab4";
  const apiId = "cd86986f"
  
  //get recipe button
  $("#gRep").click(function(){
    renderSearch()
  })

  //
  const renderSearch =()=>{
    var temp = getURL()
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
  const getURL = (e)=>{
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


});
