# PocketLibrary

Project: Build a digital library using an array of books applying newly aquired JavaScript skills. 

## Tech stack
- JavaScript 
- HTML (precoded)
- CSS (precoded)

## Project

In this projects I wanted to apply concepts like DOM manipulation, event handling, function definitions, conditional statements, variable assignment, and object and array manipulation. The goal was to display the elements, add a filter as well as a sorting option. 
For that I first build a simple digital library website in Figma including some sorting buttons and a filtering selection. I then build the skeleton of the website using HTML and CSS. I left the area where I wanted to display the books in empty as I wanted to add them dynamically using DOM manipulation. I did that by creating a function that would loop over each object (book) in my array and display them. For each book a container was created that then included the cover, title, author, etc. I made sure to give it a new class name so I could style it in CSS. I then added each book container into the larger library container. In addition, I made two seperate function to sort and to filter the books. For the sorting function, I rearranged the books array, while for the filtering function, I created a sub-array for the filtered books. I handle the events of pressing either a sorting button or select on of the filter options by updating the website according to the sorting or filtering applied. 
In the end, I adjusted the website styling for different devices sizes. 


## View it live

Project is deployed here: [Pocket Library](https://pocketlibrary.netlify.app)