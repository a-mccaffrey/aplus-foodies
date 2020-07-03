# aplus-foodies

## Instructions for generating your own Youtube API Key starting with a brief explanation of why we did this

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
