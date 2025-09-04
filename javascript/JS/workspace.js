// // // const person = { name: "Jai" };
// // // console.log(person.name);

// // // person.name = "Ravi";
// // // console.log(person.name);

// // // // person = { name: "Sam" }; // ❌ Error

// // // let person1 = 6;

// // // const person2 = person1 + 5;

// // // console.log(person1); // 6
// // // console.log(person2); // 11

// // // const email = "Jairesh@gmail.com";

// // // const peru = email.slice(0, email.indexOf("@"));

// // // console.log("Hai " + peru + "!");

// // // const Hai = "abI";

// // // console.log(Hai.charAt(0).toUpperCase() + Hai.slice(1).toLowerCase());

// // // const arr = [1,2,3]

// // // arr[10] = 10

// // // console.log(arr.length);
// // // console.log(arr);
// // // console.log(arr[6]);

// // // let result = "5";
// // // if (isFinite(result)) {
// // //   console.log("Valid number:", result);
// // // } else {
// // //   console.log("Invalid or infinite result");
// // // }

// // // const check = '55'
// // // console.log(Math.round(check));

// // // console.log(typeof(NaN));
// // // console.log(isNaN(5));

// // // console.log(Number.isNaN(NaN));

// // // const exarray = [2,5,6]

// // // console.log(Math.min(...exarray));

// // // const jai = "Maruthamalai";

// // // const length = jai.length;

// // // const randomCheck = jai.charAt(Math.floor(Math.random() * length));

// // // console.log(randomCheck);

// // // a = 5 ;
// // // b = 25 ;
// // // c = 3 ;

// // // big = a ;

// // // if(b>big){
// // //     big = b
// // // }
// // // if(c>big){
// // //     big = c
// // // }

// // // console.log('Big number : ' + big);

// // // const fruits = ['orange','apple', 'koya','banana','grapes','cherry']

// // // fruits.push('Blueberry')
// // // fruits.unshift('Grapes')

// // // console.log(fruits);

// // // fruits.pop()
// // // console.log(fruits);
// // // fruits.shift()
// // // console.log(fruits);

// // // console.log('splice :',fruits.splice(1,3,'Pomegranite','Vaazhaipazham','Chenthuzhuvan','Yaathen','Kathali','Nendran'));
// // // console.log('splice result :' + fruits);

// // //

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

// // let num = 1;

// // while (true) {

// //       console.log(num);

// //     num++;
// //     if(num == 7){
// //       break;
// //     }

// // }

// // for(let i=1 ; i<=5 ; i++){
// //   let row = "";
// //   console.log("i :",i);

// //   for(let j=1 ; j<=i ; j++){
// //     row += "*"
// //     console.log("j :",j);

// //   }
// //      console.log(row);
// // }

// // const a = [];

// // const push_last = a.push("Hey", "Va", "Oorgitham", "Sorrpam");

// // console.log(push_last);
// // console.log(a);

// // const push_first = a.unshift("Hey", "Va", "Oorgitham", "Sorrpam");
// // console.log(a);

// // const del_last = a.pop();
// // console.log(del_last);
// // console.log(a);

// // const del_first = a.shift();
// // console.log(del_first);
// // console.log(a);

// // let s = 5;
// // let f = s++ + s; // 6

// // console.log(s); // 6
// // console.log(f); // 5

// // let z = 5;
// // let x = ++z;

// // console.log(z); // 6
// // console.log(x); // 6

// // let k = 5;
// // let l = --k;

// // console.log(k); // 4
// // console.log(l); // 4

// // let v = 5;
// // let j = v++ + ++v + v;
// // // ====>  ====>    ===>   ==>
// // //     5 ==> 7 ==> 7

// // // 5 + 7 + 7 ==> 19

// // console.log(v);
// // console.log(j);

// // let h = 5;
// // let g = h-- - --h - h;

// // //      5      3      3

// // console.log(h);
// // console.log(g);

// // let str = "hello";
// // let reversed = str.split("").reverse().join("");
// // console.log(reversed);

// // let colors = "red,green,blue";
// // let arr = colors.split(",");
// // console.log(arr);

// // function rev(str) {
// //   if (typeof str === "string") {
// //     return console.log(str.split(" ").reverse().join(" "));
// //   }
// //   return console.log("The passed parameter is not string");
// // }

