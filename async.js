import fetch from "node-fetch";

const addint = (number1, number2) => {
    const result = number1 + number2;
    console.log(result);
  };
  
  const timeoutDisplay = () => {
    setTimeout(() => console.log("Async"), 0);
    console.log("Sync");
  };
  
  const fetchData = () => {
    
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.log(error))
      .finally(() => console.log("finally"));
  };
  
  const modernFetch = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const json = await response.json();
      console.log(json);
  }
  
  modernFetch();