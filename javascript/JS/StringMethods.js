// // // String Methods
// const myVariable = 'Mathematics'

// console.log(typeof(myVariable));
// console.log(myVariable.length);
// console.log(myVariable.charAt(2));
// console.log(myVariable.indexOf("at"))
// console.log(myVariable.search("i"));
// console.log(myVariable.lastIndexOf("at"));
// console.log(myVariable.indexOf("z"));      // -1
// console.log(myVariable.lastIndexOf("z"));  // -1

// console.log(myVariable.slice(5,8));
// console.log(myVariable.slice(5,2));   // No output
// console.log(myVariable.slice(5,-1));   // Initial remains same , second parameter starts from reverse
// console.log(myVariable.slice(5,12));  // Starts correctly excecutes till last
// console.log(myVariable.slice(5));   // Same O/P

// console.log(myVariable.toUpperCase());
// console.log(myVariable.toLowerCase());

// console.log(myVariable.includes("mat"));
// console.log(myVariable.split('t'));
// console.log(myVariable.split(' '));
// console.log(myVariable.split(''));
// console.log(myVariable.replace("cs","c"))

// // let str = "hello";
// // let reversed = str.split("").reverse().join("");
// // console.log(reversed);

// // let colors = "red,green,blue";
// // let arr = colors.split(",");
// // console.log(arr);

// // function rev(str) {
// //   if (typeof str === "string") {
// //     return console.log(str.split(" ").reverse().join(" "));
// //   }
// //   return console.log("The passed parameter is not string");
// // }

// // rev("The sky is blue");

// // let strl = "I love coding";
// // let output = strl.split("").reverse().join("");
// // console.log(output);

// // var unconverted_mallu = "Appa";
// // let mallu = unconverted_mallu.toLowerCase();
// // let revmallu = mallu.split("").reverse().join("");
// // console.log(revmallu);

// // if (revmallu === mallu) {
// //   console.log(`The given word : ${unconverted_mallu} is a palindrome `);
// // } else {
// //   console.log(`The given word : ${unconverted_mallu} is not a palindrome `);
// // }

// The below search function is used to find the first appearance of the index with case in-sensitive .
// Result will be index of the character appeared first .
// i ==> case in-sesitive 
// /e/ ==> search letter
console.log(w.search(/e/i));

// The below match functions represents to find all matched values fromn a string and show result in array format.
// /E/ ==> is matching character
 // i ==> is Case in-sensitive
 // g ==> global search
 console.log(w.match(/E/gi));



 let set = "Sat and RaVar";
let find = "Var";

for (let i = 0; i < set.length; i++) {
  if (set.substr(i,find.length) == find) {
    console.log(`The value of ${find} is Existed in`, set);
    break;
  }
}

console.log(set.includes(find) ? "Exist" : "Not");

if (set.includes(find)) {
  console.log("Fun panrom");
} else {
  console.log("Kathi swag");
}
