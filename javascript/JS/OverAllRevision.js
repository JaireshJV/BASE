const Vehicles = [
  "Car",
  "Auto",
  "Bike",
  "Bus",
  "Car",
  "Auto",
  "Bike",
  "Lorry",
  "Truck",
];

// (1) REMOVING THE DUPLICATES FROM AN ARRAY :

// (i) Remove Duplicate 1 [Using Set Constructor]
// console.log([...new Set(Vehicles)], "set_constructor");

// (ii) Remove Duplicate 2 [Using Filter]
// In this example, `filter` receives two parameters:
// 1) value  → the current element
// 2) index  → the current element’s index
//
// `indexOf()` always returns the index of the first occurrence of a value.
//
// The condition checks whether the current index matches the first
// occurrence index of that value. If they are equal, the element is kept.
//
// During iteration, the first occurrence passes the condition and is stored.
// Any duplicate occurrences fail the condition because their index differs
// from the first occurrence index returned by `indexOf()`.

// const unique_filter = Vehicles.filter((elem, ind) => {
//   console.log(Vehicles.indexOf(elem))
//   if (Vehicles.indexOf(elem) == ind) {
//     return elem ;
//   }
// });

// console.log(unique_filter,'unique_filter')

// // (2) COUNTING THE ELEMENTS IN AN ARRAY :

// // (i)Count the element 1

// ?? is called the Nullish Coalescing Operator.
// It returns the right-hand value only when the left-hand value is null or undefined.

// const unique_array = {};
// for (let i = 0; i < Vehicles.length; i++) {
//   const item = Vehicles[i];
//   unique_array[item] = (unique_array[item] || 0) + 1;
// }
// console.log(unique_array,'unique_array_count')

// // (ii)Count the element 2

// const unique = {};
// for (let i of Vehicles) {
//   unique[i] = (unique[i] ?? 0) + 1;
// }

// console.log(unique,'unique_count') ;

// // (3) REVERSE A NUMBER :

// let number = 537;

// let reverse = 0;

// while (number > 0) {
//   let remainder = number % 10;
//   reverse = reverse * 10 + remainder;
//   number = Math.trunc(number / 10);
// }

// // console.log(reverse,'reverse_a_number');

// // (4) GIVEN NUMBER PALINDROME OR NOT :

// let gnnum = 737;

// let num = gnnum;

// let rev = 0;
// let rem;

// while (num > 0) {
//   rem = num % 10;
//   rev = rev * 10 + rem;
//   num = Math.trunc(num / 10);
// }

// if (rev == gnnum) {
//   // console.log('The given number is a palindrome');
// } else {
//   // console.log('The given number is not a palindrome');
// }

// // (5) REVERSE A STRING :

// let string = "Jairesh J V";

// // (i) Method 1 :
// const reverse_a_string = string.split("").reverse().join("");
// // console.log(reverse_a_string,'rev');

// // (ii) Method 2 :
// let rev_str = "";
// for (let i = string.length - 1; i >= 0; i--) {
//   rev_str = rev_str + string[i];
// }

// // console.log(rev_str,'rev_str');

// // (6) GIVEN STRING IS PALINDROME OR NOT :

// let into_case_insensitive = string.toLowerCase();
// const rev_a_string = into_case_insensitive.split("").reverse().join("");

// if (into_case_insensitive == rev_a_string) {
//   // console.log('The gn string is a palindrome');
// } else {
//   // console.log('The gn string is not a palindrome');
// }

// // (7) GIVEN NUMBER IS ARMSTRONG OR NOT :

// let gn_num = 153;
// let arm_num = gn_num;
// let to_str_num = arm_num.toString();

// let len = to_str_num.length;

// let r = 0;
// while (arm_num > 0) {
//   rem = arm_num % 10;
//   r = r + rem ** len;
//   arm_num = Math.trunc(arm_num / 10);
// }

// if (r == gn_num) {
//   // console.log("The gn number is an armstrong number");
// } else {
//   // console.log("The gn number is not an armstrong number");
// }

// // (8) FACTORIAL OF A GIVEN NUMBER :

// let g_num = 6;
// let factorial = 1;
// for (let i = g_num; i >= 1; i--) {
//   factorial = factorial * i;
// }

// // console.log(factorial,'factorial');

// // (9) VOWELS FROM A STRING :

// let str = "Jairesh";

// let converted_str = str.toLowerCase();
// let vowels = [];
// let count = 0;
// let vow = "aeiou";

// for (let st of converted_str) {
//   if (vow.includes(st)) {
//     vowels.push(st);
//     count++;
//   }
// }

// // console.log(vowels,'vowels');
// // console.log(count,'no of vowels');

// // (10) GIVEN NUMBER IS A PRIME OR NOT :

// // (i) Method 1 :

// let given_number = 7;
// let isPrime = true;

// if (given_number <= 1) {
//   isPrime = false;
// } else {
//   for (let i = 2; i < given_number; i++) {
//     if (given_number % i == 0) {
//       isPrime = false;
//     }
//   }
// }

// if (isPrime) {
//   console.log("The given number is a prime number");
// } else {
//   console.log("The given number is not a prime number");
// }

// // (ii) Method 2 :

// let g_number = 77;

// let isPrimeCheck = true;

// if (g_number <= 1) {
//   isPrimeCheck = false;
// } else {
//   for (let i = 2; i <= Math.sqrt(g_number); i++) {
//     // Only taking squareroot is changed for optimisation
//     if (g_number % i == 0) {
//       isPrimeCheck = false;
//     }
//   }
// }

// if (isPrimeCheck) {
//   console.log("The given number is a Prime Number");
// } else {
//   console.log("The given number is not a Prime Number");
// }

// // (11) GIVEN NUMBER IS A ODD OR EVEN :

// let g_numb = 8;

// if (g_numb % 2 == 0) {
//   console.log("The given number is Even");
// } else {
//   console.log("The given number is Odd");
// }

// // (12) HIGHEST NUMBER AMONG THE ARRAY :

// const gn_array = [22, 4, -10, 77, 8];
// let high = 0;
// for (let i = 0; i < gn_array.length; i++) {
//   if (gn_array[i] > high) {
//     high = gn_array[i];
//   }
// }

// console.log(high, "highhh");
// console.log(Math.max(...gn_array));


// // (13) SORT AN ARRAY IN ASCENDING ORDER :

// // const mixed_array = [4, 3, 5, 6, 1, 2, 8];

// // let temp = 0;
// // let asc = [];

// // console.log(mixed_array.sort()) ;

// // for (i = 0; i < mixed_array.length; i++) {
// // if(mixed_array[i]>temp){
// //   let a = mixed_array[i] ;
// //   b = a ;
// //   temp = b ;
// // }
// // asc.push(mixed_array[i])
// // }

// // console.log(asc,'ascccccccc');
// // console.log(temp,'temp');

// const mixed_array = [4, 3, 5, 6, 1, 2, 8];
// const asc = [];

// let arr = [...mixed_array];
// while (arr.length) {
//   let min = Math.min(...arr);
//   asc.push(min);
//   arr.splice(arr.indexOf(min), 1);
//   console.log(arr,'check :');
  
// }

// console.log(asc, 'Ascending order');



// // (14) SORT AN ARRAY IN DESCENDING ORDER :
