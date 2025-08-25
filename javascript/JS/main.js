// console.log('Hiiiiii');

// // // String Methods
// const myVariable = 'Mathematics'

// console.log(typeof(myVariable));
// console.log(myVariable.length);
// console.log(myVariable.charAt(2));
// console.log(myVariable.indexOf("at"))
// console.log(myVariable.search("i"));
// console.log(myVariable.lastIndexOf("at"));
// console.log(myVariable.indexOf("z"));      // -1
// console.log(myVariable.lastIndexOf("z"));  // -1

// console.log(myVariable.slice(5,8));
// console.log(myVariable.slice(5,2));   // No output
// console.log(myVariable.slice(5,-1));   // Initial remains same , second parameter starts from reverse
// console.log(myVariable.slice(5,12));  // Starts correctly excecutes till last
// console.log(myVariable.slice(5));   // Same O/P

// console.log(myVariable.toUpperCase());
// console.log(myVariable.toLowerCase());

// console.log(myVariable.includes("mat"));
// console.log(myVariable.split('t'));
// console.log(myVariable.split(' '));
// console.log(myVariable.split(''));
// console.log(myVariable.replace("cs","c"))

// // // Number Methods
// const myStringNumber = '42' ;
// const myString = 'Forty Two'
// const myNumber = 42 ;
// const myFloat = 42.05 ;

// console.log(myStringNumber);
// console.log(myString);
// console.log(myNumber);
// console.log(myFloat);

// console.log(myStringNumber == myNumber);
// console.log(myStringNumber === myNumber);
// console.log("Float :" , myFloat === myNumber);

// console.log('myStringNumber',Number(myStringNumber));     // Number ==> type conversion to NUMBER
// console.log('myStringNumber typeof',typeof(Number(myStringNumber)));
// console.log(Number(myStringNumber) === myNumber);
// console.log(Number(myString));

// console.log('false :',Number(false));
// console.log('Undefined :' ,Number(undefined));
// console.log('Null :' ,Number(null));
// console.log('true :' ,Number(true));

// console.log('isInteger :',Number.isInteger(myStringNumber));
// console.log(Number.isFinite(myFloat));

// let result = "5";
// if (isFinite(result)) {
//   console.log("Valid number:", result);
// }
//  else {
//   console.log("Invalid or infinite result");            // true (not strict) before number conversion
// }

// let result1 = "5";
// if (Number.isFinite(result1)) {
//   console.log("Valid number:", result1);
// } else {
//   console.log("Invalid or infinite result");           // false (strict)
// }

// console.log("isInteger for String Number : " ,Number.isInteger(myStringNumber));
// console.log("isInteger for String : " ,Number.isInteger(myString));

// console.log("parseFloat for String Number : " , Number.parseFloat(myStringNumber));

// // parseFloat("3.14");        // ✅ 3.14
// // parseFloat("10.5px");      // ✅ 10.5 (stops at "p")
// // parseFloat("100");         // ✅ 100
// // parseFloat("12.34.56");    // ✅ 12.34 (stops after first dot)
// // parseFloat("abc123");      // ❌ NaN (starts with a letter)

// // Eg for parsefloat

// // let input = "45.67kg"; // from user input
// // let weight = parseFloat(input);

// // console.log(weight); // ✅ 45.67 (used for calculation)

// const parseFloatString = '18.0112'
// console.log('parseFloatString for Decimal :',Number.parseFloat(parseFloatString)); //18.0112

// const parseFloatString1 = '18.0112aaaddd'
// console.log('parseFloatString for others after Decimal :',Number.parseFloat(parseFloatString1)); //18.0112

// const parseFloatString2 = 'aaaddd18.0112'
// console.log('parseFloatString for Decimal after others :' ,Number.parseFloat(parseFloatString2));  // NaN

// const parseFloatString3 = '12.34.56'
// console.log('parseFloatString for Decimal values with more than one dot :' ,Number.parseFloat(parseFloatString3));  // 12.34 (stops after first dot)

// const parseIntString1 = '18.0112aaaddd'
// console.log(Number.parseInt(parseIntString1));      // 18

