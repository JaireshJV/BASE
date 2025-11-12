// // Functions

// (I) DEFAULT / NAMED FUNCTION :

// A named function is a function that has an explicit name assigned to it when defined.
// This name can be used to call the function, refer to it recursively, or debug it easily.

function Jai(name) {
  // return `My name is ${name}`;
  return console.log(`My name is ${name}`);
}

// Jai("Jairesh");

// // Default function using parameter :

// // Function 1 :
// function sum(num1,num2){
//     return num1 + num2
// }

// console.log(sum(12,2));
// console.log(sum(1,2));
// console.log(sum(-1,2));

// function sum(num1,num2){

//     if(num2 === undefined){
//         return num1 + num1
//     }
//     return num1 + num2          // if not enough parameter is passed it will be taken as undefined
// }

// console.log(sum(12));

// // Function 2 :
// let x = 2 ;

// function myFunc(){
//     if (false){
//     var y = 7 ;
//         console.log("yyy" ,y);
//     }
//     console.log("xxx" ,x);

// }

// myFunc()
// console.log(x,'outside');

// // Function 3 :
// let l = 10;

// function saa(){
//   console.log('check :',l);

//   }

// saa()

// // Getting username from mail :

// function getUserNameFromMail(email){
//     return (email.slice(0,email.indexOf("@")))
// }

// console.log(getUserNameFromMail("jai@gmail.com"));

// // Function to convert the string into propercase :

// function toProperCase(name){

//     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
// }

// console.log(toProperCase("jairesh"));

// (II) ANNONYMOUS FUNCTION :

// Basic function - It wont run and throw syntax error :

// function () {
//   console.log('Anonymous');
// }

// This will throw a SyntaxError — because JavaScript expects a function name in a standalone function declaration.
// Function can't be run unless or untill its been called .

// Calling anonymous function through several methods :

// (i) IIFE ( Immediately Invoked Function Expression ) :
(function () {
  console.log("Annonymous");
})();

// (ii) Callback :
setTimeout(function () {
  console.log("Annonymous");
}, 2000);

// (iii) Function Expression :
const Annonymous = function () {
  console.log("ANONYMOUS");
};

Annonymous();

// Rock,paper and scissor game

// callMe()

// function callMe(){
//     let confirmation = confirm("Are you ready to play ?")
//     console.log(confirmation,'confirmation');

// if(confirmation){
//     let playerChoice = prompt("Please type stone,paper or scissor")?.toLowerCase()
//     if(playerChoice === "stone"){
//         console.log("stone");
//     }
//     else if (playerChoice === "paper"){
//         console.log("paper");
//     }
//     else if (playerChoice === "scissor"){
//         console.log("scissor");
//     }
//     else{
//         console.log("Plz try other");
//     }

//     if(playerChoice === "stone" || playerChoice === "paper" || playerChoice ===  "scissor"){
//         let computerChoice = Math.floor(Math.random() * (max - min + 1 )) + min
//         console.log(computerChoice);

//         if(computerChoice === 1){
//             computerChoice = 'stone'
//         }
//         else if (computerChoice === 2){
//             computerChoice = 'paper'
//         }
//         else if (computerChoice === 3){
//             computerChoice = 'scissor'
//         }
//         console.log(computerChoice);

//         let result =
//         playerChoice === computerChoice ? "Tie game" :
//         playerChoice === "paper" && computerChoice === "stone" ? `${computerChoice} , You won !!!` :
//         playerChoice === "paper" && computerChoice === "scissor" ? `${computerChoice} , Sorry ,Opponent won !!` :
//         playerChoice === "scissor" && computerChoice === "paper" ? `${computerChoice} , You won !!!` :
//         playerChoice === "scissor" && computerChoice === "stone" ? `${computerChoice} , Sorry ,Opponent won !!` :
//         playerChoice === "stone"  && computerChoice === "scissor" ? `${computerChoice} , You won !!! ` :
//         playerChoice === "stone"  && computerChoice === "paper" ? `${computerChoice} , Sorry ,Opponent won !!` : "Invalid Input"
//         alert(result)
//         callMe()
//         }
//     }
//     else{
//         alert("Please enter either stone,paper or scissor only")
//         callMe()
//     }