// // rev("The sky is blue");

// // let strl = "I love coding";
// // let output = strl.split("").reverse().join("");
// // console.log(output);

// // var unconverted_mallu = "Appa";
// // let mallu = unconverted_mallu.toLowerCase();
// // let revmallu = mallu.split("").reverse().join("");
// // console.log(revmallu);

// // if (revmallu === mallu) {
// //   console.log(`The given word : ${unconverted_mallu} is a palindrome `);
// // } else {
// //   console.log(`The given word : ${unconverted_mallu} is not a palindrome `);
// // }

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

// // // Method Over-riding :

// // class Animal {
// //   speak() {
// //     console.log("Animal speaks");
// //   }
// //   walk() {
// //     console.log("Animal walks");
// //   }
// // }

// // const eagle = new Animal();
// // eagle.speak();

// // const lion = new Animal();
// // lion.speak();
// // console.log(lion.speak());

// // class Dog extends Animal {
// //   speak() {
// //     console.log("Dog barks");
// //   }
// // }

// // const pet = new Dog();
// // pet.speak();   // Dog barks (method overriding)

// // let courses = {
// //   frontend : "JS",
// //   backend : "Java"
// // }

// // console.log(courses);

// // Object.seal(courses)
// // courses["database"] = "MYSQL" ;
// // courses["frontend"] = "CSS" ;
// // console.log(courses);

// // Object.freeze(courses)
// // courses["frontend"] = "HTML" ;
// // console.log(courses);

// // console.log(5+5);     // 10
// // console.log(5/2);     // 2.5
// // console.log(1+"11");  // 111
// // console.log(1+"Eleven");  // 1Eleven
// // console.log(3*"3");    // 9
// // console.log(3-"2");    // 1
// // console.log("7"+"6");  // 76
// // console.log("7"-"3");   // 4
// // console.log(33/"11");   // 3
// // console.log(("77"/"3"));  // 25.66666

// /*
// Notes : 1) By default , all the arithematic operations will happen
//            between numbers and string number except addition
//         2) Between number and actual string , the arithematic
//            operations will return "NaN" only except addition
//         3) In this both operations, addition only do append
//            operation like 1+"Eleven" ==> 1Eleven , 1+"11" ==> 111  */

// // console.log(1 + true); // 2
// // console.log(true + true); // 2
// // console.log(false + false); // 0
// // console.log(true + false); // 1
// // console.log(false * null); // 0
// // console.log(true * null); // 0
// // console.log(false / null); // NaN
// // console.log(true / null); // infinity
// // console.log(false + undefined); // NaN
// // console.log(1 + (true * 2) / 3); // 1.6666

// // console.log(5 + null); // 5
// // console.log(5 * null); // 0
// // console.log(5 / null); // infinity

// // console.log([3, 4, 5] + [3, 5, 6]); // 3,4,53,5,6
// // console.log("3,4,5" + "3,5,6"); // 3,4,53,5,6
// // console.log("3,4,5" / "3,5,6"); // NaN
// // console.log(7 + undefined); // NaN

// // var x;
// // console.log(x); // undefined

// // let y = 2;
// // var z = ++y + ++y + --y;

// // console.log(y); // 3
// // console.log(z); // 10

// // let [a, b, c] = "Hello";
// // console.log(a); // H

// // let d,
// //   e,
// //   f = [1, 2, 3];
// // console.log(d); // undefined

// // let j = "acd";
// // console.log(j > ["bbc"]);

// // let k = "21";
// // console.log(k > "3");

// // let s = [{ name: { class: { city: ["Chennai", "Banglore"] } } }];
// // console.log(s[0].name.class.city[1]);
// // // console.log(s[0].name.class.city[1]);

// // let l = {};
// // Object.freeze(l);
// // l["a"] = 1;
// // console.log(l);

// // let qw = [2, 1];
// // [qw[0], qw[1]] = [qw[1], qw[0]];
// // console.log(qw);

// // let firstName, lastName, price, discount, totalPrice;

// // firstName = "Ajay";
// // lastName = "Kumar";
// // price = 200;
// // discount = 0.25 * price;
// // totalPrice = price - discount;
// // console.log(totalPrice);

// // for (let i = 1; i <= 10; i++) {
// //   let row = "10*" + i + "=" + 10 * i;
// //   console.log(row);
// // }

