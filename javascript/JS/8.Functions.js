// Functions

function sum(num1,num2){
    return num1 + num2
}

console.log(sum(12,2));
console.log(sum(1,2));
console.log(sum(-1,2));

function sum(num1,num2){

    if(num2 === undefined){
        return num1 + num1
    }
    return num1 + num2          // if not enough parameter is passed it will be taken as undefined
}

console.log(sum(12));

function getUserNameFromMail(email){
    return (email.slice(0,email.indexOf("@")))
}

console.log(getUserNameFromMail("jai@gmail.com"));

function toProperCase(name){
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
}

console.log(toProperCase("jairesh"));

const toProperCasee = function(name){
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
}

console.log(toProperCasee("jairesh"));

const toProperCaseee = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
}

console.log(toProperCaseee("jairesh"));

let x = 2 ;

function myFunc(){
    if (false){
    var y = 7 ;
        console.log(y);
    }
    console.log(x);

}

myFunc()
console.log(x);

let l = 10;

function saa(){
  console.log('check :',l);

  }
saa()


// Rock,paper and scissor game

callMe()

function callMe(){
    let confirmation = confirm("Are you ready to play ?")
    console.log(confirmation,'confirmation');

if(confirmation){
    let playerChoice = prompt("Please type stone,paper or scissor")?.toLowerCase()
    if(playerChoice === "stone"){
        console.log("stone");
    }
    else if (playerChoice === "paper"){
        console.log("paper");
    }
    else if (playerChoice === "scissor"){
        console.log("scissor");
    }
    else{
        console.log("Plz try other");
    }

    if(playerChoice === "stone" || playerChoice === "paper" || playerChoice ===  "scissor"){
        let computerChoice = Math.floor(Math.random() * (max - min + 1 )) + min
        console.log(computerChoice);

        if(computerChoice === 1){
            computerChoice = 'stone'
        }
        else if (computerChoice === 2){
            computerChoice = 'paper'
        }
        else if (computerChoice === 3){
            computerChoice = 'scissor'
        }
        console.log(computerChoice);

        let result =
        playerChoice === computerChoice ? "Tie game" :
        playerChoice === "paper" && computerChoice === "stone" ? `${computerChoice} , You won !!!` :
        playerChoice === "paper" && computerChoice === "scissor" ? `${computerChoice} , Sorry ,Opponent won !!` :
        playerChoice === "scissor" && computerChoice === "paper" ? `${computerChoice} , You won !!!` :
        playerChoice === "scissor" && computerChoice === "stone" ? `${computerChoice} , Sorry ,Opponent won !!` :
        playerChoice === "stone"  && computerChoice === "scissor" ? `${computerChoice} , You won !!! ` :
        playerChoice === "stone"  && computerChoice === "paper" ? `${computerChoice} , Sorry ,Opponent won !!` : "Invalid Input"
        alert(result)
        callMe()
        }
    }
    else{
        alert("Please enter either stone,paper or scissor only")
        callMe()
    }

}

// Higher Order Function

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

// Factorial (Recursive Function)

function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(6));

// Generator Function

function* counts() {
  let i = 1;
  while (true) {
    yield i++;
  }
}

const counter = counts();
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);

// Currying function

function summ(a) {
  return function (b) {
    return function (c) {
      // return a+b;
      return a + b + c;
    };
  };
}

const summy = (a) => (b) => (c) => a + b + c;
console.log(summy(2)(3)(7));

console.log(summ(2)(3)(7)); // 12

// Functions

// Arrow Function

const arrowfunct = (a, b) => a + b;
console.log(arrowfunct(7, 3));

const arrowwithreturn = (a, b) => {
  return a * b;
};
console.log(arrowwithreturn(5, 6));

const arrrt = (a, b) => a + b;
console.log(arrrt(5, 9));

const ar = (a, b) => {
  return a * b;
};

console.log(ar(4, 7));


// Named Function

function Jai(name) {
  // return `My name is ${name}`;
  return console.log(`My name is ${name}`);
}

Jai("Jairesh");

// Annonyms
(function () {
  console.log("lalialala");
})();

// setTimeout(function(){
//   console.log("Print After 2 Seconds")
// }), 2000;

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

// setTimeout(function(){
//   console.log('Itz Jai Timeout');
// }),2000 ;

const typedfunc = function (a, b) {
  return a - b;
};

console.log(typedfunc(10, 2));

function fact(n) {
  if (n == 1) return 1;
  return n * fact(n - 1);
}

console.log(fact(7));

function kootu(s) {
  if (s == 1) return 1;
  return s + kootu(s - 1);
}

console.log(kootu(6));

// Fibonocci

function fibino(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fibino(n - 1) + fibino(n - 2);
}

console.log("fibino:", fibino(8));
console.log("substring", w.substring(18, 20));

function countdown(n) {
  if (n === 0) {
    console.log("Done!");
    return;
  }
  console.log(n);
  countdown(n - 1);
}

countdown(5);

// Currying Function

const cur = (a, b) => {
  return a + b;
};
console.log(cur(2, 5));

const curr = (a, b) => a + b;
console.log(curr(11, 2));

const curry = (a) => (b) => (c) => a + b + c;
const curyi = function (a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
};

console.log(curyi(18)(13)(9));
console.log(curry(8)(3)(9));


// Sum using recursive function

function sumr(n) {
  if (n == 1) return 1;
  return n + sumr(n - 1);
}

console.log(sumr(7));

// Fibonacci series using recursive functon

function fib(n){
  if(n == 0) return 0 ;
  if(n == 1 ) return 1;
  return fib(n-1) + fib(n-2);
}

console.log('fib: ',fib(6));

// 0   ==> 0 ;
// 1   ==> 1 ;
// 2   ==> 1 ;
// 3   ==> 2 ;
// 4   ==> 3 ;
// 5   ==> 5 ;
// 6   ==> 8 ;

// Reverse a strring using recursion

// const str = "hello" ;

// const st = str.split(",");
// const s = st.reverse();
// const sr = s.join();


// console.log(str[0]); 
// console.log(str.substring(1)); 
// console.log(str.substring(1) + str[0] );



// return str = str.substring(1) + str[0]
// str = h+e+l+l+o;

function reverseString(str) {
  console.log("Input:", str);

  if (str === "") {
    console.log("Base case reached, returning empty string");
    return "";
  }

  const withoutFirst = str.substr(1);   // remove first char
  const firstChar = str[0];             // save first char

  console.log(`Peeling off '${firstChar}', remaining: "${withoutFirst}"`);

  const reversedRest = reverseString(withoutFirst);

  const result = reversedRest + firstChar;
  console.log(`Adding back '${reversedRest}'->'${firstChar}' → "${result}"`);

  return result;
}

console.log("Final result:", reverseString("hello"));

function reverseString(str) 
{
 if (str === "") return "";
 return reverseString(str.substr(1)) + str[0]; 
} 
console.log(reverseString("hello"));