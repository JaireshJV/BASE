import { mul,sum, sub, calculator, switchedCal, validdetails } from "./functions.js";


const result = mul(7,8)
console.log("result :",result);


// 1. Sum of Array Elements

// Example Input: [2, 4, 6]
// Expected Output: 12

const array_for_adding = [2,4,6]
let add = 0;

for(let i in array_for_adding ){

add = sum(add,array_for_adding[i])

}
console.log("add :",add);


// 2. Difference Between Max and Min
// Example Input: [10, 3, 7, 1]
// Expected Output: 9 (10 - 1)

const Input = [5, 23, 47, 8]

const max = Math.max(...Input);
const min = Math.min(...Input);

const diff = sub(max,min)
console.log("diff :",diff);


// 3. Product of All Elements

// Example Input: [2, 3, 4]
// Expected Output: 24

const array_for_multiplication = [2, 3, 4]
let mult = 1;

for(let i in array_for_multiplication ){

mult = mul(mult,array_for_multiplication[i])

}
console.log("multi :" ,mult);





console.log(calculator(3,4,"+"));

console.log(switchedCal(7,7,"*"));

const res = sum(7,2);
console.log(mul(res,4));

// validdetails("Jai")

// function askingcustomer() {
//    let A = prompt("Enter the valid number :") 
//    console.log(A);

// }

// const a = askingcustomer()
// console.log(a);

 let Aaaaaaaa = prompt("Enter the valid number :").toLowerCase()
 console.log(Aaaaaaaa);
 