// // function isInRange(num, min, max) {
// //   return num >= min && num <= max;
// // }

// // console.log(isInRange(8, 7, 9));

// // function isVowel(char) {
// //   if (
// //     char.includes("a") ||
// //     char.includes("e") ||
// //     char.includes("i") ||
// //     char.includes("o") ||
// //     char.includes("u")
// //   ) {
// //     return console.log("Given char contains vowel character");
// //   }
// //   return console.log("Given char doesnot contains a vowel");
// // }

// // isVowel("itttttt");

// // for (let i = 0; i < 10; i += 2) {
// //   console.log(i);
// // }

// // if (2 == 2 && 4 < 5) {
// //   console.log("Kaththisandai");
// // }

// // console.log(5 < 6 && 6 == "6" && "k" === "k" && "abi" === "sheth");

// // {
// //   5 > 6 ? console.log("kkk") : console.log("lll");
// // }

// // let n = -5;
// // let v = n < 0 ? -n : n;

// // console.log(v);

// // // Conditional Statements

// // // if

// // let num = "23";
// // if (!num) {
// //   console.log(`There is no value`);
// // }

// // // if else
// // if (num > 9) {
// //   console.log(`The given ${num} is an integer`);
// // } else {
// //   console.log(`The given ${num} is not an integer`);
// // }

// // if (num == "9") {
// //   console.log("They are same");
// // } else if (typeof num === "number") {
// //   console.log("Its string");
// // } else if (!isNaN(num)) {
// //   console.log("Itz definitely number");
// // } else {
// //   console.log("Itz wrong");
// // }

// // if(2<7){
// //   console.log('llll');
// // }
// // else if(8>0){
// // console.log("kkk");
// // }
// // else{
// //   console.log("else");
// // }

// // if (40 > 60) {
// //   console.log("Greater than 60");
// // } else if (40 > 50) {
// //   console.log("Greater than 50");
// // } else if (40 > 40) {
// //   console.log("Greater than 40");
// // } else if (40 > 30) {
// //   console.log("Greater than 30");
// // } else {
// //   console.log("None of the above");
// // }

// // let vari = "born";
// // let eligiblity = 18;
// // if (vari === "born") {
// //   if (typeof vari !== "string") {
// //     if (vari.length == 4) {
// //       if (57 >= eligiblity) {
// //         console.log("Allow to vote");
// //       }
// //     }
// //   } else {
// //     console.log("Itz not a string");
// //   }
// // } else {
// //   console.log("Dont Allow to vote");
// // }

// // //

// // let dc = [
// //   {
// //     userId: 1,
// //     id: 1,
// //     title: "quidem molestiae enim",
// //   },
// //   {
// //     userId: 1,
// //     id: 2,
// //     title: "sunt qui excepturi placeat culpa",
// //   },
// //   {
// //     userId: 1,
// //     id: 3,
// //     title: "omnis laborum odio",
// //   },
// // ];

// // dc.forEach((element) => {
// //   console.log(element);
// // });

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

// // do {
// //   input = prompt("Please enter the value");

// //   let v = Number(input);

// //   if (v !== 0) {
// //     sumarray.push(v);
// //   }
// // } while (Number(input) !== 0);

// // for (let i = 0; i < sumarray.length; i++) {
// //   sum += sumarray[i];
// // }

// // console.log(sum);

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

// // Reverse a number

// let unreversed = 9870;
// let revs = "";

// while (unreversed > 0) {
//   let rev = unreversed % 10;
//   revs += rev;
//   unreversed = Math.floor(unreversed / 10);
// }
// console.log(revs);

// // console.log(rev);
// // console.log(unreversed);

// let summingnum = 9876;
// let summednum = 0;

// do {
//   let sum = summingnum % 10;
//   summednum += sum;
//   summingnum = Math.floor(summingnum / 10);
// } while (summingnum > 0);

// console.log(summednum);

// // var user;
// // do {
// //     user = prompt(user ? "Do you want to continue ?" : "Are you ready ?").toLowerCase();
// //   }
// //  while (user !== "yes");

// // Palindrome or Not

// let num = 121;
// const comparingnum = num;
// let revnum = "";

// while (num > 0) {
//   let lastnum = num % 10;
//   num = Math.floor(num / 10);
//   revnum += lastnum;
// }

