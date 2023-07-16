//var has global scope, don't use it!!111
var globalVariable = "global";
function varTest() {
  console.log(globalVariable);
}
//let has block scope
//let can be reassigned
let a = 1;
//const has block scope
const b = 2;
a = 3;

//In Javascript functions are first class objects
//Functions can be assigned to variables
//Functions can be passed as arguments
const newFunc = varTest;
//Arrow functions are preferred
//if your function has only one line of code, you can inline it
const noArgArrowFunc = () => console.log("No arguments");
const enrichedFunc = (func) => {
  func();
  let variable = "enriched variable";
  console.log(variable);
  console.log("enriched");
};
//As a rule of thumb - use const whenever possible, let otherwise
enrichedFunc(varTest);
noArgArrowFunc();
("bobby");

const printHello = (firstLine, secondLine) =>
  console.log(firstLine, secondLine);

const printNum = (num, firstLine, secondLine) => {
  num(firstLine, secondLine);

  const number = 120;

  console.log("Number is", number);
};

printNum(printHello, "Hello", "Bobby");
//create a function that takes executor function as an argument
//and executes it with other arguments provided
//please also create const string and log it inside the function
