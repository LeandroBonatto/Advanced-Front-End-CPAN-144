//To use function from a different file, we need to import it
//when we use regular import we need to use curly braces

//By using import/export we can organize our code in a way that
//it's logically separated from other code

//When you import default export from a file, 
//you don't need to use curly braces
import add, { filterByKeyword, copy } from "./filterUtils.js";

const words = ["Hello", "World", "in", "a", "frame"];
const result = filterByKeyword("a", words);
const resultCopy = copy(words);
//In the file main.js I want you to write a function
//That fetches posts from the url https://jsonplaceholder.typicode.com/posts
//Then only leaves the posts with a body that contains the keyword "quo"
//Then transforms the posts into an array of strings that represent their titles
//return value of this function should be an array of strings
