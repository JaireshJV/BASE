

// // Function Based Problems
// // I.Arrow Functions
// // 1. Convert to Arrow Function

// // function square(num) {
// //   return num * num;
// // }

// const square = (num) => num * num;
// const squ = (num) => {
//   return num * num;
// };

// console.log(square(6));
// console.log(squ(5));

// // 2.Use an arrow function with .map() to create a new array that doubles every number:
// let numbers = [1, 2, 3, 4, 5];

// const doubledarray = numbers.map((num) => num * 2);
// console.log("2) doubledarray", doubledarray);

// // 3. Filtering with Arrow Functions
// // Use an arrow function with .filter() to return only the even numbers from this array:

// let nums = [11, 22, 33, 44, 55];

// const filterednums = nums.filter((num) => {
//   return num % 2 == 0;
// });

// console.log("filterednums ", filterednums);

// // 4. Arrow Function Inside setTimeout

// // Use an arrow function in setTimeout to print "Hello World" after 2 seconds.

// setTimeout(() => {
//   console.log("Hello World");
// }, 2000);

// // 5. Arrow Function with Reduce

// // Use an arrow function with .reduce() to find the sum of all numbers in the array:

// let arrt = [5, 10, 15, 20];

// const redu = arrt.reduce((ada, i) => {
//   // ada ==> accumulator , i ==> each element
//   return ada + i;
// }, 7); // we can set intial value here. => so now ada = 7, i = 5(first element).

// console.log("Reduce :", redu);

// // II. Named Function

// // 1. Function to Find Maximum
// // Write a named function findMax that takes two numbers and returns the larger one.

// const ar = [13, 5, 7, 1, 0, 6];

// function findMax(first, second) {
//   return Math.max(first, second);
// }

// console.log(findMax(5, 7));

// // 2. Factorial Using Named Function

// // Write a named function factorial that takes a number n and returns its factorial.
// // Example: factorial(5) → 120

// function factorial(n) {
//   if (n === 1) return 1;
//   return n * factorial(n - 1);
// }

// console.log(factorial(5));

// // 3.Write a named function reverseString that takes a string and returns it reversed.
// // Example: reverseString("hello") → "olleh"

// function reverseString(str) {
//   if (str === "") return "";
//   return reverseString(str.substr(1)) + str[0];
// }

// // DSA [LIFO]

// // hello
// // ello + h ==> ello h
// // llo + e ==> llo + eh
// // lo + l ==> lo + leh
// // o + l ==> o + lleh
// // "" + o ==> "" + olleh;

// // RS("hello")  ⇒ wait for RS("ello")  then + "h"
// // RS("ello")   ⇒ wait for RS("llo")   then + "e"
// // RS("llo")    ⇒ wait for RS("lo")    then + "l"
// // RS("lo")     ⇒ wait for RS("o")     then + "l"
// // RS("o")      ⇒ wait for RS("")      then + "o"
// // RS("")       ⇒ base case returns ""

// // RS("")   → ""                          (base)
// // RS("o")  → ""  + "o"   = "o"
// // RS("lo") → "o" + "l"   = "ol"
// // RS("llo")-> "ol"+ "l"  = "oll"
// // RS("ello")->"oll"+"e"  = "olle"
// // RS("hello")->"olle"+"h"= "olleh"

// console.log(reverseString("hello"));

// // 4) Write a named function countVowels that takes a string and returns the number of vowels (a, e, i, o, u).
// // Example: countVowels("javascript") → 3

// function countVowels(lol) {
//   const vow = lol.toLowerCase();
//   var count = 0;
//   for (let i = 0; i < vow.length; i++) {
//     if (
//       vow[i] == "a" ||
//       vow[i] == "e" ||
//       vow[i] == "i" ||
//       vow[i] == "o" ||
//       vow[i] == "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log("countVowels : (traditional)", countVowels("jAvascript"));

// function countVowelsRec(str) {
//   if (str.length === 0) return 0;
//   const firstval = str[0].toLowerCase();
//   const countVow =
//     firstval === "a" ||
//     firstval === "e" ||
//     firstval === "i" ||
//     firstval === "o" ||
//     firstval === "u"
//       ? 1
//       : 0;

//   return countVow + countVowelsRec(str.slice(1));
// }
// console.log("countVowelsRec : (recursive)", countVowelsRec("javascript"));

