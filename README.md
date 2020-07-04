# A-Plus Foodies Project README

## README Index
1) Instructions for generating your own Youtube API Key
2) Project Concept
3) User Story and Acceptance Criteria
4) Process
5) Links
6) Direction for future development

## 1) Instructions for generating your own Youtube API Key

### A brief explanation of why we did this

We wanted to use the [Youtube V3 API](https://developers.google.com/youtube/v3/docs) in order to generate video recipes, as we wanted to present the user with more options for following along with a recipe.

In order to use a Google API securely, you cannot save it to a github repo. Without understanding more about this topic, we could not obfuscate our API key in order to generate this functionality in a more frictionless fashion. However, we could add this functionality in the future.

Here are the steps to follow in order to generate your own API key and use our app. Note: we cannot access your key when you enter in our app due to the nature of the application's setup.

1) Go to the [Google Developer Console](https://console.developers.google.com/)
2) Sign in with your Google (gmail) account
3) Click "Create Project"
4) Type in a name for your project, then click "create"
5) Click "+ Enable APIs and Services"
6) Enter "YouTube V3" in the search bar, and then click "enable"
7) Click "Create Credentials"
8) Fill out form by selecting the "Youtube Data API V3" from the first dropdown, and "Web browser (Javascript)" from the second dropdown, and select "Public Data" from the radio box choices. Then click the button that says "What credentials do I need?"
9) Copy your API key from the "Get Credentials" results, return to our app at [https://a-mccaffrey.github.io/aplus-foodies/](https://a-mccaffrey.github.io/aplus-foodies/), and use it there to generate a video recipe from Youtube.
10) Enjoy your meal!

## 2) Project Concept

A-Plus foodie is THE up-and-coming personalized recipe searcher you can carry with you anywhere, anytime. Simply type in the ingredients you have, and any food restrictions you have, and our state-of-the-art yum-optimization technology will display the ideal food for YOU!

## 3) User Story and Acceptance Criteria

### User Story
AS A food crazy developer

I WANT AN application/website that finds recipes based on an ingredient I have

SO THAT I know what I can make to eat right now

### Acceptance Criteria

GIVEN I am using a recipe generator to find something to cook
WHEN I open the web page
THEN a form is generated 
WHEN I input my food preference and press submit
THEN it retrieves a random recipe/video that matches the criteria
WHEN I press clear all
THEN it clears the recipe/video cards from the recipe area

## 4) Process

### Technologies Used
- VSCode
- jQuery
- [Edemam API](https://developer.edamam.com/) and [Google Youtube v3 API](https://developers.google.com/youtube/v3/docs)
- [Bideo.js](https://rishabhp.github.io/bideo.js/)
- [Materialize.css](https://materializecss.com/)
- Wireframe: [Balsamique](https://balsamiq.com/)

### Task Breakdown
Aisling: Front End HTML and CSS, integrating with JS, Mobile Responsiveness
Mohammed: Front End, Finding Technologies (Materialize, Bideo, etc), integrating and improving JS
Dasa: Validating APIs, basis for the JS before integration to HTML

### Challenges
- Learning to use GitHub (merging conflicts, pull requests, etc)
- Working as a remote-first team (having only met on zoom before)
- Google API key obfuscation

### Successes
- The Materialize CSS framework made it easier to design a mobile-friendly experience, and came with its own JS-based user feedback indicators, like moving the “helper text” out of the way of the user when they go to enter their ingredients.
- As junior developers we were all able to create a functional web app that is dynamic (takes input from users, spit out relevant content based on the input)
- We were able to deal with merge conflicts using github

## 5) Links

- [README](https://github.com/a-mccaffrey/aplus-foodies/blob/master/README.md/)
- [Application](https://a-mccaffrey.github.io/aplus-foodies/)

## 6) Direction for future development
- More sophisticated and customized food selection process such as more food limitation options, more dietary restriction options, maybe a culture option?
- Implement more APIs so that foodies can have more details about the food
- More standardized design so that the user experience is more streamlined
- Provide our own secure API key for the Youtube API portion so that the user doesn’t have to generate their own
- Save the recipe cards in local storage until the user clears them
