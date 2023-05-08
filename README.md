## **Technical Assessment**

## Quickly Code Challenge

This app has the following features:
1. Requirements:
2. 3 Pages/Views
3. Each component should have a jest unit test associated with it. 
4. A basic navigation between the 3 pages
5. Use a style framework so you don't spend time styling anything.
6. Select an http request library of your choice to make calls to the quickly auth service.

## Project Directory Structure

```
 
├─── Pages/
   │ Login.js  
   | Register.js
   │ Profile.js
├───api_url.js
├───package.json
```

## Getting Started

Prerequisite:

```
cd Desktop
git clone "https://github.com/anjalibajaj23318/coding-challenge"
cd front-end
npm install (to install the packages)
npm run dev (since, this is the development server)
```

## Information about the components

1. Register:

```

Having 7 fields, handling the validations as well as using the microservice to call the api and navigate to the login page after storing values in localstorage.

```

2. Login

```
Having 2 fields, in the Login component and following the basic validation mentioned in the coding challenge pdf. 
- A login form (email, password)
- Email input should validate it is indeed an email

Also, containing information for calling the Quickly Auth Microservice using axios to calling the api and storing value in the localstorage.

```

3. Profile:

```
It is contianing the information of the user which is being stored in the local storage.

```

## links for the netlify and also the source code.

https://euphonious-druid-b3f6bd.netlify.app/