// // 5. Palindrome Checker
// // Write a named function isPalindrome that takes a string and returns true if
// // it is a palindrome (same forwards and backwards), otherwise false.

// // Traditional

// function isPalindrome(palin) {
//   const converted = palin.toLowerCase();
//   let spl = converted.split("").reverse().join("");
//   if (spl === converted) return true;
//   return false;
// }
// console.log(isPalindrome("Madam"));

// function convert(pal) {
//   let conv = pal.toLowerCase();
//   return conv === isPalin(conv);
// }

// function isPalin(conv) {
//   if (conv == "") return "";
//   let faty = isPalin(conv.slice(1)) + conv[0];
//   return faty;
// }

// console.log("Convert", convert("madam"));

// // III. Anonymous Function , Function Expression

// // 1. Function Expression for Addition
// // Write an anonymous function assigned to a variable add that takes two numbers and returns their sum.

// const addfunc = function (x, y) {
//   return x + y;
// };

// console.log(addfunc(2, 3));

// // 2. Anonymous Function with setInterval

// // Use an anonymous function in setInterval to print "Tick" every second.

// // const time = setInterval(function(){
// // console.log("Tick");
// // }, 1000);

// // setTimeout(function(){
// // clearInterval(time);
// // console.log('Katham Katham');
// // },5000)

// // setTimeout(function(){
// // console.log("Buttoski");
// // }, 5000)

// // 3. Square Every Element
// // Use an anonymous function with .map() to return a new array of squared numbers:

// const num = [2, 3, 4];

// const squared = num.map(function (n) {
//   return n * 2;
// });

// console.log(squared, "squared");

// // 4. Anonymous Function with filter

// // Use an anonymous function to filter out numbers greater than 50 from the array:
// // [10, 55, 32, 75, 43] → [55, 75]

// let numbi = [10, 55, 32, 75, 43];

// const gret = numbi.filter(function (a) {
//   return a > 50;
// });

// console.log(gret);

// // 5. Anonymous Function with reduce

// // Use an anonymous function to calculate the product of all elements in the array:

// const befred = [2, 3, 4];

// const red = befred.reduce(function (b, i) {
//   return b * i;
// });

// console.log(red, "reduce");

// // IV. Immediately Invoked Function Expression (IIFE)

// // 1. Basic IIFE
// // Write an IIFE that prints "Hello from IIFE" immediately after the script runs.

// (function () {
//   console.log("Hello from IIFE");
// })();

// // 2. Sum of Two Numbers (IIFE)
// // Write an IIFE that takes two numbers (5, 10) and prints their sum.
// // const a = 5;
// // const b = 10;

// (function (a, b) {
//   console.log("Add IIFE", a + b);
// })(5, 6, 8); // It ignores , unmatched parameters

// setTimeout(
//   function (a, b) {
//     console.log("alt", a + b);
//   },
//   3000,
//   7,
//   8
// );

// // 3. Counter with Private Variable
// // Use an IIFE to create a counter that maintains a private variable and exposes two functions: increment and getCount.

// // Look into it (3) [Functin Expression]
// // const counter = function () {
// //   let count = 0; // private

// //   return {
// //     increment: function () {
// //       count++;
// //     },
// //     getCount: function () {
// //       return count;
// //     }
// //   };
// // };

// // // const c= counter()
// // console.log(counter().increment());
// // console.log(counter().getCount());

// const counter = (function () {
//   let count = 0; // private
//   console.log("Runs");

//   return {
//     increment: function () {
//       count++;
//     },
//     getCount: function () {
//       return count;
//     },
//   };
// })();

// console.log(typeof counter);
// counter.increment();
// counter.increment();
// console.log("getCount :", counter.getCount());

// // 4. IIFE with Array Processing
// // Write an IIFE that takes an array of numbers [1, 2, 3, 4, 5] and prints only the even numbers.

// const arrv = [1, 2, 3, 4, 5];

// (function () {
//   arrv.forEach((elem) => {
//     if (elem % 2 == 0) {
//       console.log("even", elem);
//     }
//   });
// })();

// // 5. IIFE Returning a Function

// // Write an IIFE that returns a function to calculate the square of a number.

// const sq = 7;

// (function () {
//   console.log(sq * sq);
//   console.log(Math.pow(sq, 2));
// })();

// // V. Higher-Order Function