// if (comparingnum.toString() === revnum) {
//   console.log(`The gn num ${comparingnum} is a palindrome`);
// } else {
//   console.log(`The gn num ${comparingnum} is not a palindrome`);
// }

// // Factorial

// let number = 7;
// let fin = 1;

// do {
//   fin *= number;
//   number--;
// } while (number > 0);

// console.log(fin);

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

// // Reverse and print one by one

// let d = 123;

// do {
//   let r = d % 10;
//   console.log(r);
//   d = Math.floor(d / 10);
// } while (d > 0);

// console.log("starts");

// // Power
// let a = 1;
// let last = 1000;
// while (last > a) {
//   let b = Math.pow(a, 2);
//   a += a;
//   console.log(a);
// }

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
//   console.log(`${table} * ${i}  = ${ans}`);
// }

// //Sum of N Numbers

// let N = 5;
// let res = 0;
// for (let i = 0; i <= N; i++) {
//   res += i;
// }

// console.log(res);

// // Factotial

// let GnNum = 5;
// let fac = 1;

// for (let i = 1; i <= GnNum; i++) {
//   fac *= i;
// }
// console.log(fac);

// // Even

// // let evn = 17;

// // for (let i = 1; i <= evn; i++) {
// //   if (i % 2 == 0) {
// //     // console.log(i);
// //     process.stdout.write(i + "," + " "); // To print in the same line
// //   }
// // }

// // let lower = 1;
// // let upper = 50;

// // for (let i = lower; i <= upper; i++) {
// //   if (i % 3 == 0 && i % 5 == 0) {
// //     process.stdout.write("FizzBuzz" + " ");
// //   } else if (i % 3 == 0) {
// //     process.stdout.write("Fizz" + " ");
// //   } else if (i % 5 == 0) {
// //     process.stdout.write("Buzz" + " ");
// //   } else {
// //     process.stdout.write(i + " ");
// //   }
// // }

// // Right-Angled Triangle

// // let patnum = 4;

// // for (i = 0; i < patnum; i++) {
// //   for (let j = 0; j < patnum; j++) {
// //     console.log("*");
// //   }
// // }

// // let resl = "";
// // let l = 5;

// // for (i = 1; i <= 4; i++) {

// //   for (j = 0; j <i; j++) {
// //     resl += "*";
// //   }

// //   for (y = 1; y < l - i; y++) {
// //     resl += " ";
// //   }
// //     resl += "\n";
// // }

// // console.log(resl);

// // let pat = 8;
// // let str = "";

// // for(i = 1; i <=6; i++){

// // for(j = 0; j< i-1; j++){
// //     str += "*";
// // }
// //      str += "\n";
// // }

// // console.log(str)

// // let row = "";
// // let no = 4;

// // for (let i = 1; i < 5; i++) {
// //   for (let space = 0; space <= no - i; space++) {
// //     row += " ";
// //   }
// //   for (let star = 0; star < i; star++) {
// //     row += "*";
// //   }
// //   row += "\n";
// // }

// // console.log(row);

// // let nat = "" ;

// // for(i=1;i<=7;i++){
// //  for(j=7-i;j>0;j--) {
// //   nat+="*";
// //  }
// //  nat+="\n"
// // }

// // console.log(nat);

// // let st = "";
// // let cl = 7;

// // for(let i = 0 ; i<7 ; i++){
// //   for(k=cl-i;k<7;k++){
// //     st+=" ";
// //   }

// //   for(j = 0; j<7 ; j++){
// //     st+="*"
// //   }

// // st+="\n";
// // }

// // console.log(st);

// // Pyramid

// // let numb = 5;
// // let row = "";

// // for (i = 1; i <= numb; i++) {
// //   let middle = Math.ceil(numb / 2);
// //   // console.log(middle);
// //   for (m = 1; m <= middle - i; m++) {
// //     row += " ";
// //   }

// //   row += "\n";
// // }

// // console.log(row);

// // Pyramid

// // let nm = 5;
// // let row = "";

// // for (let i = 1; i <= nm; i++) {
// //   // Add spaces
// //   for (let space = 1; space <= nm - i; space++) {
// //     row += " ";
// //   }
// //   // Add stars
// //   for (let star = 1; star <= i; star++) {
// //     row += "* ";
// //   }
// //   row +="\n"
// // }

