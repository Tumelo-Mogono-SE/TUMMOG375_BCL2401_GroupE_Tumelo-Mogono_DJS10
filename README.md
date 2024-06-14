# Project Brief: DJS10 - Asynchrony
# Overview
### Objective
For this project we dived into the asynchronous world of React by creating an application that fetches and displays blog posts from an API. We practiced handling API calls with the Fetch API, managing application state, and gracefully handling errors.

### Project Description
Our task is to build a React application that makes HTTP GET requests to the JSONPlaceholder API to retrieve a list of dummy blog posts. The application should render the titles and bodies of these posts on the screen. We also implemented error handling to manage unsuccessful API calls.


# Project Process
* I started the project by first installing React using vite, which I then deleted some of the boilerplate. I then created a new component file called Api. 
* Inside of my Api component file I imported React, useState and useEffect. I then inside of my Api function utilized my useState hook to initialize the apiPost variable with an empty array, I also used the useState hook to initialize the error variable with a null and the loading variable with a false boolean value.
* I then used the useEffect hook to create a function which inside it I have a fetchPosts functino which uses async, inside the function I set the loading variable to be true using setLoading, I then have a try catch finally method which inside the try I fetch the data from the api and check if the status is okay and if not I throw an error. If okay I they take the response of the api and convert to a json format and update my apiPost array with the data from the api using setApiPost.
* In my catch I catch the error message and then in my finally I set my loading to false so that we can replace it with the rendering of the data in my html elements.
* I then caleld my fetchPosts function and made sure the side effect is in an array in case of changes.
* I then have a conditional statement, one to check if loading is true and one to check if error is true which if they are they will render some html elements, one displaying loading and the other displaying an error message.
* I then have a return statement which will render when the api data is successfully fetched, inside it I have an h1 element to display Posts. I then have an unorganised list which inside it I map over the apiPost which contains an array where I return list elements which contain a key being the id of each post and inside the list elements I have an h2 and a p element which the h2 element display the position of the post which I add one since array start the index from 0, I also get the title of the post and finally in my p element I display the body from the post.
* I then export the Api component, which I import in my App file and then add to my return statement inside a div element which is the parent and provide it with a class name which I can utilize in my css.
* Inside my css I applied styling to ensure my elements are centered and also applied some animation for my loading where I added spans for each dot so that they display individually in animation.


# Challenges
For this project I didn't have any problems, due to the previous other project we worked on which dealt with api fetching and went in depth with using react for different use cases. I would say I struggled to do one thing I had in mind which was having the error message to disappear and the rendering of the data to display when ever the url is fixed without refreshing the page.

# Feedback
This was a great project, but it could have been a bit more in depth to challenge us more.