// // 1. Pass a Function as Argument

// // Write a higher-order function operate that takes two numbers and a function (like add, subtract, multiply) as arguments, and applies the function to the numbers.
// // Example:

// // operate(5, 3, add) → 8
// // operate(5, 3, multiply) → 15
// function operation(a, b, operate) {
//   return operate(a, b);
// }

// function multiply(a, b) {
//   return a * b;
// }

// function addd(a, b) {
//   return a + b;
// }

// console.log(operation(5, 90, addd));

// // 2. Function Returning a Function

// // Write a higher-order function greet that takes a greeting message (like "Hello") and
// // returns a function which takes a name and prints "Hello <name>".
// // Example:

// // const sayHello = greet("Hello");
// // sayHello("John"); // "

// function greet(say, funct) {
//   return funct(say);
// }

// function sayHello(name) {
//   return `Hello ${name}`;
// }

// console.log(greet("John", sayHello));

// // 3. Using map (HOF)
// // Use map() to create a new array that contains the cube of each number in [1, 2, 3, 4].
// // Expected: [1, 8, 27, 64]

// let a = [1, 2, 3, 4];
// const mapped = a.map(function (e) {
//   return Math.pow(e, 3);
// });

// console.log("Mapping cube", mapped);

// // 4. Using filter (HOF)

// // Use filter() to return all words longer than 5 letters from ["cat", "elephant", "dog", "giraffe", "bat"].
// // Expected: ["elephant", "giraffe"]

// const words = ["cat", "elephant", "dog", "giraffe", "bat"];

// const filteredwords = words.filter((ani) => {
//   return ani.length > 5;
// });

// console.log("filteredwords", filteredwords);

// // 5. Using reduce (HOF)

// // Use reduce() to find the maximum number in [3, 7, 2, 9, 5].
// // Expected: 9

// let c = [3, 7, 2, 9, 5];
// const maxi = c.reduce((acc, cur) => {
//   if (acc > cur) {
//     return acc;
//   } else {
//     return cur;
//   }
// });
// console.log("Maximum", maxi);

// // VI.Expression Function

// // 1. Square a Number (Function Expression)

// // Write a function expression assigned to square that takes a number and returns its square.
// // Example:

// // square(6) → 36

// const sqr = function (sq) {
//   return Math.pow(sq, 2);
// };
// console.log("square :", sqr(6));

// // 2. Find Minimum of Two Numbers

// // Write a function expression findMin that takes two numbers and returns the smaller one.
// // Example:

// // findMin(4, 9) → 4

// const min = function (e, r) {
//   if (e > r) return r;
//   return e;
// };

// console.log(min(134, 90));

// // 3. Check Even or Odd

// // Write a function expression isEven that returns true if a number is even, otherwise false.
// // Example:

// // isEven(7) → false
// // isEven(8) → true

// const isEven = function (num) {
//   if (num % 2 == 0) return true;
//   return false;
// };

// console.log("isEven :", isEven(6));

// // 4. Reverse a String

// // Write a function expression reverseStr that takes a string and returns its reverse.
// // Example:

// // reverseStr("hello") → "olleh"

// const reverse = function (rev) {
//   return rev.split("").reverse().join("");
// };

// console.log(reverse("hello"));

// // 5. Sum of Array Elements

// // Write a function expression sumArray that takes an array of numbers and returns their sum.
// // Example:

// // sumArray([1, 2, 3, 4]) → 10

// // const aryy = [1, 2, 3, 4]
// // const sumArray = aryy.reduce((acc,cur)=>{
// // return acc+cur
// // })

// // console.log("sumArray" ,sumArray);

// const sumArray = function (arr) {
//   return arr.reduce((acc, cur) => acc + cur);
// };

// console.log("sumArray", sumArray([1, 2, 3, 4]));

// // VII. Currying Function

// // 1. Add Three Numbers (Curried Function)

// // Write a curried function add such that:

// // add(2)(3)(4) → 9

// const curr = function (a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// };
// const curry = (a) => (b) => (c) => a + b + c;

// console.log("curr", curr(2)(3)(4));
// console.log("curry", curry(2)(3)(4));

// // 2. Multiply Two Numbers

// // Write a curried function multiply that multiplies two numbers:

// // multiply(5)(10) → 50

// const multip = function (a) {
//   return function (b) {
//     return a * b;
//   };
// };