// // console.log(row);

// // let no_of = 5 ;
// // let row = "" ;

// // for(i=1 ; i<=no_of ; i++){
// //   for(let space = 1; space <= no_of-i ; space++){
// //     row +=" "
// //   }
// //   for(let star = 1; star <=i ; star++){
// //     row +="* "
// //   }
// //   row +="\n"
// // }

// // console.log(row);

// // Inverted Pyramid

// // let n_of = 5 ;
// // let roww = "" ;

// // for(i=1;i<=n_of;i++){
// //   for(let star = i ; star<=n_of ; star++){
// //     roww += "* "
// //   }
// //     roww += "\n"

// //   for(let space = 1 ; space <=i ; space++){
// //   roww += " "

// //   }
// // }

// // console.log(roww);

// // Fully symmetric triangle

// // let numb = 5;

// // for (let i = 1; i <= numb; i++) {
// //   let row = "";

// //   // Add spaces
// //   row += " ".repeat(numb - i);

// //   // Add stars (2*i - 1)
// //   row += "*".repeat(2 * i - 1);

// //   console.log(row);
// // }

// // let nb = 5 ;
// // let row = "" ;

// // for(i = nb ; i >=1 ; i--){
// //   for(let space = 1 ; space <= nb-i ; space ++){
// //     row += " "
// //   }
// //       for(let star = 1 ; star <= 2*i -1 ; star ++){
// //       row += "*"
// //     }
// //   row += "\n"
// // }

// // console.log(row);

// // let nuum = 7 ;
// // let rw = "" ;

// // for(let i=0 ; i<nuum ; i++){
// //   for(let space = 0 ; space < i ; space ++){
// //     rw +="  "
// //   }

// //   for(let star = i ; star < nuum ; star ++ ){
// //     rw +="* "
// //   }
// //   rw+="\n"
// // }

// // console.log(rw);

// // let nbb = 7 ;
// // let rww = "" ;

// // for(let i=1; i<=nbb; i++){
// // for(let space = i; space < nbb ; space++){
// //   rww += "  "
// // }
// // for(let star = 0 ; star < i ; star++){
// //   rww += "* "
// // }
// // rww += "\n"
// // }

// // console.log(rww);

// // L

// // let lnum = 4;
// // let l = "";

// // for (let i = 0; i < lnum; i++) {
// //   for (let ll = 0; ll < 1; ll++) {
// //     l += "* ";
// //   }
// //   if (i == lnum - 1) {
// //     for (let space = 0; space < lnum-1; space++) {
// //       l += "* ";
// //     }
// //   }
// //   else{
// //      for (let space = 0; space < lnum-1; space++) {
// //       l += " ";
// //     }
// //   }

// //   l += "\n";
// // }

// // console.log(l);

// // let line = 4;
// // let row = "";

// // for(let i = 0; i<line; i++){

// // if(i == line-1){

// //   for(let star = 0; star<1; star++){
// //     row += "*";
// //   }
// // }else{

// // for(let space =0; space< line-1; space++){

// // row +=" ";
// // }
// // }
// // row +="\n";

// // }

// // console.log(row);

// SWAPPING OR SORTING

// const arr = [6, 7, 8, 9, 4, 5];

// console.log(arr.sort());

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//     console.log(arr);
//   }
// }