// }

// (III) HIGHER ORDER FUNCTION ( HOF ) :

// A Higher-Order Function is one that takes another function as an argument or returns a function.

// (i) HOF as argument passed :

function operate(a, b, operation) {
  return operation(a, b);
}

function multiply(x, y) {
  return x * y;
}

function add(x, y) {
  return x + y;
}

var inputvalue1 = 11;
var inputvalue2 = 3;
var operatesymbol = "*";
var val = "";

switch (operatesymbol) {
  case "+":
    val = add;
    break;
  case "-":
    val = sub;
    break;
  case "*":
    val = multiply;
    break;
  case "/":
    val = division;
    break;
  default:
    console.log("Nothing matches the operation");
}

console.log(operate(inputvalue1, inputvalue2, val));

// In this example, operate() is a Higher-Order Function because it accepts another function (operation)
// as one of its parameters and executes it with the provided arguments (a and b). This allows different
// operations like addition or multiplication to be passed dynamically, making the function reusable and flexible.

function Higher(fn) {
  return fn; // returning a function
}

function CallMe() {
  console.log("Checkedddddddddddd");
}

const result = Higher(CallMe); // pass function as argument
result(); // prints "Check"

// In this example, Higher() is a Higher-Order Function because it accepts another function (fn)  as an argument
// and returns it. This allows the passed function (CallMe) to be executed later through the returned reference,
// demonstrating how functions can be treated as values in JavaScript.

// (ii) HOF as Function methods :

const array = [2, 4, 6];

const doubled = array.map((elem) => {
  return elem * 2;
});

// In this example, the map() method is a Higher-Order Function because it accepts another
// function ((elem) => elem * 2) as its argument and applies it to each element of the array.
// This allows dynamic operations to be performed on array elements without modifying the original array.

// (iii) HOF without taking function as argument but returning a function  :

function greet() {
  return function (name) {
    console.log(`Hello, ${name}!`);
  };
}

const sayHello = greet(); // greet() returns a function
sayHello("Jairesh"); // 👉 "Hello, Jairesh!"

// In this example, greet() is a Higher-Order Function because it returns another function instead of taking one
//  as an argument. The returned function accepts a name and prints a
// greeting message, allowing greet() to generate customized functions dynamically.

// Examples :

// (i)
function filterArray(arr, testFunc) {
  console.log(arr, "arrarr");

  console.log(testFunc, "testFunc");

  const result = [];
  for (let item of arr) {
    console.log(item, "item");
    console.log(testFunc(item), "testtt");

    if (testFunc(item)) {
      result.push(item);
    }
  }
  return result;
}

// (ii)
const numbers = [5, 10, 15, 20];
const greaterThan10 = filterArray(numbers, (num) => num > 10);
console.log(greaterThan10, "greaterThan10");

function calculator(a, b, operation) {
  console.log("Calculating...");
  const result = operation(a, b); // calling passed function
  console.log(result, "result");
}

function add(x, y) {
  return x + y;
}

calculator(10, 20, add);

//(iii)
function checkNumber(num, callback) {
  if (callback(num)) {
    console.log(num, "passed the test!");
  } else {
    console.log(num, "failed the test!");
  }
}

function isEven(n) {
  return n % 2 === 0;
}

checkNumber(7, isEven);
checkNumber(10, isEven);

// (iv)
function processData(data, callback) {
  for (let item of data) {
    callback(item);
  }
}

function display(item) {
  console.log("Processing:", item);
}

processData(["apple", "banana", "cherry"], display);

// (IV) CALL BACK FUNCTION :

// The function passed as an argument to a HOF, which the HOF later calls back (executes).

// A callback function is a function that is passed as an argument to another function (the HOF),
//  with the expectation that the outer function will call it later to complete some kind of routine or action.

// (i)
function greetUser(name, callback) {
  console.log("Hi " + name);
  callback(); // callback executed here
}

function sayBye() {
  console.log("Goodbye!");
}

greetUser("Jairesh", sayBye);

