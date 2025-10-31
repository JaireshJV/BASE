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


// // // Counting occurance of the element


// // // Alternative [correct]

const fruitss = [
  "Apple",
  "Orange",
  "Banana",
  "Grapes",
  "Apple",
  "Orange",
  "Apple",
];

let repeated_element_array = [];
let countss = [];

for (let i = 0; i < fruitss.length; i++) {
  let count = 0;
  for (let j = i + 1; j < fruitss.length; j++) {
    if (fruitss[i] == fruitss[j]) {
      count++;
    }
  }

  let exist = false;

  for (let k = 0; k < repeated_element_array.length; k++) {
    if (repeated_element_array[k] == fruitss[i]) {
      exist = true;
    }
  }

  if (count > 1 && exist == false) {
    repeated_element_array.push(fruitss[i]);
    countss.push(count+1);
  }
}
console.log("repeated_element_array :", repeated_element_array);
console.log("countss :", countss);

const non_repeated_element_array = fruitss.filter(
  (elements_in_fruitss) => !repeated_element_array.includes(elements_in_fruitss)
);

const result = {};
for (let i in repeated_element_array) {
  result[repeated_element_array[i]] = countss[i];
}
console.log("initial result : ", result);

for (let i of non_repeated_element_array) {
  result[i] = 1;

}
for (i = 0;i<non_repeated_element_array.length;i++){
  result[non_repeated_element_array[i]] = 1;
}

console.log("final result : ", result);

for (let key in result) {
  console.log(`${key} : ${result[key]}`);
}
console.log({
  Jai: result.Apple ?? 'N/A'
});

console.log("O/P :", result); // In array format

// const arr = ["a", "b"];
// for (let i in arr) {
//   console.log(i, arr[i]);
// }

// // // const colors = { Name: "Red", Value: "Green", Age: "Blue" };

// // // Object.entries(colors).forEach(([key, value], position) => {
// // //   console.log(`The ${key}: ${key} = ${value} is placed at ${position}`);
// // // });