// const arr = [6, 7, 8, 9, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   let min = i;
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[min] > arr[j]) {
//       min = j;
//     }
//   }
//   let temp = arr[i];
//   arr[i] = arr[min];
//   arr[min] = temp;
// }

// console.log(arr);

// SEARCHING METHOD IN ARRAY :

// const arr = [6, 7, 8, 9, 4, 5, 7];

// function searchval(val) {
//   for (i = 0; i < arr.length; i++) {
//     if (val == arr[i]) {
//       console.log("Matching found : " + arr[i]);
//       break;
//     }
//   }
// }

// searchval(7);

// BINARY SEARCH METHOD OF ARRAY :

// const arry = [
//   6, 0, 8, 9, 4, 5, 7, 90, 66, 77, 33, 67, 99, 44, 22, 96, 55, 70, 87, 90, 78,
//   64, 75, 46, 89, 23, 76, 33, 23, 65,
// ];

// for (let i = 0; i < arry.length; i++) {
//   let min = i;
//   for (let j = i + 1; j < arry.length; j++) {
//     if (arry[min] > arry[j]) {
//       min = j;
//     }
//   }
//   let temp = arry[i];
//   arry[i] = arry[min];
//   arry[min] = temp;
// }

// console.log(arry);

// let start = 0;
// let end = arry.length - 1;

// let choose = 64;
// let track = 0;
// let pramid = 0;

// while (start < end) {
//   let jai = Math.ceil((start + end) / 2);

//   if (arry[start] == choose) {
//     console.log("start : " + arry[start]);
//     break;
//   }
//   if (arry[end] == choose) {
//     console.log("end : " + arry[end]);
//     break;
//   }
//   if (arry[jai] == choose) {
//     console.log("mid : " + arry[jai]);
//     break;
//   }

//   if (choose > arry[jai]) {
//     start = jai;
//   } else {
//     end = jai;
//   }

//   pramid = jai;

//   if (pramid == jai) {
//     track++;
//   }
//   if (track > 4) {
//     console.log("Given Value is not Exist");
//     break;
//   }
// }

// // let jai = (start+end)/2 ;
// // console.log(parseInt(jai));

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

let w = "Welcome to JavaScript";

console.log("substring", w.substring(18, 1));
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

const arr = [5, 6, 0, 7, 8, 0, 9, 2, 3, 0, 4, 1, 3, 4, 0, 5, 6, 7];
let n = 0;
let count = 0;
let hug = [];

while (n < arr.length) {
  if (arr[n] !== 0) {
    hug.unshift(arr[n]);
  } else {
    hug.push(arr[n]);
    count++;
  }
  n++;
  console.log(hug);
}

let zero = hug.indexOf(0);
let rem = hug.splice(zero);
console.log("Rem", rem);

// while(count>0){
// hug.pop()
// count--;
// }

console.log("Splice", hug);

const mem = [1, 2, 4, 5, 6, 7];
console.log("Added", mem.splice(2, 0, 3));
console.log("Add", mem);

console.log("Updated", mem.splice(2, 1, 9));
console.log("Update", mem);

console.log("Removed", mem.splice(2, 1));
console.log("Remove", mem);

console.log(mem.length);
console.log("Deleted", delete mem[2]); // Creates An empty item
console.log("Delete", mem);
console.log("Index", mem[2]);
console.log(mem.length);

// let copy = [2,5,7,9,4,1,8]

// console.log(copy.copyWithin(5,1,5));

// console.log(copy);

let copy = [2, 5, 7, 9, 4, 1, 8];

console.log('copywithin : " ', copy.copyWithin(2, 0, 4)); // Array's length doesnot change,instead it replaced
// [targeted index,start copy from,stop copy from]

let c = [45, 65, 23, 90, 65, 55, 89, 16]; // 45,65,23,65,55,89,89,16
// console.log(c.copyWithin(3,4,6));
console.log("arrayorobject", typeof c);

console.log(c.fill(-77, 2, 4));

let unjoined = "999 , lll , jjj";

console.log(unjoined.split(","));
let stored = unjoined.split(",");
console.log("Stored", typeof stored);

let joined = stored.join("+");
console.log("Joined", typeof joined);

console.log(isString(stored));

function isString(value) {
  if (typeof value === "string") {
    return true;
  }
  return false;
}

console.log(isString(joined));

let a = [55, 66, 77, 33, 5, 7, 99, 33, 22, 0, 99];

const sortcorrect = (x, y) => {
  return x - y;
};

const sor = sortcorrect(a);

// console.log("sort1method",sor)

const ascending = a.sort((a, b) => a - b);
console.log("ascending_sorting", ascending);

const descending = a.sort((a, b) => {
  return b - a;
});

console.log(descending);

console.log("Rest // Spread operator ", (d = [...c, ...a]));

console.log(d[1]);

let countt = 0;
a.forEach((element) => {
  if (element % 2 == 0) {
    countt++;
  }
});

console.log(countt);

let nums = [2, 3, 4];
let sum = 0;
nums.forEach((element) => {
  sum += Math.pow(element, 2);
});

console.log(sum);

let names = ["Alice", "Bob", "Charlie"];

names.forEach((element) => {
  console.log("Hello", element);
});

let arry = [22, 5, 67, 90, 34];
let max = arry[0];
arry.forEach((element) => {
  if (element > max) {
    max = element;
  }
});

console.log("max val :", max);

let original = [1, 2, 3, 4];
let doubledarray = [];

let each = original.forEach((element) => element * 2);

let map = original.map((element) => element * 2);

console.log(each, "each");
console.log(map, "map");

const av = [5, 67, 23, 89, 45, 67, 90, 12, 34];

const desc = av.sort((a, b) => b - a);
console.log(av);
console.log(desc);

const asc = av.sort((a, b) => {
  return a - b;
});

console.log(asc);

console.log(av);

// Map , ForEach

const arrr = [2, 4, 6, 8];

const mappedsquared = arrr.map((element) => {
  return Math.pow(element, 2);
});

console.log(mappedsquared);

const foreach = arrr.forEach((e) => {
  console.log(Math.pow(e, 2));
});

const filtere = arrr.filter((e) => {
  return e > 5;
});

console.log(filtere);

const findy = arrr.find((e) => {
  return e > 5;
});

console.log(findy);

const somey = arrr.some((e) => {
  return e > 4;
});

console.log(somey);

const everyy = arr.every((e) => {
  return e > 0;
});

console.log(everyy);

const unq = arr.filter((elem) => {
  return arr.indexOf(elem) == arr.lastIndexOf(elem);
});

console.log("unq", unq);

const red = arrr.reduce((e, i) => {
  return Math.abs(e - i);
});

console.log("red", red);

function welcome(name) {
  return "Helo" + name;
}

function firstmeet(greatday) {
  const e = " Welcome";
  return welcome(e + greatday);
}

console.log(firstmeet(" Jai"));

// Higher Order Function

function operate(a, b, operation) {
  return operation(a, b);
}

function multiply(x, y) {
  return x * y;
}

function add(x, y) {
  return x + y;
}

var inputvalue1 = 11;
var inputvalue2 = 3;
var operatesymbol = "*";
var val = "";

switch (operatesymbol) {
  case "+":
    val = add;
    break;
  case "-":
    val = sub;
    break;
  case "*":
    val = multiply;
    break;
  case "/":
    val = division;
    break;
  default:
    console.log("Nothing matches the operation");
}

console.log(operate(inputvalue1, inputvalue2, val));

// Factorial (Recursive Function)

function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(6));