// ✅ Callback Function: sayBye
// ✅ Higher-Order Function: greetUser
// 💡 The callback runs after greeting the user.

// (ii) In this , the arrow function inside the SetTimeout is a callback function , as it excecutes later .
setTimeout(() => {
  console.log("Step 1 completed");

  setTimeout(() => {
    console.log("Step 2 completed");

    setTimeout(() => {
      console.log("Step 3 completed");
    }, 1000);
  }, 1000);
}, 1000);

//(V) IIFE-Immediatly Invoked Function Expression

// The function below is an Immediately Invoked Function Expression (IIFE) — it’s defined and executed right away when the JavaScript code runs:

(function () {
  console.log("Immediatly Invoked Function Expression");
})();

// This means that as the JavaScript code runs line by line, this function is executed immediately at the point where it’s written.
// You can’t call it again later because it runs automatically right where it’s declared.

// (VI) FUNCTION EXPRESSION :

// FunEpression();               // In here , hoisting will not happen .

const FunEpression = function () {
  console.log("A function has assigned to a variable");
};

// Here, the function is stored inside the variable FunExpression.
// This means FunExpression now acts like the function’s name, and you can call it anywhere after it has been defined, like this:

FunEpression();

// Unlike a function declaration, a function expression is not hoisted, so it must be defined before it’s called.

// (VII) ARROW FUNCTION :

// An arrow function is a shorter and simpler way to write a function in JavaScript,
//  introduced in ES6, using the => (arrow) syntax.

// (i) Method 1 : INLINE ARROW METHOD [ Arrow function without return and without curly braces ] :

const arrowfunct = (a, b) => a + b;
console.log(arrowfunct(7, 3));

// (ii) Method 2 : Arrow function with return and with curly braces :

const arrowwithreturn = (a, b) => {
  return a * b;
};
console.log(arrowwithreturn(5, 6));

// (VIII) CURRYING FUNCTION :

// Currying is the process of transforming a function that takes multiple arguments
// into a sequence of functions, each taking a single argument and returning another function —
// until all arguments are provided.

//(i) Method 1 :
const curry = (a) => (b) => (c) => a + b + c;

console.log(curry(8)(3)(9), "currying_without()");

//(ii) Method 2 :
const curryy = (a) => (b) => (c) => a + b + c;

console.log(curryy(81)(3)(9), "currying_with()1");

// (iii) Method 3 :

// Single value in paranthesis :

const curyii = function (a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
};

console.log(curyii(4)(13)(7), "currying_with()2");

// Multiple values in paranthesis :
// It is partially currying .
// Because a true currying should have unary arguments for each function .

const curyi = function (a, b) {
  return function (c, d) {
    return function (e, f) {
      return a + b + c + d + e + f;
    };
  };
};

console.log(curyi(18, 4)(13, 7)(9, 7), "currying_with()3");

//(iv) Method 4 :

(function (a) {
  return function (b) {
    return function (c) {
      console.log(a + b + c, "Currying_With_IIFE");
    };
  };
})(2)(3)(9);

// (IX) GENERATOR FUNCTION :

// A generator function in JavaScript is a special kind of function that can pause its
// execution and later resume from where it left off, allowing it to produce multiple
//  values one at a time, instead of returning them all at once.

function* counts() {
  let i = 1;
  while (true) {
    yield i++;
  }
}

const counter = counts();
console.log(counter.next().value, "generator");











// (X) RECURSIVE FUNCTION :
// A recursive function is a function that calls itself directly or indirectly in order to solve a problem.

// Factorial :

function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(6));

function outer() {
  return function inner() {
    console.log("I ran");
  };
}

const run = outer();

run();

function Joe(cal) {
  console.log("I came inside");
  cal();
}

function callback(wal) {
  console.log("Naan thaanda Call Back !!!");
  wal();
}

function wallback() {
  console.log("Na varmaten");
}

Joe(function () {
  callback(wallback);
});

// Sum of values :

function kootu(s) {
  if (s == 1) return 1;
  return s + kootu(s - 1);
}

console.log(kootu(6), "kootu");

