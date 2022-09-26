# **Dazzling Nails**
This website is design to become an e-commerce website for a small, independent business selling bespoke press on nails. Working closely with the business owner to develop the content, including the webpages to implement and content hierarchy (defining the nav tabs and the footer links). 

**Some links may not be active as this website is still undergoing development**
# **UX**
## **Overview**
The user interface has been designed to be simple, contemporary yet bold. The navigation bar within the header allows easy navigation across the website to the most important content, such as the products, important product information (aftercare) and custom products. These are the main aspects the business is built on. 

The footer contains links to all webpages, covering the links included in the nav bar and extending this with further information the user could need.

Each webpage has been designed for one purpose - whether this is to display one topic of information, products or contact information. This is to avoid overwhelming the user with too much information, making each web page easy to navigate and read.
## **Home Page**
The Home page has been divided into 3 sections; the right most section has been divided into two. This layout creates 4 clearly defined sections. The sizing of each provides hierarchy on the page, allowing the business to display content on relevancy.

The current Home sections include: 
* Collections - user navigates to collections page. This is displayed on the left in a large section, as it is an important page for the business.
* New Season - regular users can navigate quickly to the newest and on trend items. This is positioned centrally so it is the user's first focus.
* Blog and Size Guide - smaller sized sections, as they contain less important than the main products.
## **Collections and All Products Pages**
Clean layout so the focus is on the collections. Layout created using CSS Flexbox to add responsiveness. 
Simple, clear filters included on the main / all products page. Achieved through HTML classes and Javascript.

## **Contact Page**
Form styled using CSS to keep the with the simple, contemporary styling. Placeholders used to show the user what information is required in each field. 

NodeParser and Express used to parse the form values into and email which is sent to the business owners own email address so they are always up to date with new for submissions. 
<!-- # **Features**
## **All Pages**
* **How to icon** -  sits within the header so it is accessible anywhere on the site. 

* **How to modal** - appears on top of the web page so the game state is not interrupted. Visible when a user first accesses the website and when the user clicks on the question mark icon.  

* **GiHub link** - in the footer to the source code so any visitors to the site can find the repository.

## **#game-page**
* **Game end modal** - informs the user that the game has been successfully completed. 'Play Again' and 'Learn' buttons included on the bootstrap modal component so the user can extend their experience after they have completed the game. 

* **Cards** - bootstrap card component used to create each card in the game.

## **#learn-page**
* **Bootstrap Grid** - to create a responsive and clean layout of the content. -->

# **Features to be implemented**
* **Converting from a single HTML file to a React based website** - to easily implement and maintain the product pages.
* **Product Pages** - individual product pages
* **Product Database** - a product database to populate individual product pages.

# **Technologies used**
* **HTML 5** - used to create the basic content of the website.
* **CSS3** - used to add custom styling to the content of the webpage. 
* **JavaScript** - heavily used for the game logic (randomise card, check for correct pairs and reset the pack).
* **Google Fonts** - used to import a custom font to style the text. 
* **Git** - this was used during production to efficiently commit and push changes to the GitHub repository so no code could be lost. 
* **GitHub** - this was used to create and manage a remote repository which holds all commits and pushed from Git. I made uses of the repository branches to separate and track working changes, in case of bugs, before committing new changes to the master branch.

# **Testing**
While building the website I regularly used Google Chrome, FireFox, Safari and Edge browsers to render my code, checking for any broken code and incompatibility.

I used the Developer Tools built into Chrome to test responsiveness of the website, by selecting different devices.

To test the Javascript, I regularly used the 'console.log()' method to print messages to the console. I used this method to test for the following: 

* Whether a function itself was being executed.
* To locate where the code would break / stop running due to an error. 
* To print javascript objects to the console, in order to check their properties.

# **Deployment**
## **Start of project**
At the start of the development I created a repository on GitHub and cloned a local copy to my machine. To do this I followed these steps:

1. On GitHub webpage I went to 'your repositories' page and clicked 'new' to create a new repository for this project called 'Dazzling-Nails'.
2. I went into the new repository, clicking on the green 'code' button, I selected the 'download ZIP' option from the dropdown.
3. Once the ZIP folder had downloaded, I saved it in a relevant place on my machine and create the file directory structure. 

## **Development**
During development I regularly used the git command line tool to create branches, push my code to the remote repo and manage commits. Once a large code block had been added I used GitHub to create pull requests to merge branches into the main branch. Some commands I used were: 

4. git add . (to add all modified files to the staging area)
5. git commit -m "" (to commit files with a message)
6. git push (to upload the code from the local repository to the remote repository)
7. git cherry-pick (with a commit hash, to copy a commit from one branch to another)
8. git pull (to bring remote changes into my local repository)

## **Deployment**
The page has been deployed to Netlify pages for hosting - [Dazzling Nails hosted on Netlify](https://dazzlingnails.netlify.app/).

The deployment has been linked to the GitHub repo main branch, so new changes are automatically deployed. 
## **Repo Link**
[Github Repo for Dazzling Nails](https://github.com/nkpe/Dazzling_Nails)

## **Running Code Locally**
The code can be run locally by downloading from my GitHub repository following these steps: 

1. Click on the green 'Code' button.
2. From the drop down menu select 'download ZIP' or select the relevant clone option.
3. If downloading ZIP, this should be unzipped before running the index.html file in a browser. 


# **Credits**
## **Code**
Assistance came from W3 schools, CSS Tricks and Stackoverflow posts in learning and creating the code for this website.

## **Content**


## **Media**

The product images provided by [Dazzling Nails](https://www.instagram.com/dazzlingnailsco/).
All other images are from [unsplash](https://unsplash.com/).


## **Acknowledgements**
* Thank you to my sister for providing me with the content from her small business. 
