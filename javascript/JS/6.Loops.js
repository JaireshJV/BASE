// // Loops

// While
// let i = 50 ;

// let a = false;

// a = true

// while (i>0){
//     console.log(i);
//     i--
// }

// Do While
// let j = 50;

// do {
//   console.log(j); // Only Once
//   j += 1;
// } while (j < 50);

// For Loop

// Numbers

// for (i = 0 ; i <= 50 ; i ++ ){
//     console.log(i);

// }

// String
// for (i = 0 ; i< unname.length ; i ++){
//     console.log(unname.charAt(i));
// }

// // You understood well

// Default method

// let unname = 'Jaireshaearte'
// let vnname = 'selvinae'
// let array = [];

// for (i = 0 ; i<unname.length ; i ++){
//     for(j = i+1 ; j<unname.length ; j++){

//       if(unname.charAt(i) === unname.charAt(j)){
//         if(array.includes(unname.charAt(i))){

//         }
//         else{
//           array.push(unname.charAt(i));
//            console.log(unname.charAt(i));
//         }
//     }
//     }
// }

// console.log('final array :' ,array);

// const demo = "malayalam";
// let array = [];

// for (i = 0; i < demo.length; i++) {
//   let count = 0;

//   for (j = 0; j < demo.length; j++) {
//     if (demo[i] == demo[j] && i !== j) {
//       count++;
//     }
//   }

//   let repeated = false;
//   for (let k = 0; k < array.length; k++) {
//     if (array[k] == demo[i]) {
//       repeated = true;
//     }
//   }

//   if (count > 0 && repeated == false) {
//     array.push(demo[i]);
//     console.log("ans:", demo[i]);
//   }
// }
// console.log(array);




// For loop , For in , For of related problems :

// // const Vandi = [
// //   "Car",
// //   "Auto",
// //   "Bike",
// //   "Bus",
// //   "Car",
// //   "Auto",
// //   "Bike",
// //   "Lorry",
// //   "Truck",
// // ];

// // let repeated = [];
// // let push_count = [];

// // for (let i = 0; i < Vandi.length; i++) {
// //   let count = 0;
// //   for (let j = i + 1; j < Vandi.length; j++) {
// //     if (Vandi[i] == Vandi[j]) {
// //       count++;
// //     }
// //   }

// //   let already_exist = false;
// //   for(let k = 0; k < repeated.length; k++) {
// //     if(repeated[k] == Vandi[i]){
// //       already_exist = true ;

// //     }
// //   }

// //   if (count > 0 && already_exist == false) {
// //     repeated.push(Vandi[i]);
// //     push_count.push(count+1);

// //   }
// // }

// // const non_repeated = Vandi.filter((veh)=>!repeated.includes(veh))
// // console.log(repeated);
// // console.log(push_count);
// // console.log(non_repeated);

// // let output = []
// // for(let rep in repeated){
// //   output[repeated[rep]] = push_count[rep]
// // }

// // for(let non_rep in non_repeated){
// //   output[non_repeated[non_rep]] = 1
// // }

// // console.log(output);

// // const ChinnaVandi = [
// //   "Car",
// //   "Auto",
// //   "Bike",
// //   "Bus",
// //   "Car",
// //   "Auto",
// //   "Bike",
// //   "Lorry",
// //   "Truck",
// // ];

// // // Simplest way :
// // const countofvandi = {};

// // for (let item of ChinnaVandi) {
// //   if (countofvandi[item]) {
// //     countofvandi[item]++;
// //   } else {
// //     countofvandi[item] = 1;
// //   }
// // }

// // console.log(countofvandi);

// // const pogaiVandi = [
// //   "Car", "Auto", "Bike", "Bus", "Car", "Auto", "Bike", "Lorry", "Truck",
// //   "Car", "Bike", "Auto", "Truck", "Lorry", "Van", "Bus", "Van", "Auto",
// //   "Bike", "Car", "Scooter", "Cycle", "Bus", "Scooter", "Cycle"
// // ];

// // // let pogai_array = [];
// // // for(let i of pogaiVandi){
// // //   if(pogai_array[i]){
// // //     pogai_array[i]++
// // //   }
// // //   else{
// // //     pogai_array[i] = 1;
// // //   }
// // // }

// // let pogai_array = [];
// // for(let vehicles of pogaiVandi){
// //  pogai_array[vehicles] = (pogai_array[vehicles] ?? 0) + 1
// //  console.log('check :',pogai_array[vehicles]);
// // }

