# My ducks / My favorite Ducks
### VideoDemo: https://youtu.be/4eSpPT1E4gc
### Description: 
My final project is a web application that allows a user to see funny pictures of ducks from the API. But user can not only see the images but save them to user's personal collection and then to share this collection of pictures with friends (or anyone really) via link. This link will lead to the separate page with pictures from collection of the particular user.
To make this project work I learnt a lot of things on the way. First of all, I had to get acquainted with a new framework, Svelte. I learned how to adapt the skills that I got from CS50's section about Flask, HTML, CSS and JavaScript to the new environment. And I had to figure out how svelte operates, what tools can it offer to a developer and, most importantly, how to use these tools. Next, I learned how to work in Svelte in conjunction with Firebase. I needed Firebase to be able to create a database of users (and their collection of images) and to deploy my project. I took a short and rather fast-paced online course on Svelte and created my first application using Svelte and Firebase. It included a lot of useful things, like user authorization and cookies, concepts of stores and actions in Svelte etc. That first project wasn't mine though, so I decided to take an idea of application that I once had in mind when I was just at the beginning of my programming path and was learning Swift programming language.
Now I would like to tell about some of the features of this application. To start with, I had to generate a userID, assign it to the cookie and save it to the database. Then I needed to fetch data (image) from the API and then to display it on the page. In the process of doing that I learnt about the concept of async functions which was very helpful to fetch the data from the API and then creating actions in Svelte.
 I also learned how to save the data (in my case it was a url to the image) to the database in Firebase and how to get it from it to display in user's collection. I used actions tool to run the process of adding a new image url to an empty or already existing array of images in the database. 
 As I had to display the collection of the user on two pages (first, below the new image from the API on the homepage and then on the separate page that displays only user's collection), I created a separate component in the lib directory that contained the code I could reuse and iplement on two pages avoiding copypasting.
 I created a separate page only for user's collection of images and made it possible to copy the link to this page to clipboard (using the button), so that it would be easier to send and share with someone. 
 I also implemented Tailwind and DaisyUI to style the application as I liked. 
 