// Generator Function

function* counts() {
  let i = 1;
  while (true) {
    yield i++;
  }
}

const counter = counts();
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);

// Currying function

function summ(a) {
  return function (b) {
    return function (c) {
      // return a+b;
      return a + b + c;
    };
  };
}

const summy = (a) => (b) => (c) => a + b + c;
console.log(summy(2)(3)(7));

console.log(summ(2)(3)(7)); // 12

// Functions

// Arrow Function

const arrowfunct = (a, b) => a + b;
console.log(arrowfunct(7, 3));

const arrowwithreturn = (a, b) => {
  return a * b;
};
console.log(arrowwithreturn(5, 6));

const arrrt = (a, b) => a + b;
console.log(arrrt(5, 9));

const ar = (a, b) => {
  return a * b;
};

console.log(ar(4, 7));

// Named Function

function Jai(name) {
  // return `My name is ${name}`;
  return console.log(`My name is ${name}`);
}

Jai("Jairesh");

// Annonyms
(function () {
  console.log("lalialala");
})();

// setTimeout(function(){
//   console.log("Print After 2 Seconds")
// }), 2000;

function outer() {
  return function inner() {
    console.log("I ran");
  };
}

const run = outer();

run();

function Joe(cal) {
  console.log("I came inside");
  cal();
}

function callback(wal) {
  console.log("Naan thaanda Call Back !!!");
  wal();
}

function wallback() {
  console.log("Na varmaten");
}

Joe(function () {
  callback(wallback);
});

// setTimeout(function(){
//   console.log('Itz Jai Timeout');
// }),2000 ;

const typedfunc = function (a, b) {
  return a - b;
};

console.log(typedfunc(10, 2));

function fact(n) {
  if (n == 1) return 1;
  return n * fact(n - 1);
}

console.log(fact(7));

function kootu(s) {
  if (s == 1) return 1;
  return s + kootu(s - 1);
}

console.log(kootu(6));

// Fibonocci

function fibino(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fibino(n - 1) + fibino(n - 2);
}

