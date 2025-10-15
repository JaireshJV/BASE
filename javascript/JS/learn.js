"use strict" ;

console.log("JAIABI");
let w = "Welcome to JavaScript";

console.log(w.substring(18, 45));
console.log(w.slice(18));
// console.log(w.splice(18));
console.log(w.length);
console.log(w);

let a = ["dog", "cat", "hen", "duck"];
console.log(a.splice(0, "Added", "Theevu", "Vayu"));
console.log(a);
console.log(w.split("t"));
console.log(w.length);

console.log(w.charAt(0));
console.log(w.indexOf("e"));
console.log(w.lastIndexOf("t"));
console.log(w.search(/e/i));
console.log(w.match(/E/gi));
console.log(Array.from(w.matchAll("t"))[0].input);

let set = "Sat and Ran";
let find = "Var";

for (let i = 0; i < set.length; i++) {
  if (set.substr(i, find.length) == find) {
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

// ARRAY

const arr = [5, 6, 0, 7, 8, 0, 9, 2, 3, 0, 4, 1, 3, 4, 0, 5, 6, 7];
console.log(arr.length);
const hug = [];

let n = 0;
while (n < arr.length) {
  if (arr[n] !== 0) {
    hug.unshift(arr[n]);
  } else {
    hug.push(arr[n]);
  }
  n++;
}

console.log(hug);

// console.log("vandi", hug.length);

// let pos = hug.indexOf(0);
// let rem = hug.splice(pos);
// console.log(hug);

let count = 0;

let m = 0;
while (m < hug.length) {
  if (hug[m] == 0) {
    console.log("ccccccccccccc");
    count++;
  }
  m++;
}

console.log("count :" + count);

for (let i = 0; i < count; i++) {
  hug.pop();
}

console.log("count hug :", hug);

console.log("mAYAYA MAYA MAYA");

const cut = function Outer(a) {
  let j = 9 ;
  return function Inner(b) {
    console.log((a+b) - j, "jval");
  };
}

// const Count = Outer()
// Count()

cut(4)(7)
// Outer()() ;

// console.log(curry(5)(8)(7));


// console.log(abi,'abiii');
// var abi  = "sheth"

// const curry =a=>b=>c=> a + b+ c;

let ok = false ;

if(ok){
  console.log('truuuuuuuu');  
}
else{
  console.log('falssssssss');  
}
