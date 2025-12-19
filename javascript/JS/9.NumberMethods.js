// // // Number Methods


const myStringNumber = "42" ;
const myString = 'Forty Two'
const myNumber = 42 ;
const myFloat = 42.05 ;

console.log("myStringNumber :" ,myStringNumber);                        // 42 
console.log("myString :" ,myString);                                    // Forty Two
console.log("myNumber :" ,myNumber);                                    // 42
console.log("myFloat :" ,myFloat);                                      // 42.05

console.log("NumCompare :" ,myStringNumber == myNumber);                // true
console.log("NumCompareStrict :" ,myStringNumber === myNumber);         // false
console.log("Float :" , myFloat === myNumber);                          // false


// Type converting into number :

//(i) Number() :
// The number function is only used to convert the possible values to be number,
// Remaining will be "NaN" .
console.log('myStringNumberConvertion :',Number("42"));                         // ✅ 42 [ Number ==> type conversion to NUMBER ]
console.log('myStringNumber typeof :',typeof(Number("42")));                    // number
console.log(Number(myStringNumber) === myNumber);                               // ✅ true
console.log(Number("Fourty two"));                                              // ❌ NaN
console.log('false :',Number(false)) ;                                          // ✅ 0
console.log('Undefined :' ,Number(undefined));                                  // ❌ NaN
console.log('Null :' ,Number(null));                                            // ✅ 0
console.log('true :' ,Number(true));                                            // ✅ 1
console.log('Numberic Alpha' , Number("3bhk"));                                 // ❌ NaN    
console.log('Alpha Numeric' , Number("bhk7"));                                  // ❌ NaN   


// (ii) Number.parseFloat() :
// Number.parseFloat() and parseFloat() are same .
// Number.parseFloat() is recommended one .

console.log("parseFloat for Number : " , Number.parseFloat(99));                            // ✅ 99
console.log("parseFloat for String Number : " , Number.parseFloat("77"));                   // ✅ 77
console.log("parseFloat for Decimal : " ,  Number.parseFloat(16.08));                       // ✅ 16.08
console.log("parseFloat for String Decimal : " , Number.parseFloat("97.01"));               // ✅ 97.01
console.log("parseFloat for Numeric Alpha: " ,  Number.parseFloat("2bhk"));                 // ✅ 2 [Stops converting after 2]
console.log("parseFloat for Decimal : " ,  Number.parseFloat("20.09.1996"));                // ✅ 20.09 [Stops before second decimal]           
console.log("parseFloat for Alpha Numeric : " ,  Number.parseFloat("bhk2"));                // ❌ NaN
console.log("parseFloat for null : " ,  Number.parseFloat(null));                           // ❌ NaN   
console.log("parseFloat for undefined : " ,  Number.parseFloat(undefined));                 // ❌ NaN
console.log("parseFloat for false : " ,  Number.parseFloat(null));                          // ❌ NaN   
console.log("parseFloat for true : " ,  Number.parseFloat(undefined));                      // ❌ NaN


// (iii) Number.parseInt() :

// It works same as the above Number.parseFloat() except in case of decimal
// as it ignores the decimals and takes only the actual values .

console.log("Number.parseInt of String Decimal :" , Number.parseInt("22.88"));               // ✅ 22
console.log("Number.parseInt of Decimal :" , Number.parseInt(22.88));                        // ✅ 22



// Boolean Check [ Without Type Conversion ] :
// (i) Number.isInteger :

// Number.isInteger expects only actual integer . 
// Value should be except string number and decimal numbers ,
//  undefined , null , false , true . 
//  Number.isInteger wont perform typeconversion, barely checks whether 
// the value is integer or not .

console.log('Number.isInteger :',Number.isInteger(myStringNumber));                                        // false


// (ii) Number.isFinite :

// Number.isFinite expects only actual integer and decimal numbers. 
// Value should be except string number ,undefined, null,false,true . 
//  Number.isFinite wont perform typeconversion, barely checks whether 
// the value is integer and decimal or not .

console.log('Number.isFinite :' ,Number.isFinite(myFloat));                                                 // true

let result1 = "5";
if (Number.isFinite(result1)) {
  console.log("Valid number:", result1);
} else {
  console.log("Invalid or infinite result");                                                                 // false (strict)
}



// (iii) Number.isNaN :

// par ==> Must be NaN , No other cases .
// Number.isNaN will not do typeconversion , it only checks the passed value , 
// whether it is NaN or not . If it is NaN is shows true ,otherwise it remains false .
// Eg) Expecting value > Number.isNaN(NaN) ==> true .      Number.isNaN("25") ==> false

const par = Number(undefined) ;
console.log('NanNumber(strict) :' ,Number.isNaN(par));                                                        // true

const NaNString = "Jairesh" ;
const con = Number(NaNString);

console.log('Checking NaN :' ,Number.isNaN(con));                                             // true
console.log('NanString(strict) :' ,Number.isNaN(NaNString));                                  // false
console.log(Number(NaNString));                                                               // NaN




// Boolean Check [ With Type Conversion ] :
// (i) isFinite :

// In isFinite , everything will be converted into number , then 
// checks the comparison returns boolean value .
// Everything will be converted into number except undefined .
console.log('isFinite :' , isFinite(myFloat));

let result = "5";
if (isFinite(result)) {
  console.log("Valid number:", result);
}
 else {
  console.log("Invalid or infinite result");            // true , the value gets converted into number before comparison .
}



// (i) isNaN :

