import fetch from "node-fetch";

//Async in javascript
//Let's create a simple synchronous function
//Synchronous functions are simple to read and reason about

const addAndDisplay = (a, b) => {
  //1
  const c = a + b;
  //2
  console.log(c);

};

//Simple asynchronous function
//SetTimeout is a function that takes a callback function as an argument
//and executes it after a certain amount of time
const timeoutDisplay = () => {

  setTimeout(() => console.log("Async"), 0);
  console.log("Sync");
};

//When you develop web applications, you need two things:
//front-end and back-end, frontend is responsible for the user interface
//and back-end is responsible for the server-side logic and serving data

//Promises have three states: pending, fulfilled and rejected
const fetchData = () => {
  //fetch is an async function gets data using a url and returns a promise
  //Promise is a value in the future
  //Every async function returns a promise
  //.then is executed when the promise is resolved

    //1 we use fetch to get data from a url
    fetch("jsonplaceholder.typicode.com/posts")
    //2 we use .then to get the json data from the response
    .then((response) => response.json())
    //3 we use .then to display the json data in the console
    .then((json) => console.log(json))
    //4 we use .catch to handle errors
    .catch((error) => console.log(error))
    //5 we use .finally to execute code after the promise is resolved
    .finally(() => console.log("finally"));
};

const modernFetch = async () => {

    //1 we use fetch to get data from a url
    const response = await fetch("jsonplaceholder.typicode.com/posts");
    //2 we use .then to get the json data from the response
    const json = await response.json();
    //3 we use .then to display the json data in the console
    console.log(json);
}

modernFetch();