// const parseIntString2 = '1aaa8.0112aaaddd'
// console.log(Number.parseInt(parseIntString2));      // 1

// const toFixedFloat = 42.566

// console.log(Number.parseFloat(toFixedFloat).toFixed(2));  // converts the more decimal value on basis of 6 and above // roundoff - 5 and above
// console.log(typeof(Number.parseFloat(toFixedFloat).toFixed(2)));  // whenever toFixed is used , it gets converted into a string

// // Example :

// // let num = 123.456;
// // let fixed = num.toFixed(2);

// // console.log(typeof num);     // 123.456 (number)
// // console.log(fixed)           // "123.46"
// // console.log(typeof fixed);  // "string"

// const NaNNumber = "42"

// console.log('NanNumber(strict) :' ,Number.isNaN(NaNNumber));
// console.log('NanNumber(non-strict) :' ,isNaN(NaNNumber));
// const NaNString = "Jai"

// const con = Number(NaNString);

// console.log(Number.isNaN(con));

// console.log('NanString(strict) :' ,Number.isNaN(NaNString));
// console.log('NanString(non-strict) :' ,isNaN(NaNString));

// console.log(Number(NaNString));

// Important Notes :
/*For isInteger,isFinite,isNan , by default it do typeconvertion in which
          it tries to convert the value into number and then checks the condition 
          whereas in strict method while using ( Number.isInteger, Number.isNaN etc ) 
          does not do typeconvertion  ==> Clear it later */

// // Math Properties

// const value = 6.51;

// console.log('Math absolute',Math.abs(-45)); // 45 use for remove the negative sign
// console.log(Math.PI);    // 3.14159...
// console.log(Math.trunc(Math.PI));    //3
// console.log((Math.PI).toFixed(2)) ;  //3.14
// console.log('Round Off',Math.round(Math.PI));    //3
// console.log('Round Off',Math.round(value));    //7

// console.log(Math.round(3.89));    // 4
// console.log(Math.trunc(3.89));    // 3

// console.log(Math.ceil(3.2));      // 4(goes to next)
// console.log(Math.floor(3.9));     // 3(stays there)

// // Key Difference btn Trunk and Floor
// console.log(Math.trunc(3.7));  // 3
// console.log(Math.trunc(-3.7)); // -3

// console.log(Math.floor(3.7));  // 3
// console.log(Math.floor(-3.7)); // -4

// console.log(Math.pow(2,3));     // 8

// console.log(Math.min(2,82,98,1));   // 1

// console.log(Math.max(2,82,98,1));    // 98

// console.log(Math.random());    //random btn 0 and 1 [0.01 - 0.99]
// console.log(Math.floor(Math.random()*100 )+ 1);  //0.99 * 100 ==> Math.floor(99) ==> 99 + 1 ==> 100  ==> Between 1 and 100

// Math.floor(Math.random() * (max - min + 1)) + min      [For any interval values]
// let min = 40 , max = 75 ;
// const randomCheck = Math.floor(Math.random() * (max - min + 1)) + min
// const randomCheck = Math.floor(Math.random() * (36)) + 40
// console.log(randomCheck,'randomCheck');

// const RandomChallenge = 'Jairesh'
// console.log(RandomChallenge.length);
// console.log(Math.floor(Math.random() ));
// console.log(RandomChallenge.charAt(Math.floor(Math.random()*RandomChallenge.length )));

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
let j = 50;

do {
  console.log(j); // Only Once
  j += 1;
} while (j < 50);

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

const demo = "malayalam";
let array = [];

for (i = 0; i < demo.length; i++) {
  let count = 0;

  for (j = 0; j < demo.length; j++) {
    if (demo[i] == demo[j] && i !== j) {
      count++;
    }
  }

  let repeated = false;
  for (let k = 0; k < array.length; k++) {
    if (array[k] == demo[i]) {
      repeated = true;
    }
  }

  if (count > 0 && repeated == false) {
    array.push(demo[i]);
    console.log("ans:", demo[i]);
  }
}
console.log(array);