// isNaN  is used to check the NaN value after doing type conversion like isFinite does .
// and it returns true or false value .
// Expected value :       isNaN("Ninety nine") ===> true              isNaN("99")  ===> false                              

const NaNNumber = "98" ;
console.log('NanNumber(non-strict) :' ,isNaN(NaNNumber));                                    // false
const NaNStringg = "Abisheth" ;
console.log('NanString(non-strict) :' ,isNaN(NaNStringg));                                   // true
console.log(typeof(NaN));                                                                    // number


// To fixed :

// Converts the more decimal value on basis of 6 and above // roundoff - 5 and above 
// whenever toFixed is used , it gets converted into a string  



const toFixedFloat = 42.555;
console.log('toFixed :',toFixedFloat.toFixed(2));
// console.log('Type of toFixed :',typeof toFixedFloat.toFixed(3));
// console.log('Number Convert and Fixed : ' ,Number(toFixedFloat).toFixed(2)); 
console.log('Number.parseFloat Convert and Fixed : ' ,Number.parseFloat(toFixedFloat).toFixed(2));                   // 42.57
console.log('Type of After Converting : ' ,typeof(Number.parseFloat(toFixedFloat).toFixed(2)));                      // String







// Math Properties :

const value = 6.51 ;

// Removes the sign value either "+" or "-" , works for number and decimal . 
console.log('Math absolute',Math.abs(-45));                                          // 45 use 
console.log('Math absolute with decimal',Math.abs(-45.099));                         // 45.099 [ Applies for decimal too ]  

// Math.PI has default PI (3.14159...) value to be used . 
console.log('PI :' ,Math.PI);                                                                   // 3.14159...
console.log('PI with fixed :' ,(Math.PI).toFixed(2)) ;                                          //3.14

// Math.trunc in used to take the full or actual value, like before first decimal value .
console.log('Trunc :' ,Math.trunc(Math.PI));                                                    //3
console.log('Trunc :' ,Math.trunc(3.89));                                                       // 3


// Math.round() is used to roundoff the base value like, if the immediate decimal value is
// Equal or greater than 5 , it converts the base value to next value else takes the base value .
// Eg) 7.537 => here immediate decimal valaue is 5 which is >= 5. so it converts the base value to next digit 8 .
console.log('Round Off',Math.round(7.537));                                           // 8
console.log('Round Off',Math.round(value));                                           //7
console.log('Round Off' ,Math.round(3.89));                                           // 4


// Math.ceil() , except 0  takes next base value .

console.log('Ceil1 :',Math.ceil(3.008));                                              // 4(goes to next)

// Here , the value -3.2 is between -3 and -4 .
// When we use Math.ceil() , -3.2 is nearest to "-3" .
console.log('Ceil2 :' ,Math.ceil(-3.2));                                              // 4(goes to next)

// Math.floor() is opposite to Math.ceil() ,
// Except 0 ,it goes to previous base value .
console.log('Floor + : ' ,Math.floor(3.9));                                                        // 3(stays there)

// Here , the value -3.7 is between -3 and -4 .
// When we use Math.floor() , -3.7 is nearest to "-4" .
console.log('Floor - : ' ,Math.floor(-3.7));                                                       // -4

// In Math.pow() , the first parameter passed is the base value ,
// whereas the second parameter is the exponential or power value .
// Eg ) 2^3 ==> 2*2*2 ==> 8 .
console.log("Power : " ,Math.pow(2,3));                                                          // 8

let nums = [2, 3, 4];
let sum = 0;
nums.forEach((element) => {
  sum += Math.pow(element, 2);
});

console.log('sum :' ,sum);

// Math.min() is used to find the lowest values among all . 
console.log("Min :" ,Math.min(2,82,98,1));                                                    // 1

// Math.max() is used to find the highest values among all .
console.log("Max :" ,Math.max(2,82,98,1));                                                    // 98

// Math.random() is used to generate random values between 0.01 and 0.99 . 
console.log('Random : ' ,Math.random());                                                          //random btn 0 and 1 [0.01 - 0.99]

// Math.random() ==> 0.99 * 100 ==> 99 + 1 ==> 100 
console.log('Floor Random : ' ,Math.floor(Math.random()*100 )+ 1);                                      //0.99 * 100 ==> Math.floor(99) ==> 99 + 1 ==> 100  ==> Between 1 and 100


const RandomChallenge = 'Jairesh' ;
// Finding the string's length in numbers not in index basis .
console.log(RandomChallenge.length);  

// J a i r e s h ==> Everytime random character will come off from the above string .
console.log(RandomChallenge.charAt(Math.floor(Math.random()*RandomChallenge.length )));         


// Basically , by using Math.random() it wont include the end value means 1
// because it generates between 0 and 1 but it not includes 0 and 1 to print .
// To include the given min and max value . We can use the below formula and
// step by step excecution .

let min = 40 , max = 75 ;
Math.floor(Math.random() * (max - min + 1)) + min                                    // [For any interval values]

const randomCheckk = Math.floor(Math.random() * (max - min + 1)) + min
const randomCheck = Math.floor(Math.random() * (36)) + 40
console.log(randomCheck,'randomCheck');



const exarray = [2,5,6]

console.log(Math.min(...exarray));

const jair = "Maruthamalai";

const length = jair.length;

const CheckRandom = jair.charAt(Math.floor(Math.random() * length));

console.log(CheckRandom);


const check = '55'  ;
// By default the type will be string .
// After using the Math.round() , it gets converted into number format .
console.log(typeof check ,'String');
console.log(Math.round(check));
console.log(typeof Math.round(check) ,"Number" );
