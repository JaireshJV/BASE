
let result = null ;
if (isFinite(result)) {
  console.log("Valid number:", result);
} else {
  console.log("Invalid or infinite result");
}



console.log(typeof(NaN));
console.log(isNaN(NaN));

console.log(Number.isNaN(NaN));



let num = 1;

while (true) {

      console.log(num);

    num++;
    if(num == 7){
      break;
    }

}



// // function palindrome(given_value) {
// //   let converted_pal = given_value.toLowerCase();
// //   let rev_given_value = converted_pal.split("").reverse().join("");
// //   if (rev_given_value === converted_pal) {
// //     console.log(`The given word : ${given_value} is a palindrome `);
// //   } else {
// //     console.log(`The given word : ${given_value} is not a palindrome `);
// //   }
// // }

// // const given_value = "Madam";
// // palindrome(given_value);

// // let c = [4, 5];
// // let d = [3, 4];
// // let result = [...d, ...c];
// // console.log(result);

// // let u = [4, 5];
// // let w = [3, 4];
// // let result1 = w.concat(u);
// // console.log(result1);

// // let arry = [
// //   [1, 2],
// //   [3, 4],
// //   [5, 6],
// // ];
// // console.log([...arry[0], ...arry[1], ...arry[2]]);

// // const fltennn = arry.flat(Infinity);
// // console.log(fltennn);

// // let arrs = [[[1, 2]], [[3, 4]], [[5, 6]]];
// // console.log([...arrs[0], ...arrs[1], ...arrs[2]]);

// // const fltenn = arrs.flat(); // Level 1
// // console.log(fltenn);

// // let arr1 = [4, 2];
// // let arr2 = [1, 3];

// // const combine_and_sort = [...arr1, ...arr2];
// // console.log(combine_and_sort);

// // for (let i = 0; i < combine_and_sort.length; i++) {
// //   for (let j = i + 1; j < combine_and_sort.length; j++) {
// //     if (combine_and_sort[i] > combine_and_sort[j]) {
// //       let bac = combine_and_sort[i];
// //       combine_and_sort[i] = combine_and_sort[j];
// //       combine_and_sort[j] = bac;
// //     }
// //   }
// // }

// // console.log("combine : ", combine_and_sort);

// // const alt = [4, 7, 3, 8, 1, 4, 9];

// // for (let i = 0; i < alt.length; i++) {
// //   let min = i;
// //   for (let j = i + 1; j < alt.length; j++) {
// //     if (alt[min] > alt[j]) {
// //       min = j;
// //     }
// //   }

// //   let temp = alt[i];
// //   alt[i] = alt[min];
// //   alt[min] = temp;
// // }

// // console.log(alt);

// // let vr = [
// //   [1, 2],
// //   [3, 4],
// //   [5, 6],
// //   [7, 8],
// // ];

// // let grid = [
// //   [1, 2],
// //   [3, 4],
// //   [5, 6],
// // ];

// // for (let i = 0; i < grid.length; i++) {
// //   for (let j = 0; j < grid[i].length; j++) {
// //     console.log("grid :", grid[i][j]);
// //   }
// // }

// // let matrix = [
// //   [0, 1, 2],
// //   [3, 4, 5],
// // ];

// // for (let i = 0; i < matrix.length; i++) {
// //   for (let j = 0; j < matrix[i].length; j++) {
// //     if (matrix[i][j] == 4) {
// //       matrix[i][j] = 99;
// //       break;
// //     }
// //   }
// // }

// // console.log("Modified:", matrix);

// // const twotwo = [
// //   [
// //     [1, 2],
// //     [3, 4],
// //   ],
// //   [
// //     [5, 6],
// //     [7, 8],
// //   ],
// // ];

// // // Method over-loading or Polymorphism

// // function greet(name, age) {
// //   // if (age !== undefined) {
// //   //   console.log(`Hello ${name}, you are ${age} years old.`);
// //   // } else {
// //   //   console.log(`Hello ${name}`);
// //   // }

// //   return console.log("Varatha da....", name);
// // }

// // greet(34); // Hello Alice
// // // greet("Bob", 25);      // Hello Bob, you are 25 years old.

// // function name(params) {
// //   arguments.length;
// // }

// // function calculateArea(a, b, shape) {
// //   if (arguments.length === 1) {
// //     // Circle: πr²
// //     return Math.PI * a * a;
// //   } else if (arguments.length === 2) {
// //     // Rectangle: length × breadth
// //     return a * b;
// //   } else if (arguments.length === 3 && shape === "triangle") {
// //     // Triangle: ½ × base × height
// //     return 0.5 * a * b;
// //   } else {
// //     return "Invalid input";
// //   }
// // }

