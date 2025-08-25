// console.log("Itz Revision")

// let slice = 'Jairesh'
// console.log(slice.slice(3,5))

// const myStringNumber = '77'
// const myString = 'Seventy Seven'
// const myNumber = 77
// const myFloat = 77.17

// console.log(typeof(myStringNumber));
// console.log(typeof(myString));
// console.log(typeof(myNumber));
// console.log(typeof(myFloat));

// console.log(!isNaN(Number(myStringNumber)));

// // console.log(myNumber);

// const sampleArray = [33,88,11,99]

// console.log(Math.min(...sampleArray));
// console.log(Math.max(...sampleArray));

// console.log(slice.charAt(Math.floor(Math.random() * slice.length)));

// console.log(slice.length);

// for(i=0;i<= slice.length;i++){
//     console.log(slice.charAt(i));
// }

// let b = 0 ;

// while (b<=6){
//     if(b===3){
//         break ;
//     }
//  b = b+1 ;
// }

// console.log(b,'break');

// for (c = 1; c<6 ; c ++){
//     if(c==3){
//         continue ;
//     }
//     console.log(c);

// }

// let cnt = 0;

// while (cnt < 6) {
//     cnt = cnt + 1;
//     if (cnt === 3) {
//         continue;
//     }
//     console.log(cnt, 'continue');
// }

// console.log("11" + 1);   // 111
// console.log("11" - 1);   // 10
// console.log("11" * 1);   // 11

// function multiplication(a,b){
//     return a*b
// }

// console.log(multiplication(6,5));

// function getUserFromMail(email){
//     return email.slice(0,email.indexOf("@"))
// }

// console.log(getUserFromMail("jairesh@gmail.com"));

// function toProperCase(name){
//     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
// }

// console.log(toProperCase("jairesh"));

// Find the repeated character in an string

const char = "malayalam";

let arr = [];

for (i = 0; i < char.length; i++) {
  let count = 0;
  for (j = 0; j < char.length; j++) {
    if (char[i] == char[j] && i !== j) {
      count++;
    }
  }

  let repeated = false;

  for (k = 0; k < arr.length; k++) {
    if (arr[k] == char[i]) {
      repeated = true;
    }
  }
  if (count > 0 && repeated == false) {
    arr.push(char[i]);
  }
}

console.log(
  "The repeated characters are : " +
    arr.slice(0, -1) +
    " " +
    "and" +
    " " +
    arr[arr.length - 1]
);
console.log();

// TYPES OF FUNCTIONS

// 1) Arrow Function

const arrw = (a, b) => a + b;

const arrwfun = (a, b) => {
  return a + b;
};

console.log(arrw(5, 7));

// 2.Named Function

function named(w, r) {
  return w * r;
}
console.log(named(45, 65));

// 3.Higher Order Function (HOF)
function wax(r, y, operation) {
  return operation(r, y);
}

function add(a, b) {
  return a + b;
}
function mul(a, b) {
  return a * b;
}

console.log(wax(56, 54, add));
console.log(wax(36, 14, mul));

// 4.Callback Function
function HOF(oper) {
  console.log("Came");
  oper();
}

function Callback(oper) {
  console.log("Itz HOF");
  // return a+b ;
  oper();
}

function Wallback() {
  console.log("Itz Wallback");
  // return a+b ;
}

HOF(function () {
  Callback(Wallback);
});

// 5.Function Expression

const multi = function (t, u) {
  return t + u;
};
console.log(multi(5, 65));

// 6.Anonymous Function

setTimeout(function () {
  console.log("Anonymous");
}, 2000);

// 7.Immediate Invoked Function Expression [IIFE]

(function () {
  console.log("IIFE");
})();

// 8.Recursion Function

function addme(num) {
  if (num === 0) return 0;
  return num + addme(num - 1);
}

console.log("recur", addme(6));

// 9.Generator Function
function* adadei() {
  let w = 1;
  while (true) {
    yield w++;
  }
}

const ada = adadei(); // Must use an instance of function to keep the sequence going
console.log("first", ada.next().value);
console.log("second", ada.next().value);

// 10.Currying Function
const added = (a) => (b) => a + b;

console.log(added(34)(45));