// // Break

// let k = 0 ;

// while (k<=6){
// if(k === 3){
//     break ;                   // Breaks the loop
// }
// k++
// }

// console.log(k);

// // Continue

// for (i = 1 ; i <6 ; i ++ ){

//     if(i === 3){
//         continue          // try break too
//                              // Continue the loop skipping that particular
//     }
//     console.log(i);

// }

// // Functions

// function sum(num1,num2){
//     return num1 + num2
// }

// console.log(sum(12,2));
// console.log(sum(1,2));
// console.log(sum(-1,2));

// function sum(num1,num2){

//     if(num2 === undefined){
//         return num1 + num1
//     }
//     return num1 + num2          // if not enough parameter is passed it will be taken as undefined
// }

// console.log(sum(12));

// function getUserNameFromMail(email){
//     return (email.slice(0,email.indexOf("@")))
// }

// console.log(getUserNameFromMail("jai@gmail.com"));

// function toProperCase(name){
//     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
// }

// console.log(toProperCase("jairesh"));

// const toProperCasee = function(name){
//     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
// }

// console.log(toProperCasee("jairesh"));

// const toProperCaseee = (name) => {
//     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
// }

// console.log(toProperCaseee("jairesh"));

// // Scope

// // let
// let a = 5 ;
// let b = a

// {
//     let d = 7 ;
//     console.log("Let1:", a);                // 7,5
// }

// console.log("Let2",d);

// // var
// var b = 5 ;
// {
//     var b = 7 ;
//     console.log(b);                 // 7,7
// }

// console.log(b);

// const
// const c = 5 ;

// {
//     const d = 7 ;
//     console.log("const1 :",c);                 // 7,5
// }

// console.log("const2 :", d);

// let x = 2 ;

// function myFunc(){
//     if (false){
//     var y = 7 ;
//         console.log(y);
//     }
//     console.log(x);

// }

// myFunc()
// console.log(x);

// let l = 10;

// function saa(){
//   console.log('check :',l);

//   }
// saa()

// // Arrays

const myArray = [];

myArray[0] = "Hi";
myArray[1] = "Hello";
myArray[2] = "Vanakkam";

// console.log(myArray);
// console.log(myArray.length);
// console.log(myArray[0]);
// console.log(myArray[myArray.length - 1]);    // To show last element

const AddElement = myArray.push("Makkalae"); // To add element
// console.log(myArray);
// console.log(AddElement);                       // Show the length

// const DelElement = myArray.pop()               // To delete element
// console.log(myArray);
// console.log(DelElement);                       // Show the element deleted

// const AddElementAtFirst = myArray.unshift("Ahhh !")     // To add element at first
// console.log(myArray);
// console.log(AddElementAtFirst);                        // Show the length

// const DelElementAtFirst = myArray.shift()               // To delete element of first
// console.log(myArray);
// console.log(DelElementAtFirst);                         // Show the element deleted

// // Splice [add,remove,or replace in between]

// // Add
// console.log('splice add :',myArray.splice(1,0,"Haiiii","Byeeeeeeeee","Varatamamaedrrrrrrrrr"));
// console.log(myArray);

// // Remove
// console.log('splice remove :',myArray.splice(1,2));
// console.log(myArray);

// // Replace
// console.log('splice replace :',myArray.splice(1,1,"Haiiiii"));
// console.log(myArray);

// // Delete [not advicable at it create empty undefined]
// console.log(delete myArray[2]);
// //       // or
// // console.log(delete(myArray[2]))             // Creates An empty item
// console.log(myArray[2]);

// // Slice

const a = "987654";
const newArray = a.slice(1,4);
console.log('slice' ,newArray);     // Can be used for Array and String as well

// console.log(newArray[2]);
console.log(a);


// // Reverse
console.log("myArray :", myArray);

// const reversedArray = myArray.reverse()
// console.log(reversedArray);

// // Join

// const joinedArray = myArray.join("")
// console.log(joinedArray);

// // Split

// const splittedArray = joinedArray.split("a")
// console.log(splittedArray);

// // Joining two arrays

