// Arrays

const myArray = [];

myArray[0] = "Hi";
myArray[1] = "Hello";
myArray[2] = "Vanakkam";

console.log(myArray);
console.log(myArray.length);
console.log(myArray[0]);
console.log(myArray[myArray.length - 1]);    // To show last element

const AddElement = myArray.push("Makkalae"); // To add element at last
console.log(myArray);
console.log(AddElement);                       // Show the length

const DelElement = myArray.pop()               // To delete last element 
myArray.pop("Makkalae") ;                      // Its a wrong syntax because , like push("Makkalae") we cant send a particular value to do the delete process .
console.log(myArray);
console.log(DelElement);                       // Show the element deleted

const AddElementAtFirst = myArray.unshift("Ahhh !")     // To add element at first
console.log(myArray);
console.log(AddElementAtFirst);                        // Show the length

const DelElementAtFirst = myArray.shift()               // To delete element of first
myArray.shift("Makkalae") ;                             // Its a wrong syntax because , like push("Makkalae") we cant send a particular value to do the delete process .
console.log(myArray);
console.log(DelElementAtFirst);                         // Show the element deleted

// SPLICE [add,remove,or replace in between]

// [Array.splice(START_VALUE (based on index),COUNT (from selected index) , insert/replacable value)]
// Add 
console.log('splice add :',myArray.splice(1,0,"Haiiii","Byeeeeeeeee","Varatamamaedrrrrrrrrr"));
console.log(myArray)                    // 1-> Start Value , 0-> Count , Hai.... -> Insert values .
                                        // Here as the count is 0 , the insert value gets inserted into the Array
                                        //  after the start value index .

// Remove
console.log('splice remove :',myArray.splice(1,2));
console.log(myArray);                   // 1-> Start Value , 2-> Count , So the elements 
                                        // from index position '1' till count 2 gets removed


// Replace
console.log('splice replace :',myArray.splice(1,1,"Haiiiii"));
console.log(myArray);                   // 1-> Start Value , 1-> Count , So the elements 
                                        // from index position '1' till count 1 gets replaced with
                                        // the elements mentioned after , ("Haiiiii")

// Delete [not advicable at it create empty undefined]
console.log(delete myArray[2]);         // The index position mentioned element gets deleted and creates an empty item .
//       // or
// console.log(delete(myArray[2]))             // Creates An empty item
console.log(myArray[2]);



// SLICE

const a = "987654";
const newArray = a.slice(1,4);      // 1-> Start Value , 4-> Before the end value 
console.log('slice' ,newArray);     // Can be used for Array and String as well

console.log(newArray[2]);
console.log(a);


// Reverse
console.log("myArray :", myArray);

const reversedArray = myArray.reverse()
console.log(reversedArray);

// Join

const joinedArray = myArray.join("")
console.log("joinedArray",joinedArray);

// Split

const splittedArray = joinedArray.split("a")
console.log(splittedArray);


// CopyWithin 

// Basically it has three arguments ,
//  first  one ==> Target index position that where we want to replace the values .
//  second one ==>  Where we want to start the process at index position.
//  third one  ==> Where we want to stop the process at index position , the chooser value will be excluded . 
// Array's length doesnot change,instead it replaced .
// The all arguments will be targeted only the givwn array and outside numbers wont be allowed .

let copy = [2,5,7,9,4,1,8,9,0,8] ;

console.log(copy.copyWithin(5,1,5));
// [targeted index,start copy from,stop copy from] .
console.log("copy :" , copy);



 // Fill 

 // It has three arguments basically .
 // First one ==> The replacing value .
 // Second one ==> Start number .
 // Third one ==> End number .
 // We can fill the new values to the array using 'fill' .
 let f = [45, 65, 23, 90, 65, 55, 89, 16]; 
 console.log("Fill : " ,f.fill(-77, 2, 4));



// Joining two arrays

const myArrayA = ['Its','Array','One']
const myArrayB = ['Its','Array','Two']

console.log(myArrayA);
console.log(myArrayB);



// Spread operator method :
const joinedArraysUsingSpreadOperator = [...myArrayA,...myArrayB]
console.log(joinedArraysUsingSpreadOperator);

const earnMoneyA = ["FronEnd","BackEnd","FullStack"]
const earnMoneyB = ["AI","Blockchain","DataAnalystics"]

const growMoneyA = ["Stock","RealEstate","FixedIncome"]
const growMoneyB = ["Options","Futures"]

const giveMoney = ["QualityEducation"]

console.log(earnMoneyA[1],growMoneyB[1]);           // One Dimensional

const earnMoney = [earnMoneyA,earnMoneyB]
const growMoney = [growMoneyA,growMoneyB]

console.log(earnMoney[0][1],growMoney[1][1]);       // Two Dimensional