function adding(a) {
  return function (b) {
    console.log(a + b);
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(adding(19)(10)(23));

// Function Based Problems
// I.Arrow Functions
// 1. Convert to Arrow Function

// function square(num) {
//   return num * num;
// }

const square = (num) => num * num;
const squ = (num) => {
  return num * num;
};

console.log(square(6));
console.log(squ(5));

// 2.Use an arrow function with .map() to create a new array that doubles every number:
let numbers = [1, 2, 3, 4, 5];

const doubledarray = numbers.map((num) => num * 2);
console.log("2) doubledarray", doubledarray);

// 3. Filtering with Arrow Functions
// Use an arrow function with .filter() to return only the even numbers from this array:

let nums = [11, 22, 33, 44, 55];

const filterednums = nums.filter((num) => {
  return num % 2 == 0;
});

console.log("filterednums ", filterednums);

// 4. Arrow Function Inside setTimeout

// Use an arrow function in setTimeout to print "Hello World" after 2 seconds.

setTimeout(() => {
  console.log("Hello World");
}, 2000);

// 5. Arrow Function with Reduce

// Use an arrow function with .reduce() to find the sum of all numbers in the array:

let arrt = [5, 10, 15, 20];

const redu = arrt.reduce((ada, i) => {
  // ada ==> accumulator , i ==> each element
  return ada + i;
}, 7); // we can set intial value here. => so now ada = 7, i = 5(first element).

console.log("Reduce :", redu);

// II. Named Function

// 1. Function to Find Maximum
// Write a named function findMax that takes two numbers and returns the larger one.

const ar = [13, 5, 7, 1, 0, 6];

function findMax(first, second) {
  return Math.max(first, second);
}

console.log(findMax(5, 7));

// 2. Factorial Using Named Function

// Write a named function factorial that takes a number n and returns its factorial.
// Example: factorial(5) → 120

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));

// 3.Write a named function reverseString that takes a string and returns it reversed.
// Example: reverseString("hello") → "olleh"

function reverseString(str) {
  if (str === "") return "";
  return reverseString(str.substr(1)) + str[0];
}

// DSA [LIFO]

// hello
// ello + h ==> ello h
// llo + e ==> llo + eh
// lo + l ==> lo + leh
// o + l ==> o + lleh
// "" + o ==> "" + olleh;

// RS("hello")  ⇒ wait for RS("ello")  then + "h"
// RS("ello")   ⇒ wait for RS("llo")   then + "e"
// RS("llo")    ⇒ wait for RS("lo")    then + "l"
// RS("lo")     ⇒ wait for RS("o")     then + "l"
// RS("o")      ⇒ wait for RS("")      then + "o"
// RS("")       ⇒ base case returns ""

// RS("")   → ""                          (base)
// RS("o")  → ""  + "o"   = "o"
// RS("lo") → "o" + "l"   = "ol"
// RS("llo")-> "ol"+ "l"  = "oll"
// RS("ello")->"oll"+"e"  = "olle"
// RS("hello")->"olle"+"h"= "olleh"

console.log(reverseString("hello"));

// 4) Write a named function countVowels that takes a string and returns the number of vowels (a, e, i, o, u).
// Example: countVowels("javascript") → 3

function countVowels(lol) {
  const vow = lol.toLowerCase();
  var count = 0;
  for (let i = 0; i < vow.length; i++) {
    if (
      vow[i] == "a" ||
      vow[i] == "e" ||
      vow[i] == "i" ||
      vow[i] == "o" ||
      vow[i] == "u"
    ) {
      count++;
    }
  }
  return count;
}

console.log("countVowels : (traditional)", countVowels("jAvascript"));

function countVowelsRec(str) {
  if (str.length === 0) return 0;
  const firstval = str[0].toLowerCase();
  const countVow =
    firstval === "a" ||
    firstval === "e" ||
    firstval === "i" ||
    firstval === "o" ||
    firstval === "u"
      ? 1
      : 0;

  return countVow + countVowelsRec(str.slice(1));
}
console.log("countVowelsRec : (recursive)", countVowelsRec("javascript"));

// 5. Palindrome Checker
// Write a named function isPalindrome that takes a string and returns true if
// it is a palindrome (same forwards and backwards), otherwise false.

// Traditional

function isPalindrome(palin) {
  const converted = palin.toLowerCase();
  let spl = converted.split("").reverse().join("");
  if (spl === converted) return true;
  return false;
}
console.log(isPalindrome("Madam"));

function convert(pal) {
  let conv = pal.toLowerCase();
  return conv === isPalin(conv);
}

function isPalin(conv) {
  if (conv == "") return "";
  let faty = isPalin(conv.slice(1)) + conv[0];
  return faty;
}