// // console.log(pogai_array);

// // for(let i = 0 ; i<pogaiVandi.length ; i++){
// //   console.log(i);
// //   console.log(pogaiVandi[i]);
// // }

// // // const demo = "malayalam";

// // // let array = [];

// // // for (i = 0; i < demo.length; i++) {
// // //   let count = 0;

// // //   for (j = i+1; j < demo.length; j++) {
// // //     if (demo[i] == demo[j]) {
// // //       count++;
// // //     }
// // //   }

// // //   let repeated = false;
// // //   for (k = 0; k < array.length; k++) {
// // //     if (array[k] == demo[i]) {
// // //       repeated = true;
// // //     }
// // //   }

// // //   if (count > 0 && repeated == false) {
// // //     array.push(demo[i]);
// // //   }
// // // }
// // // console.log(array);

// // // Counting occurance of the element

// // // const fruits = [
// // //   "Apple",
// // //   "Orange",
// // //   "Banana",
// // //   "Grapes",
// // //   "Apple",
// // //   "Orange",
// // //   "Apple",
// // // ];

// // // let arr = [];
// // // let counts = [];
// // // let arr1 = [];
// // // let arr2 = [];

// // // for (i = 0; i < fruits.length; i++) {
// // //   let count = 0;
// // //   for (j = i + 1; j < fruits.length; j++) {
// // //     if (fruits[i] == fruits[j]) {
// // //       count++;
// // //     }
// // //   }

// // //   let exist = false ;

// // //   for(k=0 ; k<arr.length ; k++){

// // //     if(arr[k] == fruits[i]){
// // //       exist = true ;
// // //     }

// // //   }

// // //   if (count > 0 && exist == false) {
// // //      arr.push(fruits[i]);
// // //      counts.push(count+1);
// // //   } else {
// // //     arr1.push(fruits[i]);
// // //   }
// // // }

// // // console.log(arr);
// // // console.log('counts :',counts);
// // // console.log(arr1);

// // // console.log('O/P :', result );

// // // console.log([5,6,7] - [3,5,2]);
// // // const differences = fruits.filter((val, i) => val !== arr[i]);
// // // console.log(differences);

// // // Alternative [correct]

// // const fruits = [
// //   "Apple",
// //   "Orange",
// //   "Banana",
// //   "Grapes",
// //   "Apple",
// //   "Orange",
// //   "Apple",
// // ];

// // let repeated_element_array = [];
// // let counts = [];

// // for (let i = 0; i < fruits.length; i++) {
// //   let count = 0;
// //   for (let j = i + 1; j < fruits.length; j++) {
// //     if (fruits[i] == fruits[j]) {
// //       count++;
// //     }
// //   }

// //   let exist = false;

// //   for (let k = 0; k < repeated_element_array.length; k++) {
// //     if (repeated_element_array[k] == fruits[i]) {
// //       exist = true;
// //     }
// //   }

// //   if (count > 0 && exist == false) {
// //     repeated_element_array.push(fruits[i]);
// //     counts.push(count + 1);
// //   }
// // }
// // console.log("repeated_element_array :", repeated_element_array);
// // console.log("counts :", counts);

// // const non_repeated_element_array = fruits.filter(
// //   (elements_in_fruits) => !repeated_element_array.includes(elements_in_fruits)
// // );

// // const result = {};
// // for (let i in repeated_element_array) {
// //   result[repeated_element_array[i]] = counts[i];
// // }
// // console.log("initial result : ", result);

// // for (let i of non_repeated_element_array) {
// //   result[i] = 1;

// // }
// // // for (i = 0;i<non_repeated_element_array.length;i++){
// // //   result[non_repeated_element_array[i]] = 1;
// // // }

// // console.log("final result : ", result);

// // // for (let key in result) {
// // //   console.log(`${key} : ${result[key]}`);
// // // }
// // // console.log({
// // //   Jai: result.Apple ?? 'N/A'
// // // });

// // console.log("O/P :", result); // In array format

// // // const arr = ["a", "b"];
// // // for (let i in arr) {
// // //   console.log(i, arr[i]);
// // // }

// // // const colors = { Name: "Red", Value: "Green", Age: "Blue" };

// // // Object.entries(colors).forEach(([key, value], position) => {
// // //   console.log(`The ${key}: ${key} = ${value} is placed at ${position}`);
// // // });

