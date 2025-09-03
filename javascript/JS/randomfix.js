"use strict"

a = 20 ;
console.log(a,'aaaaaa');

// const arr = [1,2,3,4,5,6,1,7] ;

// const count = (arr) => arr.reduce((acc,cur) =>((acc[cur] = (acc[cur] || 0) + 1), acc), {});

// console.log(count(arr),"count");

// const reducecheck = arr.reduce((acc,cur) => cur,0) ;
// const reducecheck2 = arr.reduce((acc,cur) => cur) ;
// console.log(reducecheck,'reducecheck');
// console.log(reducecheck2,'reducecheck2');

// let message = `This is line 1
// This is line 2
//  This is line 3`;

// console.log(message);

// function highlight(strings, values) {
//   console.log(strings, "strings");
//   console.log(values, "values");

//   return strings.reduce(
//     (result, str, i) =>
//       //   console.log(`${result}`,'result')
//       `${result}${str}<b>${values[i] || ""}</b>`,
//     ""
//   );
// }

// let namee = "Jai",
//   age = 27;
// console.log(highlight`My name is ${namee} and I am ${age} years old.`);
// Output: My name is <b>Jai</b> and I am <b>27</b> years old.


// const akk = {name:"jai",age:"27"}

// const namee = akk.name;
// console.log(namee);

// Duplicate of an array 

const dup_array = ["1","2","5","7","9","5","4","7"] ;

let unique_array = {};

for(let i of dup_array){
    console.log('one_by_one_value' ,i);
    unique_array[i] = (unique_array[i] ?? 0) + 1 ;
}

console.log("unique_array",unique_array);


const pogaiVandi = [
  "Car", "Auto", "Bike", "Bus", "Car", "Auto", "Bike", "Lorry", "Truck",
  "Car", "Bike", "Auto", "Truck", "Lorry", "Van", "Bus", "Van", "Auto",
  "Bike", "Car", "Scooter", "Cycle", "Bus", "Scooter", "Cycle"
];

let pogai_array = {};
for(let vehicles of pogaiVandi){
 pogai_array[vehicles] = (pogai_array[vehicles] ?? 0) + 1
}

console.log(pogai_array);



