// // Prob 1 : 
// var x;
// console.log(x); // undefined

// // Prob 2 : 
// let y = 2;
// var z = ++y + ++y + --y;

// console.log(y); // 3
// console.log(z); // 10

// // Prob 3 : 
// let [a, b, c] = "Hello";
// console.log(a); // H

// // Prob 4 : 
// let d,e,f = [1, 2, 3];
// console.log(d); // undefined

// // Prob 5 : 
// let j = "acd";
// console.log(j > ["bbc"]);

// // Prob 6 :
// let k = "21";
// console.log(k > "3");

// // Prob 7 : 
// let s = [{ name: { class: { city: ["Chennai", "Banglore"] } } }];
// console.log(s[0].name.class.city[1]);

// // Prob 8 : 
// let l = {};
// Object.freeze(l);
// l["a"] = 1;
// console.log(l);

// // Prob 9 : 
// let qw = [2, 1] ;
// [qw[0], qw[1]] = [qw[1], qw[0]];
// console.log(qw,'qwwwwwww');

// Prob 10 : 
// let qz = [2, 1]                             //  Without this semicolon(;), the below line gets attached to this line , so it
// [qz[0], qz[1]] = [qz[1], qz[0]];          //  shows "not initialized yet" error , be concious while using without semicolon      
// console.log(qz,'qzzzz');

// Prob 11 : 
// let firstName, lastName, price, discount, totalPrice;

// firstName = "Ajay";
// lastName = "Kumar";
// price = 200;
// discount = 0.25 * price;
// totalPrice = price - discount;
// console.log(totalPrice);

// Prob 12 : 
// for (let i = 1; i <= 10; i++) {
//   let row = "10*" + i + "=" + 10 * i;
//   console.log(row);
// }

// Prob 13 : 
// function isInRange(num, min, max) {
//   return num >= min && num <= max;
// }

// console.log(isInRange(8.9, 7, 9));

// Prob 14 : 
// function isVowel(char) {
//   if (
//     char.includes("a") ||
//     char.includes("e") ||
//     char.includes("i") ||
//     char.includes("o") ||
//     char.includes("u")
//   ) {
//     return console.log("Given char contains vowel character");
//   }
//   return console.log("Given char doesnot contains a vowel");
// }

// isVowel("hello");

// Prob 15 : 
// for (let i = 0; i < 10; i += 2) {
//   console.log(i);
// }

// Prob 16 : 
// Reverse a number

// let unreversed = 9870;
// let revs = "";

// while (unreversed > 0) {
//   let rev = unreversed % 10;
//   revs += rev;
//   unreversed = Math.floor(unreversed / 10);
// }
// console.log("Reversed :" ,revs);


// Prob 17 : 
// // Reverse and print one by one

// let d = 123;

// do {
//   let r = d % 10;
//   console.log(r);
//   d = Math.floor(d / 10);
// } while (d > 0);

// console.log("starts");


// Prob 18 : 
// Sum of a number

// let summingnum = 9876;
// let summednum = 0;

// do {
//   let sum = summingnum % 10;
//   summednum += sum;
//   summingnum = Math.floor(summingnum / 10);
// } while (summingnum > 0);

// console.log("Sum :" ,summednum);

// Prob 19 : 
// Palindrome or Not

// let num = 121;
// const comparingnum = num;
// let revnum = "";

// while (num > 0) {
//   let lastnum = num % 10;
//   num = Math.floor(num / 10);
//   revnum += lastnum;
// }

// if (comparingnum.toString() === revnum) {
//   console.log(`The gn num ${comparingnum} is a palindrome`);
// } else {
//   console.log(`The gn num ${comparingnum} is not a palindrome`);
// }


// Prob 20 : 
// // Factorial

// let number = 7;
// let fin = 1;

// do {
//   fin *= number;
//   number--;
// } while (number > 0);

// console.log(fin);


// Prob 21 : 
// // Power

// let a = 1;
// let last = 1000;
// while (last > a) {
//   let b = Math.pow(a, 2);
//   a += a;
//   console.log(a);
// }


// Prob 22 : 
// //Sum of N Numbers

// let N = 5;
// let res = 0;
// for (let i = 0; i <= N; i++) {
//   res += i;
// }

// console.log(res);


// Prob 23 : 
// // Factotial

// let GnNum = 5;
// let fac = 1;

// for (let i = 1; i <= GnNum; i++) {
//   fac *= i;
// }
// console.log(fac);


// Prob 24 : 
// Even

// let evn = 17;

// for (let i = 1; i <= evn; i++) {
//   if (i % 2 == 0) {
//     // console.log(i);
//     process.stdout.write(i + "," + " "); // To print in the same line
//   }
// }


// Prob 25 : 
// If the number in between the intervals is 
// Divisible by 3 alone ==> "Fizz" ,
// Divisible by 5 alone ==> "Buzz" ,
// Combined divisible by 3 and 5 ==> "FizzBuzz" ,
// Other than these ==> That number

// let lower = 1;
// let upper = 50;

// for (let i = lower; i <= upper; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     process.stdout.write("FizzBuzz" + " ");
//   } else if (i % 3 == 0) {
//     process.stdout.write("Fizz" + " ");
//   } else if (i % 5 == 0) {
//     process.stdout.write("Buzz" + " ");
//   } else {
//     process.stdout.write(i + " ");
//   }
// }

// Prob 26 :
// Function - Based :

// function palindrome(given_value) {
//   let converted_pal = given_value.toLowerCase();
//   let rev_given_value = converted_pal.split("").reverse().join("");
//   if (rev_given_value === converted_pal) {
//     console.log(`The given word : ${given_value} is a palindrome `);
//   } else {
//     console.log(`The given word : ${given_value} is not a palindrome `);
//   }
// }

// const given_value = "Madam";
// palindrome(given_value);