console.log("fibino:", fibino(8));
console.log("substring", w.substring(18, 20));

function countdown(n) {
  if (n === 0) {
    console.log("Done!");
    return;
  }
  console.log(n);
  countdown(n - 1);
}

countdown(5);

// Currying Function

const cur = (a, b) => {
  return a + b;
};
console.log(cur(2, 5));

const curr = (a, b) => a + b;
console.log(curr(11, 2));

const curry = (a) => (b) => (c) => a + b + c;
const curyi = function (a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
};

console.log(curyi(18)(13)(9));
console.log(curry(8)(3)(9));


// Sum using recursive function

function sumr(n) {
  if (n == 1) return 1;
  return n + sumr(n - 1);
}

console.log(sumr(7));

// Fibonacci series using recursive functon

function fib(n){
  if(n == 0) return 0 ;
  if(n == 1 ) return 1;
  return fib(n-1) + fib(n-2);
}

console.log('fib: ',fib(6));

// 0   ==> 0 ;
// 1   ==> 1 ;
// 2   ==> 1 ;
// 3   ==> 2 ;
// 4   ==> 3 ;
// 5   ==> 5 ;
// 6   ==> 8 ;

// Reverse a strring using recursion

// const str = "hello" ;

// const st = str.split(",");
// const s = st.reverse();
// const sr = s.join();


// console.log(str[0]); 
// console.log(str.substring(1)); 
// console.log(str.substring(1) + str[0] );



// return str = str.substring(1) + str[0]
// str = h+e+l+l+o;

function reverseString(str) {
  console.log("Input:", str);

  if (str === "") {
    console.log("Base case reached, returning empty string");
    return "";
  }

  const withoutFirst = str.substr(1);   // remove first char
  const firstChar = str[0];             // save first char

  console.log(`Peeling off '${firstChar}', remaining: "${withoutFirst}"`);

  const reversedRest = reverseString(withoutFirst);

  const result = reversedRest + firstChar;
  console.log(`Adding back '${reversedRest}'->'${firstChar}' → "${result}"`);

  return result;
}

console.log("Final result:", reverseString("hello"));

function reverseString(str) { if (str === "") return ""; return reverseString(str.substr(1)) + str[0]; } console.log(reverseString("hello"));

let string = 'jaiiii' ;
console.log(typeof string);
console.log(typeof 9);
console.log(typeof [{name:"jai"},{name:"Abi"}]);  
console.log(typeof {name:"jai"});

const arr1 = [1,2,3,{name:"jai"}];
console.log(arr1[3]);

const arr2 = ["1","2","3"];
const arr3 = [{name:"jai"},{name:"Abi"}];
const arr4 = [{"name":"jai"},{"name":"Abi"}];

const obj1 = {name:"jai"};
const obj2 = {"name":"jai","age":27};
console.log(typeof obj2.name ,'objnametype');


console.log(Object.keys(obj2));       // key
console.log(Object.keys(arr3));       // indixes
console.log(Object.keys(obj1));       // key
console.log(Object.keys(obj2));

console.log(typeof(Object.keys(obj2)),'type of key');    


console.log(Array.isArray(arr1));
console.log(typeof(typeof(obj3)));

console.log(typeof isNaN,'nan');

console.log(typeof(typeof(true)));
console.log(typeof null);
console.log(typeof undefined);
let num = 9 ;

console.log(Number.isNaN(num));
console.log(Number.isInteger('9'));

let check = 'hello'
console.log(!isNaN(7),'checking'); 
const checkres = isNaN(' ')
console.log(checkres);


console.log(!isString(7),'isStringgg');

console.log(isNaN(NaN));


console.log(typeof NaN);


const objstr = {"name":"jai","age":27};
// console.log(JSON.stringify(objstr))
const conv = JSON.stringify(objstr)
console.log(JSON.parse(conv));

console.log(typeof(JSON));
console.log(objstr.name);



function getA(...a){
  
console.log(a,'getA');
}

// Three dot operator

const arr5 = [2,6,9];
const arr6 = [8,9,0];

console.log(...arr5,...arr6);

const arr7 = [...arr5,...arr6]
console.log(arr7,'arr7');

// getA(2,4,6,8);
// getA({"name":"jai","age":27},{"name":"jai","age":27});
getA(arr5,arr6)













      