// const myArrayA = ['Its','Array','One']
// const myArrayB = ['Its','Array','Two']

// console.log(myArrayA);
// console.log(myArrayB);

// Concat method :
// const joinedArraysUsingConcat = myArrayA.concat(myArrayB)
// console.log(joinedArraysUsingConcat);

// Spread operator method :
// const joinedArraysUsingSpreadOperator = [...myArrayA,...myArrayB]
// console.log(joinedArraysUsingSpreadOperator);

// const earnMoneyA = ["FronEnd","BackEnd","FullStack"]
// const earnMoneyB = ["AI","Blockchain","DataAnalystics"]

// const growMoneyA = ["Stock","RealEstate","FixedIncome"]
// const growMoneyB = ["Options","Futures"]

// const giveMoney = ["QualityEducation"]

// console.log(earnMoneyA[1],growMoneyB[1]);           // One Dimensional

// const earnMoney = [earnMoneyA,earnMoneyB]
// const growMoney = [growMoneyA,growMoneyB]

// console.log(earnMoney[0][1],growMoney[1][1]);       // Two Dimensional

// const dhuddu = [earnMoney,growMoney,giveMoney]

// console.log(dhuddu[0][0][1],dhuddu[1][1][1]);       //  Three Dimensional

// // Rock,paper and scissor game

// callMe()

// function callMe(){
//     let confirmation = confirm("Are you ready to play ?")
//     console.log(confirmation,'confirmation');

// if(confirmation){
//     let playerChoice = prompt("Please type stone,paper or scissor")?.toLowerCase()
//     if(playerChoice === "stone"){
//         console.log("stone");
//     }
//     else if (playerChoice === "paper"){
//         console.log("paper");
//     }
//     else if (playerChoice === "scissor"){
//         console.log("scissor");
//     }
//     else{
//         console.log("Plz try other");
//     }

//     if(playerChoice === "stone" || playerChoice === "paper" || playerChoice ===  "scissor"){
//         let computerChoice = Math.floor(Math.random() * (max - min + 1 )) + min
//         console.log(computerChoice);

//         if(computerChoice === 1){
//             computerChoice = 'stone'
//         }
//         else if (computerChoice === 2){
//             computerChoice = 'paper'
//         }
//         else if (computerChoice === 3){
//             computerChoice = 'scissor'
//         }
//         console.log(computerChoice);

//         let result =
//         playerChoice === computerChoice ? "Tie game" :
//         playerChoice === "paper" && computerChoice === "stone" ? `${computerChoice} , You won !!!` :
//         playerChoice === "paper" && computerChoice === "scissor" ? `${computerChoice} , Sorry ,Opponent won !!` :
//         playerChoice === "scissor" && computerChoice === "paper" ? `${computerChoice} , You won !!!` :
//         playerChoice === "scissor" && computerChoice === "stone" ? `${computerChoice} , Sorry ,Opponent won !!` :
//         playerChoice === "stone"  && computerChoice === "scissor" ? `${computerChoice} , You won !!! ` :
//         playerChoice === "stone"  && computerChoice === "paper" ? `${computerChoice} , Sorry ,Opponent won !!` : "Invalid Input"
//         alert(result)
//         callMe()
//         }
//     }
//     else{
//         alert("Please enter either stone,paper or scissor only")
//         callMe()
//     }

// }

// let computerChoice = Math.floor(Math.floor * 3 + 1 )
// console.log(computerChoice);

// // Objects

// const myObj = {
//    subscriber : 7 ,
//    number : 7 ,
//    content : {
//     earnMoney : "Study",
//     growMoney : "Invest",
//     giveMoney : "To Needy"
//    },
//    subdivision : ["earnMoney","growMoney","giveMoney"],
//    action : function(){
//     return "Hellooo ! World"
//    },
//    action1 : function(){
//     return `Do ${this.content.giveMoney}`
//    }

// }

// console.log(myObj.subscriber);
// console.log(myObj["subscriber"])
// console.log(myObj.content.growMoney);
// console.log(myObj.subdivision[1]);
// console.log(myObj.action());
// console.log(myObj.action1());

