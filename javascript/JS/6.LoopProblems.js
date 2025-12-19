// LOOP RELATED PROBLEMS

// (I) PROBLEMS RELATED TO NUMBER :

// (i) Find the odd number and even number between a range :

let start = 1;
let end = 17;

let odd = [];
let even = [];

for (let i = start + 1; i < end; i++) {
  // Excluding start and end
  if (i % 2 == 0) {
    even.push(i);
  } else {
    odd.unshift(i);
  }
}

console.log("Odd :", odd);
console.log("Even :", even);


// // Table printing

let table = 5;

for (let i = 1; i <= 10; i++) {
  let ans = table * i;
  console.log(`${table} * ${i} =` ,ans);
  console.log(`${i} * ${table} =` ,ans);
}


// (II) PROBLEMS RELATED TO STRING :

// (i) Find the matching characters among the given two strings :

let f_name = "Jaireshaearte";
let s_name = "selvinae";

f_name = f_name.toLowerCase();
s_name = s_name.toLowerCase();

let array = [];

for (let i = 0; i < f_name.length; i++) {
  for (let j = 0; j < s_name.length; j++) {
    if (f_name.charAt(i) === s_name.charAt(j)) {
      if (!array.includes(f_name.charAt(i))) {
        array.push(f_name.charAt(i));
      }
    }
  }
}

console.log("Matching Characters :", array);

// (ii) Find the matching characters within a strings :

const demo = "malayalam";
let arrayy = [];

for (i = 0; i < demo.length; i++) {
  let count = 0;

  for (j = 0; j < demo.length; j++) {
    if (demo[i] == demo[j] && i !== j) {
      count++;
    }
  }

  let repeated = false;
  for (let k = 0; k < arrayy.length; k++) {
    if (arrayy[k] == demo[i]) {
      repeated = true;
    }
  }

  if (count > 0 && repeated == false) {
    arrayy.push(demo[i]);
  }
}

console.log("Repeated Characters :", arrayy);

// for (let i = 0; i < demo.length; i++) → Goes through each character of the word one by one.
// count = 0 → Reset every time to count repeats for the current letter.
// Inner loop (j = i+1) → Checks the rest of the string to see if the same letter appears again and increases count.
// repeated = false → Used to check if that letter is already added to the result array.
// Another loop (k loop) → If the letter is already in the array, it sets repeated = true to skip it.
// Final if condition (count > 0 && repeated == false) → Adds the letter to the array only if it repeats in the string and hasn’t been added before.
// Output: The array shows only the characters that appear more than once, without duplicates.

// 👉 Example result for "malayalam" → ['m', 'a', 'l']









// (III) PROBLEMS RELATED TO ARRAY :

// (i) Find the repeated items with its count :

const Automobiles = [
  "Car", "Auto", "Bike", "Bus", "Car", "Auto", "Bike", "Lorry", "Truck",
  "Car", "Bike", "Auto", "Truck", "Lorry", "Van", "Bus", "Van", "Auto",
  "Bike", "Car", "Scooter", "Cycle", "Bus", "Scooter", "Cycle","Ship"
];

let repeated = [];
let repeated_count = [];

for (let i = 0; i < Automobiles.length; i++) {
  let count = 0;
  for (let j = i + 1; j < Automobiles.length; j++) {
    if (Automobiles[i] == Automobiles[j]) {
      count++;
    }
  }

  let already_exist = false;
  for (let k = 0; k < repeated.length; k++) {
    if (repeated[k] == Automobiles[i]) {
      already_exist = true;
    }
  }

  if (count > 0 && already_exist == false) {
    repeated.push(Automobiles[i]);
    repeated_count.push(count + 1);
  }
}

const non_repeated = Automobiles.filter((veh) => !repeated.includes(veh));

const combined = repeated.map((elem, ind) => {
  return `${elem} : ${repeated_count[ind]}`;
});

for(let non of non_repeated){
   combined.push(`${non} : 1`)
}

console.log("Rep :", repeated);
console.log("Count :", repeated_count);
console.log("Non Rep :", non_repeated);
console.log("Combined :", combined);

// let output = []
// for(let rep in repeated){
//   output[repeated[rep]] = repeated_count[rep]
// }

// for(let non_rep in non_repeated){
//   output[non_repeated[non_rep]] = 1
// }

// console.log('Reppppp ;' ,output);


// Alternative methods :

// (i)
const Result = {};

for (let item of Automobiles) {
  if (Result[item]) {
    Result[item]++;
  } else {
    Result[item] = 1;
  }
}

console.log("Result" ,Result);

// (ii)
let obj = {} ;
for(let i of Automobiles){
 obj[i] = (obj[i] ?? 0) + 1
}

// The for (let i of vehicles) loop takes each vehicle name one by one from the list.
// obj[i] looks inside the object to check if that vehicle already has a count.
// If it’s the first time, obj[i] is undefined, so ?? 0 makes it start from 0.
// Then we add 1 to that number to count the vehicle once.
// The new value is saved back into obj[i], updating the total count.
// The whole undefined → 0 → +1 → stored as 1 happens in the same line, within that single loop turn, not in the next one.
// console.log shows which vehicle came and what its current count is.
// Finally, obj will contain each vehicle name with how many times it appeared in the array.

console.log(obj);











// (III) PROBLEMS RELATED TO OBJECT :

const fruitss = [
  "Apple",
  "Orange",
  "Banana",
  "Grapes",
  "Apple",
  "Orange",
  "Apple",
];

let repeated_fruits = [];
let countss = [];

// It gives two arrays of repeated elements and their counts seperatly .

for (let i = 0; i < fruitss.length; i++) {
  let count = 0;
  for (let j = i + 1; j < fruitss.length; j++) {
    if (fruitss[i] == fruitss[j]) {
      count++;
    }
  }

  let exist = false;

  for (let k = 0; k < repeated_fruits.length; k++) {
    if (repeated_fruits[k] == fruitss[i]) {
      exist = true;
    }
  }

  if (count > 1 && exist == false) {
    repeated_fruits.push(fruitss[i]);
    countss.push(count+1);
  }
}

// It gives the non-repeated elements from the source array .

const non_repeated_fruits = fruitss.filter(
  (fruits) => !repeated_fruits.includes(fruits)
);

// Methods that we can assign the values in an object format from the combined two arrays .
// The below three LOOPS performs the same process .

const result = {};

// LOOP 1 : For in loop :

for (let i in repeated_fruits) {
  result[repeated_fruits[i]] = countss[i];
}

// LOOP 2 : For of loop :
for (let i of non_repeated_fruits) {
  result[i] = 1;

}

// LOOP 3 : Traditional Loop : 

for (i = 0;i<non_repeated_fruits.length;i++){
  result[non_repeated_fruits[i]] = 1;
}

console.log("final result : ", result);





// Just tried to retrieve the value from its corresponding key to wherever we need :
// Based on the condition , if Apple doesnot have the value , 'N/A' will be the O/P .

for (let key in result) {
  console.log(`${key} : ${result[key]}`);
}
console.log({
  Jai: result.Apple ?? 'N/A' 
});



