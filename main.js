//To use function from a different file, we need to import it
//when we use regular import we need to use curly braces


//It is logically separated from other code

//when you import default export from a file,
//you don't need to use curly braces
import add, { filterByKeyword, copy } from "./exportConstFilterByKeyword";

const word = ["Hello","World","in","a","frame"];
const result = filterByKeyword("a", words);
const resultCopy = copy(words);
console.log(resultCopy)
//In the file main.js I want you to write a function
//That fetches posts from the url jsonplaceholder.typicode.com/posts
//Then only leaves the posts with a body that contains the keyword "quo"
//Then transforms the posts into an array of strings that represent their titles
//return value of this function should be an array of strings