// // // Usage
// // console.log(calculateArea(5)); // Circle with radius 5 → 78.54...
// // console.log(calculateArea(4, 6)); // Rectangle → 24
// // console.log(calculateArea(10, 8, "triangle")); // Triangle → 40


// if (2 == 2 && 4 < 5) {
//   console.log("Kaththisandai");
// }

// console.log(5 < 6 && 6 == "6" && "k" === "k" && "abi" === "sheth");

// {
//   8 > 6 ? console.log("kkk") : console.log("lll");
// }

// let n = 7;
// let v = n < 0 ? -n : n;

// console.log(v);


// // //

// let dc = [
//   {
//     userId: 1,
//     id: 1,
//     title: "quidem molestiae enim",
//   },
//   {
//     userId: 1,
//     id: 2,
//     title: "sunt qui excepturi placeat culpa",
//   },
//   {
//     userId: 1,
//     id: 3,
//     title: "omnis laborum odio",
//   },
// ];

// dc.forEach((element) => {
//   console.log(element);
// });


// // dc.map((b) => {
// //   console.log(b);
// // });

// // for(let i = 0;i<=length;i++){
// //   console.log(i);
// // }

// // Entry Level Condition Check
// // let x =5;
// // while(x>0){
// //   console.log("Its working");
// //   x--;
// // }

// // // Exit Level Condition Check
// // let zl = 4;
// // do{
// //   console.log("Do it first");
// //   zl--;
// // }
// // while(zl>0)

// // let sumarray = [];
// // let input;
// // let sum = 0;

// do {
//   input = prompt("Please enter the value");

//   let v = Number(input);

//   if (v !== 0) {
//     sumarray.push(v);
//   }
// } while (v !== 0);

// for (let i = 0; i < sumarray.length; i++) {
//   sum += sumarray[i];
// }

// console.log(sum);

// // let suarray = [];
// // let inputt = 10;
// // do {
// //   console.log(inputt);
// //   suarray.push(inputt);
// //   inputt--;
// // } while (inputt >= 0);
// // console.log(suarray);

// let input = 987659;
// // let count_digit = input.toString();
// // let len = count_digit.length;

// // let count = 0;

// // while (input > 0) {
// //   input = Math.floor(input / 10);
// //   count++ ;
// // }

// // console.log(count);

// // console.log(Math.floor(1/10));

// // let count = 0;

// // while (len > 0) {
// //   len--;
// //   count++ ;
// // }

// // console.log(count);

// // var user;
// // do {
// //     user = prompt(user ? "Do you want to continue ?" : "Are you ready ?").toLowerCase();
// //   }
// //  while (user !== "yes");


// // Guess number

// // const secretnum = 7;
// // let usernum;
// // do {
// //   usernum = prompt("Type a number : ");
// //   if (isFinite(usernum)) {
// //     if (usernum == secretnum) {
// //       alert("Correct");
// //     } else {
// //       alert("Wrong");
// //     }
// //   } else {
// //     alert("Enter a valid number");
// //   }
// // } while (secretnum != usernum);

// // console.log(Number.isInteger("65"));
// // console.log(Number.isInteger(8));

// // console.log("Number is NaN", Number.isNaN("jjj"));
// // console.log(Number.isNaN(8));

// // console.log(Number.isFinite("8"));
// // console.log(isFinite("dgerrgew"));


// // For loop

// // Basic
// let n = 7;

// for (let i = 1; i <= n; i++) {
//   console.log(i);
// }


// // Table printing
// let table = 5;

// for (let i = 1; i <= 10; i++) {
//   let ans = table * i;


let jai = 86/6 ;
console.log(parseInt(jai));
console.log(Math.ceil(jai));


// let name = "Jairesh goody is a good boy goods goodf goodi goode";
// console.log(name.split(" "));
// console.log(name.split(""));

// // const print = name[13]
// // console.log(print);

// for (let i = 0; i < name.length; i++) {
//   if (name[i] == "g") {
//     console.log("g");
//     break;
//   }
// }

// const rep = name.replace("oo", "bb");
// console.log(rep);

// console.log(name.search(/o/i));
// console.log(name.indexOf("good"));
// // console.log(name.match(/good/gi));
// // console.log(Array.from(name.matchAll("good")));

// console.log(Array.from(name.matchAll("good"))[2].input);

// let num = 9;
// for (let i = 1; i <= num; i++) {
//   for (j = 0; j <= num; j++) {
//     console.log(i);
//     console.log(j);
//   }
// } 

// console.log("JAIABI");

// let w = "Welcome to JavaScript";

