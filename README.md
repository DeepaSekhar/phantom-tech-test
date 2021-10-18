# Phantom Tech Challenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.14

[Live on Github pages](https://deepasekhar.github.io/spotify-app/)

# Aim

This project is created for tech challenge for Phantom

# Project

Users can search for:

- Enter url to the list.
- View all listed Urls.
- View their inputed Url with a greeting message.
- Perform CRUD operations.

# Technologies used

Angular

## Instructions

To get started locally, follow these instructions:

1. If you haven't done it already, make a fork of this repo.
2. Clone to your local computer using git.
3. Make sure that you have Node installed with npm install
4. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Features of Phantom tech-test

- Get an input from the user.
- Display all the links to the same page as user enter url.
- Once the user submit the link It will show a greeting message with their url.
- Perform CRUD operation.
- Data stored and retrieved from local storage.

## approch

1. I started with learning how to handle data using the local storage.
2. I draw diagrams of how the different component needed to interact with each other and how the data would flow.
3. I created a trello board to plan the project.
4. Next, Started building up the project.
5. Used scss to style pages.
6. I used 4 screen sizes for the responsive design.( small: 767px, medium: 992px large: 1023px,xlarge: 1440px )

## Learnings/Challenges

- Never worked with local storage .So had to learn how to work with local storage.
- Validation-When tried to validate Url using Http request(To check status of the request)was getting CORS error.
- Edit operation (having a bug in it).
- Pagination(investigated but not implemented due to time constraints)

## Need implementation

- Need to fix CORS error for validation.
- Having a bug in Edit operation.(When click on one Url it was opening edit function for all the urls)
- Need to apply more styling on the pages.