const dhuddu = [earnMoney,growMoney,giveMoney]

console.log(dhuddu[0][0][1],dhuddu[1][1][1]);       //  Three Dimensional


const arr = [5, 6, 0, 7, 8, 0, 9, 2, 3, 0, 4, 1, 3, 4, 0, 5, 6, 7];
console.log(arr.length,'hugl');
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

console.log(hug.length,'lll');
console.log(hug);


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



// When we use the string to add into the array , we have to mention two limits at the beginning of the splice function .
// If we passed only one value means , after the comma the string will become NaN and will be ignored to insert . 

let aa= ["dog", "cat", "hen", "duck"];
const b = aa.splice(0,0,"Added", "Theevu", "Vayu") ;

console.log(b,'before');
console.log(aa,'after');




const array = [1,2,3] ;

// By adding new value in an array , the spaces will be created between the newly added element
// and already existed element , and it also comes under length .
array[10] = 10 ;

console.log(array.length);
console.log(array);
console.log(array[6]);



// Array concatination :

// Types of Array Concatination :
// (i) Concat method :

let u = [4, 5];
let w = [3, 4];
let result1 = w.concat(u);
console.log('Concat : ' ,result1);                                                // [ 3, 4, 4, 5 ]


// (ii) Spread method :

// Plain :
let c = [4, 5];
let d = [3, 4];
let result = [...d, ...c];
console.log('Spread : ' ,result);                                                  // [ 3, 4, 4, 5 ]

// Nested :
let arry = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log('NestedLevel1 : ' ,[...arry[0], ...arry[1], ...arry[2]]);               // [ 1, 2, 3, 4, 5, 6 ]
let arrs = [[[1, 2]], [[3, 4]], [[5, 6]]];
console.log('NestedLevel2 : ' ,[...arrs[0], ...arrs[1], ...arrs[2]]);               // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
console.log('NestedLevel3 : ' ,[...arrs[0][0], ...arrs[1][0], ...arrs[2][0]]);      // [ 1, 2, 3, 4, 5, 6 ]

// Flat :
          
console.log('Flat level 1 : ' ,arrs.flat());                                        //  [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]

console.log('Flat level 2 : ' ,arrs.flat(2));                                       //  [ 1, 2, 3, 4, 5, 6 ]   

console.log('Flat infinity : ' ,arry.flat(Infinity));                               //  [ 1, 2, 3, 4, 5, 6 ]


// Nested array printing method :

let grid = [
  [1, 2],
  [3, 4],
  [5, 6],
];

for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    console.log("grid :", grid[i][j]);
  }
}


// Modifying matrix :

let matrix = [
  [0, 1, 2],
  [3, 4, 5],
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j] == 4) {
      matrix[i][j] = 99;
      break;
    }
  }
}

console.log("Modified:", matrix);


// Finding max 

let arrry = [22, 5, 67, 90, 34];
let max = arrry[0];
arrry.forEach((element) => {
  if (element > max) {
    max = element;
  }
});

console.log("max val :", max);


// Spread Operator and Rest operator

// 1. Function Parameters (Rest)

// Write a function multiplyAll that accepts any number of arguments and
// returns the product of all numbers using the rest operator.

// multiplyAll(2, 3, 4); // Output: 24
// multiplyAll(5, 10);   // Output: 50

// function multiplyAll(...num) {
//   return num.reduce((acc, cur) => acc * cur, 1);
// }

// console.log(multiplyAll(2, 3, 4));
// console.log(multiplyAll(5, 10));

// // 2. Array Copying & Merging (Spread)
// // Given:

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5];

// // Use the spread operator to create a new array [1, 2, 3, 4, 5, 6] (where 6 is also added manually).

// const newArray = [...arr1, ...arr2, 6];
// console.log(newArray, "New Arr");

// // 3. Object Destructuring with Rest

// // Given:

// const person = { name: "Jai", age: 28, city: "Chennai", country: "India" };

// // Use destructuring with rest to extract name, and put the remaining properties in another object.

// const { name, ...otherProp } = person;

// console.log(otherProp, "otherProp");

// // 4. Spread in Function Calls

// // Suppose you have:

// const numbers = [12, 5, 8, 21, 17];
// // Use the spread operator to find the maximum number with Math.max.

// const max = Math.max(...numbers);

// console.log(max, "maxnum");

// // 5. Mixing Rest & Spread

// // Write a function combineArrays that:

// // Takes 2 arrays as arguments.

// // Uses spread to merge them.

// // Uses the rest operator in parameters to allow extra arrays to be added.
// // Example:
// // combineArrays([1, 2], [3, 4], [5, 6]);
// // Output: [1, 2, 3, 4, 5, 6]/