// console.log("substring", w.substring(18, 1));
// console.log(w.slice(18));
// // console.log(w.splice(18));
// console.log(w.length);
// console.log(w);

// let a = ["dog", "cat", "hen", "duck"];
// console.log(a.splice(0, "Added", "Theevu", "Vayu"));
// console.log(a);
// console.log(w.split("t"));
// console.log(w.length);

// console.log(w.charAt(0));
// console.log(w.indexOf("e"));
// console.log(w.lastIndexOf("t"));
// console.log(w.search(/e/i));
// console.log(w.match(/E/gi));
// console.log(Array.from(w.matchAll("t"))[0].input);

// let set = "Sat and Ran";
// let find = "Var";

// for (let i = 0; i < set.length; i++) {
//   if (set.substr(i, find.length) == find) {
//     console.log(`The value of ${find} is Existed in`, set);
//     break;
//   }
// }

// console.log(set.includes(find) ? "Exist" : "Not");

// if (set.includes(find)) {
//   console.log("Fun panrom");
// } else {
//   console.log("Kathi swag");
// }

// // ARRAY

// const arr = [5, 6, 0, 7, 8, 0, 9, 2, 3, 0, 4, 1, 3, 4, 0, 5, 6, 7];
// console.log(arr.length);
// const hug = [];

// let n = 0;
// while (n < arr.length) {

// if(arr[n] !==0){
//     hug.unshift(arr[n]);
// }else{
//     hug.push(arr[n]);
// }
//   n++;
// }

// console.log(hug);

// // console.log("vandi", hug.length);

// // let pos = hug.indexOf(0);
// // let rem = hug.splice(pos);
// // console.log(hug);

// let count = 0;

// let m = 0 ;
// while (m<hug.length) {
//     if(hug[m] == 0){
//         console.log('ccccccccccccc');
//         count ++ ;
//     }
//     m++ ;
// }

// console.log("count :" + count);

// for(let i=0 ; i<count ; i++){
//     hug.pop();
// }

// console.log("count hug :" ,hug);

// console.log("mAYAYA MAYA MAYA")

// const arr = [5, 6, 0, 7, 8, 0, 9, 2, 3, 0, 4, 1, 3, 4, 0, 5, 6, 7];
// let n = 0;
// let count = 0;
// let hug = [];

// while (n < arr.length) {
//   if (arr[n] !== 0) {
//     hug.unshift(arr[n]);
//   } else {
//     hug.push(arr[n]);
//     count++;
//   }
//   n++;
//   console.log(hug);
// }

// let zero = hug.indexOf(0);
// let rem = hug.splice(zero);
// console.log("Rem", rem);

// // while(count>0){
// // hug.pop()
// // count--;
// // }

// console.log("Splice", hug);

// const mem = [1, 2, 4, 5, 6, 7];
// console.log("Added", mem.splice(2, 0, 3));
// console.log("Add", mem);

// console.log("Updated", mem.splice(2, 1, 9));
// console.log("Update", mem);

// console.log("Removed", mem.splice(2, 1));
// console.log("Remove", mem);

// console.log(mem.length);
// console.log("Deleted", delete mem[2]); // Creates An empty item
// console.log("Delete", mem);
// console.log("Index", mem[2]);
// console.log(mem.length);

// // let copy = [2,5,7,9,4,1,8]

// // console.log(copy.copyWithin(5,1,5));

// // console.log(copy);

// let copy = [2, 5, 7, 9, 4, 1, 8];

// console.log('copywithin : " ', copy.copyWithin(2, 0, 4)); // Array's length doesnot change,instead it replaced
// // [targeted index,start copy from,stop copy from]

// let c = [45, 65, 23, 90, 65, 55, 89, 16]; // 45,65,23,65,55,89,89,16
// // console.log(c.copyWithin(3,4,6));
// console.log("arrayorobject", typeof c);

// console.log(c.fill(-77, 2, 4));

// let unjoined = "999 , lll , jjj";

// console.log(unjoined.split(","));
// let stored = unjoined.split(",");
// console.log("Stored", typeof stored);

// let joined = stored.join("+");
// console.log("Joined", typeof joined);

// console.log(isString(stored));

// function isString(value) {
//   if (typeof value === "string") {
//     return true;
//   }
//   return false;
// }

// console.log(isString(joined));

// let a = [55, 66, 77, 33, 5, 7, 99, 33, 22, 0, 99];

// const sortcorrect = (x, y) => {
//   return x - y;
// };

// const sor = sortcorrect(a);

// // console.log("sort1method",sor)

// const ascending = a.sort((a, b) => a - b);
// console.log("ascending_sorting", ascending);

// const descending = a.sort((a, b) => {
//   return b - a;
// });