// const muly = (a) => (b) => a * b;
// console.log("multip :", multip(5)(10));
// console.log("muly :", muly(5)(10));

// // 3. Personalized Greeting (Currying)

// // Write a curried function greet that takes a greeting and a name separately:

// // greet("Hello")("John") → "Hello John"

// function greet(greetings) {
//   return function (name) {
//     return `${greetings} ${name}`;
//   };
// }

// // const say = greet("Unga Vazhkai");
// // console.log(say("ungal Kayil"));

// console.log(greet("Unga Vazhkai")("Ungal Kayil"));

// // 4. Power Function (Currying)

// // Write a curried function power that first takes the base, then the exponent:

// // power(2)(3) → 8
// // power(5)(2) → 25

// const power = (base) => (expo) => Math.pow(base, expo);
// // const power = (base) => (expo) => base ** expo ; // Alternative [modern JS]

// console.log("power :", power(2)(3));

// // 5. Filter by Minimum Length (Curried HOF)

// // Write a curried function filterByLength that takes a minimum length and
// //  returns a function which filters words longer than that length.
// // Example:

// // const filterLongWords = filterByLength(4);
// // console.log(filterLongWords(["cat", "tiger", "lion", "elephant"]));
// // // ["tiger", "elephant"]

// function filterLength(ln) {
//   console.log(ln, "length");

//   return function (arry) {
//     console.log("arr", arry);

//     return arry.filter((fil) => {
//       return fil.length > ln;
//     });
//   };
// }

// console.log(
//   "filterLength : ",
//   filterLength(4)(["cat", "tiger", "lion", "elephant"])
// );

// function condit(a, b, operate) {
//   return operate(a, b);
// }

// function multii(a, b) {
//   return a * b;
// }
// console.log(condit(45, 67, multii));

// let arryv = [34, 56, 67, 23];
// const serv = arryv.filter(function (e) {
//   return e % 2 == 0;
// });

// console.log(serv);

// function Greet(greet) {
//   return function (name) {
//     return `${greet} ${name}`;
//   };
// }

// const said = Greet("Hlo");
// console.log(said("Jai"));

// setTimeout(
//   function (a, b) {
//     console.log("iife", a + b);
//     // return a + b ;
//   },
//   2000,
//   6,
//   7
// );

// // VIII.Callback Function

// // Example :
// // function greetUser(name){
// //   console.log("Nan thanda");
// //   return name();
// // }

// // function Great(vet){
// //   console.log("Gayyyyuuuu");
// //   return vet();
// // }

// // function Work(){
// //   console.log("Workda ");
// // }

// // console.log(greetUser (function (){
// //    Great(Work)
// // }));

// // 1. Greeting with Callback

// // Write a function greetUser that takes a name and a callback function.
// // The callback should decide how the greeting message is displayed.
// // Example:

// // greetUser("Alice", (name) => console.log("Hello " + name));
// // // Output: Hello Alice

// function greetUser(cal) {
//   return cal();
// }

// function callBack(name) {
//   console.log("callBack 1)", `Hello ${name}`);
// }

// console.log(
//   greetUser(function () {
//     callBack("Alice");
//   })
// );

// // 2. Calculator with Callback

// // Create a function calculator(a, b, operation) that performs a calculation.
// // The operation argument should be a callback (like add, subtract, multiply).
// // Example:

// // calculator(10, 5, (x, y) => x + y); // 15
// // calculator(10, 5, (x, y) => x * y); // 50

// function calculator(a, b, operation) {
//   return operation(a, b);
// }

// function adid(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// console.log(calculator(45, 23, adid));
// console.log(calculator(45, 23, subtract));

// // 3. Array Processing (Callback)

// // Write a function processArray(arr, callback) that applies the callback to each element of the array.
// // Example:

// // processArray([1, 2, 3], (x) => x * 2);
// // // Output: [2, 4, 6]

// function processArr(arr, operat) {
//   return arr.map(operat);
// }

// function callb(e) {
//   return e * 2;
// }

// const arrty = [1, 2, 3];
// console.log("process Array", processArr(arrty, callb));

// function processArray(arr, call) {
//   return arr.map(call);
// }

// function callBackk(e) {
//   return e * 2;
// }

// const sampleArray = [1, 2, 3];
// const result = processArray(sampleArray, (x) => x * 2);
// console.log("call back 3) ", result);