console.log("Convert", convert("madam"));

// III. Anonymous Function , Function Expression

// 1. Function Expression for Addition
// Write an anonymous function assigned to a variable add that takes two numbers and returns their sum.

const addfunc = function (x, y) {
  return x + y;
};

console.log(addfunc(2, 3));

// 2. Anonymous Function with setInterval

// Use an anonymous function in setInterval to print "Tick" every second.

// const time = setInterval(function(){
// console.log("Tick");
// }, 1000);

// setTimeout(function(){
// clearInterval(time);
// console.log('Katham Katham');
// },5000)

// setTimeout(function(){
// console.log("Buttoski");
// }, 5000)

// 3. Square Every Element
// Use an anonymous function with .map() to return a new array of squared numbers:

const num = [2, 3, 4];

const squared = num.map(function (n) {
  return n * 2;
});

console.log(squared, "squared");

// 4. Anonymous Function with filter

// Use an anonymous function to filter out numbers greater than 50 from the array:
// [10, 55, 32, 75, 43] → [55, 75]

let numbi = [10, 55, 32, 75, 43];

const gret = numbi.filter(function (a) {
  return a > 50;
});

console.log(gret);

// 5. Anonymous Function with reduce

// Use an anonymous function to calculate the product of all elements in the array:

const befred = [2, 3, 4];

const red = befred.reduce(function (b, i) {
  return b * i;
});

console.log(red, "reduce");

// IV. Immediately Invoked Function Expression (IIFE)

// 1. Basic IIFE
// Write an IIFE that prints "Hello from IIFE" immediately after the script runs.

(function () {
  console.log("Hello from IIFE");
})();

// 2. Sum of Two Numbers (IIFE)
// Write an IIFE that takes two numbers (5, 10) and prints their sum.
// const a = 5;
// const b = 10;

(function (a, b) {
  console.log("Add IIFE", a + b);
})(5, 6, 8); // It ignores , unmatched parameters

setTimeout(
  function (a, b) {
    console.log("alt", a + b);
  },
  3000,
  7,
  8
);

// 3. Counter with Private Variable
// Use an IIFE to create a counter that maintains a private variable and exposes two functions: increment and getCount.

// Look into it (3) [Functin Expression]
// const counter = function () {
//   let count = 0; // private

//   return {
//     increment: function () {
//       count++;
//     },
//     getCount: function () {
//       return count;
//     }
//   };
// };

// // const c= counter()
// console.log(counter().increment());
// console.log(counter().getCount());

const counter = (function () {
  let count = 0; // private
  console.log("Runs");

  return {
    increment: function () {
      count++;
    },
    getCount: function () {
      return count;
    },
  };
})();

console.log(typeof counter);
counter.increment();
counter.increment();
console.log("getCount :", counter.getCount());

// 4. IIFE with Array Processing
// Write an IIFE that takes an array of numbers [1, 2, 3, 4, 5] and prints only the even numbers.

const arrv = [1, 2, 3, 4, 5];

(function () {
  arrv.forEach((elem) => {
    if (elem % 2 == 0) {
      console.log("even", elem);
    }
  });
})();

// 5. IIFE Returning a Function

// Write an IIFE that returns a function to calculate the square of a number.

const sq = 7;

(function () {
  console.log(sq * sq);
  console.log(Math.pow(sq, 2));
})();

// V. Higher-Order Function

// 1. Pass a Function as Argument

// Write a higher-order function operate that takes two numbers and a function (like add, subtract, multiply) as arguments, and applies the function to the numbers.
// Example:

// operate(5, 3, add) → 8
// operate(5, 3, multiply) → 15
function operation(a, b, operate) {
  return operate(a, b);
}

function multiply(a, b) {
  return a * b;
}

function addd(a, b) {
  return a + b;
}

console.log(operation(5, 90, addd));

// 2. Function Returning a Function

// Write a higher-order function greet that takes a greeting message (like "Hello") and
// returns a function which takes a name and prints "Hello <name>".
// Example:

// const sayHello = greet("Hello");
// sayHello("John"); // "

function greet(say, funct) {
  return funct(say);
}

function sayHello(name) {
  return `Hello ${name}`;
}

console.log(greet("John", sayHello));

// 3. Using map (HOF)
// Use map() to create a new array that contains the cube of each number in [1, 2, 3, 4].
// Expected: [1, 8, 27, 64]

let a = [1, 2, 3, 4];
const mapped = a.map(function (e) {
  return Math.pow(e, 3);
});

