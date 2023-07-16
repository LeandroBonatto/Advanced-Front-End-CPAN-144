//In Javascript, objects consist of key-value pairs
//In Javascript objects also look similar to JSON
const studentJohn = {name: 'John', age: 30}; 
const studentBob = {name: 'JohBobn', age: 34};
const name = studentJohn.name;
//Object can be nested and complex, contain functions, arrays, etc
const university = { 
    name: "University of Helsinki",
    students: [studentJohn, studentBob],
    professor: {name: "Xavier", age: 45},
    print: function() {
        //${} IS USED TO INSERT VARIABLE INTO STRINGS
        //but you need ise `` to be able to insert variables
        console.log(`Welcome to ${this.professor.name}`);
    },
};

//template literal is a way to insert variables into strings
const greetingOfJohn = `Welcome to ${studentJohn.name}`;
university.print(); 
//create an object called game, which has a property called name,
//property called finalBoss, which is an object with name and health properties
//and a property called characters,
//which is an array of objects with name and health properties
// and a property called showdown, which prints somethings like
//welcome to the ${game.name} game! The final boss is ${game.finalBoss.name}