// let courses = {
//   frontend : "JS",
//   backend : "Java"
// }

// console.log(courses);

// Object.seal(courses)
// courses["database"] = "MYSQL" ;
// courses["frontend"] = "CSS" ;
// console.log(courses);

// Object.freeze(courses)
// courses["frontend"] = "HTML" ;
// console.log(courses);

// // Inheritance

const vehicle = {
  doors: 2,
  engine: function () {
    return "vrooom !!!";
  },
};

console.log(vehicle.engine());

const car = Object.create(vehicle); // Inherited

console.log(car.engine());

car.wheels = 4;
console.log(car);
console.log(car.doors);

// car.engine = function(){return "vroom vroom !!!"}

// console.log(car.engine());
// console.log(vehicle.engine());

// const tesla = Object.create(car);
// tesla.engine = function () {
//     return "Shhhhh"
// }

// console.log(tesla.engine());

// const movie ={
//     actor : "Suriya",
//     director : "K V",
//     music : "Harris",
//     producer : "Sun Pictures"
// }

// console.log(movie);
// console.log(Object.keys(movie))
// console.log(Object.values(movie))

// // for in loop

// for(job in movie){
//     console.log(`${job},itz ${movie[job]}`);
// }

// delete movie.producer
// console.log(movie);
// console.log(movie.hasOwnProperty("producer"));      // false

// // Destructuring the object

// const {music : myFavMusicDirector } = movie ;
 
// console.log(myFavMusicDirector);

// const FavMusic = movie.music
// console.log(FavMusic);

// const {music : MyFavMusic, director : myFavDirector} = movie ;

// console.log(MyFavMusic);
// console.log(myFavDirector);

// const {actor,director,music,producer} = movie ;
// console.log(actor);
// console.log(director);
// console.log(music);
// console.log(producer);

// function sings({music}) {               // Difference is in curly braces
//     return music
// }

// console.log(sings(movie));

// // Classes

// class Pizza {
//     constructor(pizzaType,pizzaSize,pizzaCrust){
//         this.type = pizzaType ;
//         this.size = pizzaSize ;
//         this.crust = pizzaCrust ;
//     }
//     bake(){
//         return `Baking a ${this.size} ${this.type} ${this.crust} crust Pizza`
//     }
// }

// const anotherPizza = new Pizza ("margaritta","small","thin")
// console.log(anotherPizza.bake())

// const anPizza = new Pizza ("Pepperonni","big","original")
// console.log(anPizza.bake());

// // Getter,Setter

// class Burger {
//     constructor(pizzaType,pizzaSize,pizzaCrust){
//         this.type = pizzaType ;
//         this.size = pizzaSize ;
//         this.crust = pizzaCrust ;
//         this.toppings = "ice"
//     }
//     getToppings(){
//         return this.toppings
//     }
//     setToppings(pizzaToppings){
//         this.toppings = pizzaToppings
//     }
//     bake(){
//         return `Baking a ${this.size} ${this.type} ${this.crust} crust Pizza with ${this.toppings}`
//     }
// }

// const anotherBurger = new Burger ("margaritta","small","thin")
// anotherBurger.setToppings("Cheese")
// console.log(anotherBurger.bake())

// // Pushing to an array

// class PushingBurger {
//     constructor(pizzaType,pizzaSize,pizzaCrust){
//         this.type = pizzaType ;
//         this.size = pizzaSize ;
//         this.crust = pizzaCrust ;
//         this.toppings = []
//     }
//     getToppings(){
//         return this.toppings
//     }
//     setToppings(pizzaToppings){
//         this.toppings.push(pizzaToppings)
//     }
//     bake(){
//         return `Baking a ${this.size} ${this.type} ${this.crust} crust Pizza with ${this.toppings}`
//     }
// }

// const pushinganotherBurger = new PushingBurger ("margaritta","small","thin")
// pushinganotherBurger.setToppings("Cheese")
// pushinganotherBurger.setToppings("CheeseCream")
// console.log(pushinganotherBurger.getToppings());
// console.log(pushinganotherBurger.bake())