console.log("Mapping cube", mapped);

// 4. Using filter (HOF)

// Use filter() to return all words longer than 5 letters from ["cat", "elephant", "dog", "giraffe", "bat"].
// Expected: ["elephant", "giraffe"]

const words = ["cat", "elephant", "dog", "giraffe", "bat"];

const filteredwords = words.filter((ani) => {
  return ani.length > 5;
});

console.log("filteredwords", filteredwords);

// 5. Using reduce (HOF)

// Use reduce() to find the maximum number in [3, 7, 2, 9, 5].
// Expected: 9

let c = [3, 7, 2, 9, 5];
const maxi = c.reduce((acc, cur) => {
  if (acc > cur) {
    return acc;
  } else {
    return cur;
  }
});
console.log("Maximum", maxi);

// VI.Expression Function

// 1. Square a Number (Function Expression)

// Write a function expression assigned to square that takes a number and returns its square.
// Example:

// square(6) → 36

const sqr = function (sq) {
  return Math.pow(sq, 2);
};
console.log("square :", sqr(6));

// 2. Find Minimum of Two Numbers

// Write a function expression findMin that takes two numbers and returns the smaller one.
// Example:

// findMin(4, 9) → 4

const min = function (e, r) {
  if (e > r) return r;
  return e;
};

console.log(min(134, 90));

// 3. Check Even or Odd

// Write a function expression isEven that returns true if a number is even, otherwise false.
// Example:

// isEven(7) → false
// isEven(8) → true

const isEven = function (num) {
  if (num % 2 == 0) return true;
  return false;
};

console.log("isEven :", isEven(6));

// 4. Reverse a String

// Write a function expression reverseStr that takes a string and returns its reverse.
// Example:

// reverseStr("hello") → "olleh"

const reverse = function (rev) {
  return rev.split("").reverse().join("");
};

console.log(reverse("hello"));

// 5. Sum of Array Elements

// Write a function expression sumArray that takes an array of numbers and returns their sum.
// Example:

// sumArray([1, 2, 3, 4]) → 10

// const aryy = [1, 2, 3, 4]
// const sumArray = aryy.reduce((acc,cur)=>{
// return acc+cur
// })

// console.log("sumArray" ,sumArray);

const sumArray = function (arr) {
  return arr.reduce((acc, cur) => acc + cur);
};

console.log("sumArray", sumArray([1, 2, 3, 4]));

// VII. Currying Function

// 1. Add Three Numbers (Curried Function)

// Write a curried function add such that:

// add(2)(3)(4) → 9

const curr = function (a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
};
const curry = (a) => (b) => (c) => a + b + c;

console.log("curr", curr(2)(3)(4));
console.log("curry", curry(2)(3)(4));

// 2. Multiply Two Numbers

// Write a curried function multiply that multiplies two numbers:

// multiply(5)(10) → 50

const multip = function (a) {
  return function (b) {
    return a * b;
  };
};

const muly = (a) => (b) => a * b;
console.log("multip :", multip(5)(10));
console.log("muly :", muly(5)(10));

// 3. Personalized Greeting (Currying)

// Write a curried function greet that takes a greeting and a name separately:

// greet("Hello")("John") → "Hello John"

function greet(greetings) {
  return function (name) {
    return `${greetings} ${name}`;
  };
}

// const say = greet("Unga Vazhkai");
// console.log(say("ungal Kayil"));

console.log(greet("Unga Vazhkai")("Ungal Kayil"));

// 4. Power Function (Currying)

// Write a curried function power that first takes the base, then the exponent:

// power(2)(3) → 8
// power(5)(2) → 25

const power = (base) => (expo) => Math.pow(base, expo);
// const power = (base) => (expo) => base ** expo ; // Alternative [modern JS]

console.log("power :", power(2)(3));


// 5. Filter by Minimum Length (Curried HOF)

// Write a curried function filterByLength that takes a minimum length and
//  returns a function which filters words longer than that length.
// Example:

// const filterLongWords = filterByLength(4);
// console.log(filterLongWords(["cat", "tiger", "lion", "elephant"]));
// // ["tiger", "elephant"]

function filterLength(ln) {
  console.log(ln,'length');
  
  return function (arry) {
    console.log("arr",arry);
    
    return arry.filter((fil) => {
      return fil.length > ln;
    });
  };
}

console.log("filterLength : " ,filterLength(4)(["cat", "tiger", "lion", "elephant"]));