// console.log(descending);

// console.log("Rest // Spread operator ", (d = [...c, ...a]));

// console.log(d[1]);

// let countt = 0;
// a.forEach((element) => {
//   if (element % 2 == 0) {
//     countt++;
//   }
// });

// console.log(countt);

// let nums = [2, 3, 4];
// let sum = 0;
// nums.forEach((element) => {
//   sum += Math.pow(element, 2);
// });

// console.log(sum);

// let names = ["Alice", "Bob", "Charlie"];

// names.forEach((element) => {
//   console.log("Hello", element);
// });

// let arry = [22, 5, 67, 90, 34];
// let max = arry[0];
// arry.forEach((element) => {
//   if (element > max) {
//     max = element;
//   }
// });

// console.log("max val :", max);

// let original = [1, 2, 3, 4];
// let doubledarray = [];

// let each = original.forEach((element) => element * 2);

// let map = original.map((element) => element * 2);

// console.log(each, "each");
// console.log(map, "map");

// const av = [5, 67, 23, 89, 45, 67, 90, 12, 34];

// const desc = av.sort((a, b) => b - a);
// console.log(av);
// console.log(desc);

// const asc = av.sort((a, b) => {
//   return a - b;
// });

// console.log(asc);

// console.log(av);

// // Map , ForEach

// const arrr = [2, 4, 6, 8];

// const mappedsquared = arrr.map((element) => {
//   return Math.pow(element, 2);
// });

// console.log(mappedsquared);

// const foreach = arrr.forEach((e) => {
//   console.log(Math.pow(e, 2));
// });

// const filtere = arrr.filter((e) => {
//   return e > 5;
// });

// console.log(filtere);

// const findy = arrr.find((e) => {
//   return e > 5;
// });

// console.log(findy);

// const somey = arrr.some((e) => {
//   return e > 4;
// });

// console.log(somey);

// const everyy = arr.every((e) => {
//   return e > 0;
// });

// console.log(everyy);

// const unq = arr.filter((elem) => {
//   return arr.indexOf(elem) == arr.lastIndexOf(elem);
// });

// console.log("unq", unq);

// const red = arrr.reduce((e, i) => {
//   return Math.abs(e - i);
// });

// console.log("red", red);

// function welcome(name) {
//   return "Helo" + name;
// }

// function firstmeet(greatday) {
//   const e = " Welcome";
//   return welcome(e + greatday);
// }

// console.log(firstmeet(" Jai"));


// let string = 'jaiiii' ;
// console.log(typeof string);
// console.log(typeof 9);
// console.log(typeof [{name:"jai"},{name:"Abi"}]);  
// console.log(typeof {name:"jai"});

// const arr1 = [1,2,3,{name:"jai"}];
// console.log(arr1[3]);

// const arr2 = ["1","2","3"];
// const arr3 = [{name:"jai"},{name:"Abi"}];
// const arr4 = [{"name":"jai"},{"name":"Abi"}];

// const obj1 = {name:"jai"};
// const obj2 = {"name":"jai","age":27};
// console.log(typeof obj2.name ,'objnametype');


// console.log(Object.keys(obj2));       // key
// console.log(Object.keys(arr3));       // indixes
// console.log(Object.keys(obj1));       // key
// console.log(Object.keys(obj2));

// console.log(typeof(Object.keys(obj2)),'type of key');    


// console.log(Array.isArray(arr1));
// console.log(typeof(typeof(obj3)));

// console.log(typeof isNaN,'nan');

// console.log(typeof(typeof(true)));
// console.log(typeof null);
// console.log(typeof undefined);
// let num = 9 ;

// console.log(Number.isNaN(num));
// console.log(Number.isInteger('9'));

// let check = 'hello'
// console.log(!isNaN(7),'checking'); 
// const checkres = isNaN(' ')
// console.log(checkres);


// console.log(!isString(7),'isStringgg');

// console.log(isNaN(NaN));


// console.log(typeof NaN);


// const objstr = {"name":"jai","age":27};
// // console.log(JSON.stringify(objstr))
// const conv = JSON.stringify(objstr)
// console.log(JSON.parse(conv));

// console.log(typeof(JSON));
// console.log(objstr.name);



// function getA(...a){
  
// console.log(a,'getA');
// }

// // Three dot operator

// const arr5 = [2,6,9];
// const arr6 = [8,9,0];

// console.log(...arr5,...arr6);

// const arr7 = [...arr5,...arr6]
// console.log(arr7,'arr7');

// // getA(2,4,6,8);
// // getA({"name":"jai","age":27},{"name":"jai","age":27});
// getA(arr5,arr6)













      