// Fibonocci

// The Fibonacci definition is a sequence where each number is the
//  sum of the two preceding ones, typically starting with \(0\) and \(1\).
function fibino(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fibino(n - 1) + fibino(n - 2);
}
console.log("fibino:", fibino(10));

// 0   ==> 0 ;
// 1   ==> 1 ;
// 2   ==> 1 ;
// 3   ==> 2 ;
// 4   ==> 3 ;
// 5   ==> 5 ;
// 6   ==> 8 ;

//                                          F5

//               F4                                                F3
//        F3             F2                                    F2      V1
//    F2     V1      V1    V0                                V1  V0
// V1    V0

// 1          1       1                                      1          1

// fibino(5)
// ├─ fibino(4)
// │  ├─ fibino(3)
// │  │  ├─ fibino(2)
// │  │  │  ├─ fibino(1) -> 1
// │  │  │  └─ fibino(0) -> 0
// │  │  │  => fibino(2) = 1 + 0 = 1
// │  │  └─ fibino(1) -> 1
// │  │  => fibino(3) = 1 + 1 = 2
// │  └─ fibino(2)
// │     ├─ fibino(1) -> 1
// │     └─ fibino(0) -> 0
// │     => fibino(2) = 1
// │  => fibino(4) = 2 + 1 = 3
// └─ fibino(3)   (this is recomputed separately)
//    ├─ fibino(2)
//    │  ├─ fibino(1) -> 1
//    │  └─ fibino(0) -> 0
//    │  => fibino(2) = 1
//    └─ fibino(1) -> 1
//    => fibino(3) = 1 + 1 = 2

// => fibino(5) = 3 + 2 = 5




// Countdown

function countdown(n) {
  if (n === 0) {
    console.log("Done!");
    return;
  }
  console.log(n);
  countdown(n - 1);
}

countdown(5);




// Sum using recursive function

function sumr(n) {
  if (n == 1) return 1;
  return n + sumr(n - 1);
}

console.log(sumr(7));




// Reverse a string using recursion


function reverseString(str) {
  if (str === "") return "";


  return reverseString(str.substr(1)) + str[0]; 
}
console.log(reverseString("hello"));



// if (str === "") return ""; ==> Here we set the return as "" ;
// str[0] ==> Takes the first index element of the string ;
// str.substr(1) ==> It will give the string except the first element ;

// ==> function(ello) + h 
// ==> function(llo) + e
// ==> function(lo) + l
// ==> function(o) + l
// ==> function('') + o  =>  olleh

// Once str reaches "" it sets the return "" , then starts the unwind of previous stacks to resume ,
// return "" + "o" ==> "o" , so, reverseString("o") becomes "o" ,
// 



// push reverseString("hello")
//  push reverseString("ello")
//   push reverseString("llo")
//    push reverseString("lo")
//     push reverseString("o")
//      push reverseString("")  --> returns ""
//     pop, compute "" + "o" -> returns "o"
//    pop, compute "o" + "l" -> returns "ol"
//   pop, compute "ol" + "l" -> returns "oll"
//  pop, compute "oll" + "e" -> returns "olle"
// pop, compute "olle" + "h" -> returns "olleh"












// Alternative method [ For reference (not recommended)]


// const str = "hello" ;

// const st = str.split(",");
// const s = st.reverse();
// const sr = s.join();

// console.log(str[0]);
// console.log(str.substring(1));
// console.log(str.substring(1) + str[0] );

// return str = str.substring(1) + str[0] 


// function reverseString(str) {
//   console.log("Input:", str);

//   if (str === "") {
//     console.log("Base case reached, returning empty string");
//     return "";
//   }

//   const withoutFirst = str.substr(1); // remove first char
//   const firstChar = str[0]; // save first char

//   console.log(`Peeling off '${firstChar}', remaining: "${withoutFirst}"`);

//   const reversedRest = reverseString(withoutFirst);

//   const result = reversedRest + firstChar;
//   console.log(`Adding back '${reversedRest}'->'${firstChar}' → "${result}"`);

//   return result;
// }

// console.log("Final result:", reverseString("hello"));