// // Parent , Children

// class ParentBurger {
//     constructor(pizzaSize){
//         this.size = pizzaSize ;
//         this.crust = "original"
//     }
//     getToppings(){
//         return this.toppings
//     }
//     setToppings(pizzaToppings){
//         this.toppings.push(pizzaToppings)
//     }
// }

// class ChildrenBurger extends ParentBurger {
//     constructor(pizzaSize){
//         super(pizzaSize)
//         this.type = "Paperised"
//     }
//     slice(){
// console.log(`Our ${this.type} ${this.size} ${this.crust} has 8 pieces`);

//     }
// }

// const childrenBurger = new ChildrenBurger ("medium")
// childrenBurger.slice()

// // Accessing ( Private ,Public )

// class PublicPrivate {
//     crust = "original";
//     #sauce = "tomato" ;
//     constructor(sizePizza){
//         this.size = sizePizza ;
//     }
//     getCrust(){
//         return this.crust
//     }
//     setCrust(crustPizza){
//         this.crust = crustPizza
//     }
//     bake(){
//         return console.log(`Baking a ${this.size} ${this.crust} ${this.#sauce} pizza`);
//     }
// }

// const myPublicPrivate = new PublicPrivate("medium")

// console.log(myPublicPrivate.crust);
// console.log(myPublicPrivate.sauce);     // undefined [as it is private]

// // JSON

// const myObject = {
//     name : "Dhuddu",
//     content : ["Earn","Grow","Give"] ,
//     sub : function (){
//         console.log("Please subscribe the channel");
//     }
// }

// console.log(myObject);
// console.log(myObject.content);
// myObject.sub()

// // Convert Object into JSON
// const sendJSON = JSON.stringify(myObject)
// console.log(sendJSON);   // Gets converted into JSON strings without function
// console.log(sendJSON.content);    // undefined

// // Convert JSON into object
// const receiveJSON = JSON.parse(sendJSON)
// console.log(receiveJSON);    // Again gets converted into object

// // Error and Error Handling

// // Syntax error  ==> Any syntax error

// // Reference Error

// // variable = "Dhuddu"
// // console.log(variable);  // Executes but its not a best practice

// "use strict"   // should be written at the top of any file otherwise it wont execute and throw erro

// // variable = "Dhuddu"
// // console.log(variable);

// const variable = "Dhuddu"
// console.log(variable);    // Best Practice

// // Type Error

// // const variablee = "Fisrt"
// //  variablee = "Change"
// // console.log(variablee);

// // Dhideer test
// const dhideerArray = ["jairesh","jai"]

// for(i=0;i<dhideerArray.length;i++){
// console.log(dhideerArray[i]);
// }

// // Error handling ( try and catch )

// const makeError =()=>{
//     try{
//         const name = "Dhuuduu"
//         name = "Jai"
//     }
//     catch(err){
//         // console.log(err);
//         // console.warn(err);    // In yellow
//         // console.error(err);   // In red
//         // console.table(err);
//         // console.error(err.stack);     // In detail
//     }
// }

// makeError()

// const makeError2 =()=>{
//     // try{
//     //     throw new customError ("This is a custom Error")
//     // }
//     try{
//         throw new Error ("This is a custom Error")
//     }
//     catch (err){
//         console.error(err.stack);
//     }
// }

// makeError2()

// function customError (message) {
//     this.message = message ;
//     this.name = "customError" ;
//     this.stack = `${this.name} : ${this.message}`
// }

// const makeErrorFinally = () =>{
//     let i = 0 ;
//     while(i<=5){
//         try{
//             if(i%2 == 0){
//                 console.log(`${i} is an even number`);
//             }
//             else{
//                 throw new Error (`${i} is an odd number`)
//             }
//         }
//         catch(err){
//             console.error(err);
//         }
//         finally{
//             console.log("Itz Finally");
//             i ++
//         }
//     }
// }

// makeErrorFinally()

// const InputByUser = prompt("Enter an number")
// console.log(InputByUser,'InputByUser');