// // 4. Delayed Execution

// // Use setTimeout with a callback to print "Task finished" after 2 seconds.
// // Example:

// // delayedTask(() => console.log("Task finished"));

// function setTime(par) {
//   setTimeout(par, 2000);
// }

// setTime(() => console.log("Task Finished Man"));

// // function delayedTask(callback) {
// //   setTimeout(callback, 2000);
// // }

// // delayedTask(() => console.log("Task Finished"));

// // 5. Filter with Callback

// // Write a function customFilter(arr, callback) that filters elements of an array based on the callback’s condition.
// // Example:

// // customFilter([1, 2, 3, 4, 5], (x) => x % 2 === 0);
// // // Output: [2, 4]

// function fillt(arr, custom) {
//   return arr.filter(custom);
// }

// function custome(e) {
//   return e % 2 == 0;
// }

// const arryi = [1, 2, 3, 4, 5];

// console.log("Filtered Arryi ", fillt(arryi, custome));

// // IX. Generator Function

// // 1. Fibonacci Sequence Generator

// // Write a generator function that yields numbers in the Fibonacci sequence.

// // function* fibonacci(limit) {
// //   // your code here
// // }

// // const fib = fibonacci(10);
// // console.log([...fib]);
// // // Expected: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// function* fibonacci(limit) {
//   let a = 0,
//     b = 1;
//   for (let i = 0; i < limit; i++) {
//     yield a;
//     [a, b] = [b, a + b]; // swap and update
//   }
// }

// const fib = fibonacci(10);
// console.log([...fib]);
// // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// // 2. Infinite ID Generator

// // Write a generator that produces an infinite sequence of unique IDs starting from 1.

// // function* idGenerator() {
// //   // your code here
// // }

// // const ids = idGenerator();
// // console.log(ids.next().value); // 1
// // console.log(ids.next().value); // 2
// // console.log(ids.next().value); // 3

// function* idGenerator() {
//   let i = 1;
//   while (true) {
//     yield i++;
//   }
// }

// const ids = idGenerator();
// console.log(ids.next().value);
// console.log(ids.next().value);
// console.log(ids.next().value);

// // 3. Iterate over an Array with a Generator

// // Create a generator that yields each element of an array one by one.

// // function* arrayIterator(arr) {
// //   // your code here
// // }

// // const it = arrayIterator(["apple", "banana", "cherry"]);
// // console.log(it.next().value); // "apple"
// // console.log(it.next().value); // "banana"
// // console.log(it.next().value); // "cherry"

// function* arrayIterator(arr) {
//   for (let item of arr) {
//     yield item;
//   }
// }

// const it = arrayIterator(["apple", "banana", "cherry"]);
// console.log(it.next().value); // "apple"
// console.log(it.next().value); // "banana"
// console.log(it.next().value); // "cherry"

// // 4. Range Generator

// // Implement a generator that mimics Python’s range(start, end, step) function.

// // function* range(start, end, step = 1) {
// //   // your code here
// // }

// // for (let num of range(2, 10, 2)) {
// //   console.log(num);
// // }
// // // Expected: 2, 4, 6, 8

// function* range(start, end, step = 1) {
//   for (let i = start; i < end; i += step) {
//     yield i;
//   }
// }

// for (let num of range(2, 10, 2)) {
//   console.log(num);
// }
// // 2, 4, 6, 8

// // 5. Controlling Flow with Generator

// // Use a generator to pause and resume execution.

// function* taskManager() {
//   console.log("Task 1 started");
//   yield;
//   console.log("Task 2 started");
//   yield;
//   console.log("Task 3 started");
// }

// const tasks = taskManager();
// tasks.next(); // "Task 1 started"
// tasks.next(); // "Task 2 started"
// tasks.next(); // "Task 3 started"






// Difference between two dates in days ;

// function differenceInDates(date1,date2) {
//   const getTime1 = new Date(date1).getTime();
//   const getTime2 = new Date(date2).getTime();

//   const diff = (getTime2 - getTime1) / (1000 * 3600 * 24) ;
//   return diff ;
// }

// console.log(differenceInDates("2025-08-08","2025-09-08"));


// function daydiff(stdate,eddate){
// const start = new Date(stdate).getTime();
// console.log(start,'start');
// }

// daydiff("2025.09.04") ;

