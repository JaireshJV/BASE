// // Repeated elements and their counts [frequency]

// // Problem 1
// const fruits = [
//   "Apple",
//   "Banana",
//   "Orange",
//   "Apple",
//   "Mango",
//   "Grapes",
//   "Pineapple",
//   "Banana",
//   "Cherry",
//   "Orange",
//   "Grapes",
//   "Apple",
//   "Pineapple",
//   "Banana",
//   "Grapes",
//   "Kiwi",
//   "Mango",
//   "Papaya",
//   "Orange",
//   "Apple",
//   "Cherry",
//   "Grapes",
//   "Papaya",
//   "Kiwi",
//   "Banana",
// ];

// // Expected result format:
// // [
// //   Apple: 4,   Banana: 4,
// //   Grapes: 4,  Orange: 3,
// //   Cherry: 2,  Mango: 2,
// //   Kiwi: 2,    Pineapple: 2,
// //   Papaya: 2
// // ]

// let frequency = [];

// for (let item of fruits) {
//   frequency[item] = (frequency[item] || 0) + 1;
// }

// console.log(frequency);

// // Problem 2
// const countries = [
//   "india",
//   "  USA",
//   "FRANCE",
//   "India",
//   "canada",
//   "Germany",
//   "Brazil",
//   "usa",
//   "CHINA",
//   "france",
//   "germany",
//   "INDIA",
//   "brazil",
//   "USA",
//   "germany",
//   "Italy",
//   "canada",
//   "russia",
//   "France",
//   "India",
//   "China",
//   "BRAZIL",
//   "Russia",
//   "Italy",
//   "USA",
// ];

// for (let i = 0; i < countries.length; i++) {
//   countries[i] = countries[i].trim().toLowerCase();
// }

// console.log(countries);

// let corrected_contries = [];

// for (let items of countries) {
//   if (corrected_contries[items]) {
//     corrected_contries[items]++;
//   } else {
//     corrected_contries[items] = 1;
//   }
// }

// console.log("corrected_contries :", corrected_contries);
// console.log(
//   "corrected_contries Length :",
//   Object.keys(corrected_contries).length
// );

// // Problem 3
// const colors = [
//   { shade: "Red" },
//   { shade: "Blue" },
//   { shade: "Green" },
//   { shade: "Red" },
//   { shade: "Yellow" },
//   { shade: "Pink" },
//   { shade: "Purple" },
//   { shade: "Blue" },
//   { shade: "Orange" },
//   { shade: "Green" },
//   { shade: "Pink" },
//   { shade: "Red" },
//   { shade: "Purple" },
//   { shade: "Blue" },
//   { shade: "Pink" },
//   { shade: "Black" },
//   { shade: "Yellow" },
//   { shade: "White" },
//   { shade: "Green" },
//   { shade: "Red" },
//   { shade: "Orange" },
//   { shade: "Pink" },
//   { shade: "White" },
//   { shade: "Black" },
//   { shade: "Blue" },
// ];

// let corrected_colors = [];
// for (let items of colors) {
//    corrected_colors[items.shade] = (corrected_colors[items.shade] || 0) + 1;
// }

// console.log("corrected_colors :", corrected_colors);



// // Problem 4
// // Flatten array and count.
// const animalGroups = [
//   [["Dog", "Cat"], "Cow", "Dog", "Horse"],
//   ["Tiger", "Deer", "Cat", "Elephant", "Cow"],
//   ["Tiger", "Dog", "Deer", "Cat", "Tiger"],
//   [["Rabbit", ["Horse", ["Goat"], "Cow"], "Dog"]],
//   ["Elephant", "Tiger", "Goat", "Rabbit", "Cat"],
// ];

// const animalGroups1 = animalGroups.flat(Infinity);
// console.log(animalGroups1);

// let finalAnimals = [];
// for (let items of animalGroups1) {
//   finalAnimals[items] = (finalAnimals[items] || 0) + 1;
// }
// console.log(finalAnimals);


// // Problem 5
// // Normalize and extract language names, then count.
// const langMixed = [
//   "JavaScript", ["Python", "Java"], { lang: "JavaScript" }, "C++",
//   "Go", ["C#", "Python"], { lang: "Ruby" }, "Java",
//   "Go", "JavaScript", "C#", { lang: "Python" }, "Go",
//   ["Rust", "C++", "PHP"], "Java", "JavaScript",
//   "Ruby", { lang: "Go" }, "PHP", "Rust", "Python"
// ];
// let langMixedUP;

// langMixedUP = langMixed.flat(Infinity);

// let language = [];
// let final_lang = [];
// for(let it in langMixedUP){
// language[it] = langMixedUP[it].lang ?? langMixedUP[it]; 
// }

// for(let i of language){
// final_lang[i] = (final_lang[i] ?? 0 ) + 1
// }

// console.log(final_lang);


// Pattern Printing

let row = "";
let num = 7 ;
for (i = 0 ; i < num ; i++){
  for(j = 0 ; j < i ; j++){
    // {
    //   i%2 == 0 ? (row += "0 ") : (row += "1 ")
    // }
    row += "*"+" "
  }
  row +="\n"
}

console.log(row);
