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
//console.log((Math.PI).toFixed(2))
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

// let computerChoice = Math.floor(Math.floor * 3 + 1 )
// console.log(computerChoice);

// const RandomChallenge = 'Jairesh'
// console.log(RandomChallenge.length);
// console.log(Math.floor(Math.random() ));
// console.log(RandomChallenge.charAt(Math.floor(Math.random()*RandomChallenge.length )));
