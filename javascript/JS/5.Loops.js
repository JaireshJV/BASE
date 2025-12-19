// // Loops

// // While

// let i = 50 ;

// let a = false;

// a = true

// while (i>0){
//     console.log(i);
//     i-- ;
// }

// // Do While
// let j = 50;

// do {
//   console.log(j); // Only Once
//   j += 1;
// } while (j < 50);
// 

// // For Loop

// // Numbers

// for (let i = 0 ; i <= 50 ; i ++ ){
//     console.log(i);
// }








const colors = { Name: "Red", Value: "Green", Age: "Blue" };

Object.entries(colors).forEach(([key, value], position) => {
  console.log(`The key : ${key} = ${value} is placed at ${position}`);
});



// Complicated one [ Dont touch (danger) ] :

for(var i=0 ; i< 6;i++){
  setTimeout(()=>console.log(i,'varloop') ,2000 )
}

for(let i=0 ; i<3 ;i++){
  setTimeout(()=>console.log(i,'letloop') ,1000 )
}


// Advance loop methods :
// Types of loop :
let original = [1, 2, 3, 4] ;
let arrr = [2,4,6,7] ;

//(i) For Each 
// Used to iterate each values from the array for doing some performance
// but does not return a new array .It wont mutate the existing array .
// Basically, It is used to pass the value to the function one by one .

let each = original.forEach((element) => element * 2);
console.log(each, "each");                                              // undefined

// (ii) Map 
// It is used to iterate the each value from an array 
// It always return a new array with some changes has been
// happened in array with same length .
// Use case is assign new set of arrays from the existing array .

let map = original.map((element) => element * 2);
console.log(map, "map");                                                // [ 2, 4, 6, 8 ]
 
// (iii) Filter 
// It is used to filter the array elements based on the condition or matched values .  
// All the matched or condition based value is returned in an array .
const filter = arrr.filter((e) => {
  return e > 5;
});
console.log(filter, "filter"); 


// (iv) Find 
// It is used to find the first matched values 
// When it finds the first matched value ,it stops
// further processing and returns single value .

const findy = arrr.find((e) => {
  return e > 5;
});

console.log(findy,"find");

// (v) Some 
// While the iteration from the given array if there is one value has matched returns true .
// [Ethachum onnu match aanalum return true ]  
const somey = arrr.some((e) => {
  return e > 4;
});
console.log(somey,"some");

// (vi) Every
// While the iteration from the given array there is all the values has matched returns true .
// [Ella value um match aanatha return true ]
const everyy = arrr.every((e) => {
  return e > 0;
});
console.log(everyy,"every");

// (vii) Reduce 
// reduce() executes a callback on each element of the array and reduces the entire array into a single output value.
// The callback receives two main parameters:
// accumulator (acc) → stores the ongoing result
// currentValue (cur) → current element being processed

// If you don’t provide an initial value, the first array element becomes the accumulator automatically.
// You can optionally pass a second argument (initial value), like 0, to control how accumulation starts.

const red = arrr.reduce((acc, cur) => {
  return Math.abs(acc - cur);
});
console.log(red,"reduce");


// (viii) FlatMap
// It is the combination of Flat and Map .
// To make a new array after the process happened and remove
// the nested array .
const arry = [1, 2, 3];

const resultt = arry.flatMap(n => [n, n * 2]);
console.log(resultt); // [1, 2, 2, 4, 3, 6]


// (ix) FindIndex

// It is used to find the index position of given element .
// Like same as Index() last index() method .

const users = [
  { id: 1, name: "Jai" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Anu" }
];

const index = users.findIndex(user => user.id === 2);

console.log(index); // 1















const nums = [1, 2, 3];
nums.forEach(n => console.log('Eachhh : ' ,n * 2)); // 2, 4, 6

const numss = [1, 2, 3];
const doubled = numss.map(n => n * 2);
console.log('Map : ' ,doubled); // [2, 4, 6]


const sum = nums.reduce((jai, abi) => {
  console.log(jai,abi ,"reduce");
  
return  jai + abi
}, 0);
console.log('Sum : ' ,sum); // 6

const arr = [1, 2, 3];

const result = arr.map(n => [n, n * 2]);
console.log('Mapped :' ,result); // [1, 2, 2, 4, 3, 6]

