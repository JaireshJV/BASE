// // // String Methods

const myVariable = 'Mathematics' ;

// To find the variable's datatype .
console.log('Type of : ' ,typeof(myVariable));                                        // string

// To find the length of the string .
console.log('Length : ' ,myVariable.length);                                          // 11

// To find the character of the given index .
console.log('charAt : ' ,myVariable.charAt(2));                                       // t

// To find the first occurance of the character .
console.log('indexOf : ' ,myVariable.indexOf("at"))                                   // 1

// If the given character doesnot exists it returns "-1" .
console.log('indexOf : ' ,myVariable.indexOf("z"));                                   // -1

// To find the last occurance of the character .
console.log('lastIndexOf : ' ,myVariable.lastIndexOf("at"));                          // 6

// If the given character doesnot exists it returns "-1" .                               
console.log('lastIndexOf : ' ,myVariable.lastIndexOf("z"));                           // -1



// Slice :

// Mathematics

// It slices the characters from the string based on start and end number .
// The end number won't be included . 
console.log('Sliced :' ,myVariable.slice(5,8));                                                  // mat

// When we pass end number lesser than the start number , it returns no O/P or empty space .
console.log('No Output of sliced :' ,myVariable.slice(5,2));                                     // No output

// When the end value in slice(start, end) is negative, JavaScript counts the position
//  from the end of the string/array instead of from the beginning.
// This means: Start slicing from index 5 .
// Stop one element before the last (because -1 excludes the last element)

console.log('Sliced with negative :' ,myVariable.slice(5,-1));                                   // matic

// If the end value exceeds the limit , slice slices the remaining characters in the string upto end .
console.log('Slice with exceeds value' ,myVariable.slice(5,12));                                 // matics    

// If the end value is not provided, the slice will continue till the end of the string.
console.log('Slice without end value ' ,myVariable.slice(5));                                    // matics


const a = "987654";
const newArray = a.slice(1,4); 

// It makes a new string with sliced values .
console.log('slice' ,newArray);                                                                 // 876  

console.log('indexofsliced ' ,newArray[2]);                                                     // 6

// As String is immutable , so the base value wont be changed by the slice .  
console.log('String after slice ' ,a);                                                          // 987654

// Getting name from email :
const email = "Jairesh@gmail.com";
const peru = email.slice(0, email.indexOf("@"));
console.log("Hai " + peru + "!");


// It is used to convert the string into Capital letters [ Uppercase ] ,
console.log('ToUppercase :' ,myVariable.toUpperCase());                                         // MATHEMATICS 

// It is used to convert the string into Small letters [ Lowercase ] ,
console.log('ToLowercase :' ,myVariable.toLowerCase());                                         // mathematics

// Making propercase :
const Hai = "abI";
console.log(Hai.charAt(0).toUpperCase() + Hai.slice(1).toLowerCase()) ;                         // Abi

// It splits the string based on the character , the given character won't be
// included after splitted string . It always return in array of strings .
console.log('Split with character : ',myVariable.split('t'));                                   // ["Ma","hema","ics"]

// It splits the string based on empty string , if empty (or) character we
// gave doesn't exists , it returns the base string . 
console.log('Split with empty space : ',myVariable.split(' '));                                 // ["Mathematics"]

// If it splits without empty string , each character is splitted individually .
console.log('Split without space : ' ,myVariable.split(''));                                    // ["M","a","t","h","e","m","a","t","i","c","s"]

// It replaces the given character based on the search value . (searchvalue , replacablevalue)
console.log('Replace the character:' ,myVariable.replace("cs","z"))                             // Mathematiz




// Reverse a string :
// When we use split() it returns the splitted strings in array format .
// Splitted string , get reversed by using reverse() .
// Then reversed string will be joined through join() and returns the reversed string value . 
 
let str = "hello";
let reversed = str.split("").reverse().join("");
console.log('reversed :' ,reversed);

// We can make the reverse string process by calling a function , values will be dynamically .
function rev(str) {
  if (typeof str === "string") {
    return console.log(str.split(" ").reverse().join(" "));
  }
  return console.log("The passed parameter is not string");
}

rev("The sky is blue") ;

// Palindrome of a string : 
// The below program is doing reverse string process .
// Based on the condition , it returns the result whether it is palindrome or not .
// Basically , palindrome means the base value and reversed value should be equal all the way [ case sensitive ].

var unconverted_mallu = "Appa";
let mallu = unconverted_mallu.toLowerCase();
let revmallu = mallu.split("").reverse().join("");
console.log('Converted and reversed : ' ,revmallu);

if (revmallu === mallu) {
  console.log(`The given word : ${unconverted_mallu} is a palindrome `);
} else {
  console.log(`The given word : ${unconverted_mallu} is not a palindrome `);
}


// Find the occurance in different ways :


// Search method :

// Seach always returns first index position of the character .
console.log('search : ' ,myVariable.search("i"));                                               // 8                                      

const w = 'Jaireshae' ;

// The below search function is used to find the first appearance of the index with case in-sensitive .
// Result will be index of the character appeared first .
// i ==> case in-sesitive
// /e/ ==> search letter
console.log('Search :' ,w.search(/e/i));                                                         // 4


// Match method :

// The below match functions represents to find all matched values fromn a string and show result in array format.
// /E/ ==> is matching character
// i ==> is Case in-sensitive
// g ==> global search
console.log('Match :' ,w.match(/E/gi));                                                          // ["e","e"]

const namee = 'goodyyy Good' ;

// To see the converted array format after matched values in report format we use the below method .
console.log(Array.from(namee.matchAll(/good/gi)));

// To access each key values from the array , we may use index basis access .
console.log(Array.from(namee.matchAll("good"))[0].input);

// Substr method :

// SubStr(from , length ) ==> Here substr first value is from position and second one is length of cut value.
// Here the length value won't be included , which means cut string stops before length value .

let set = "Sat and RaVar";
let find = "Var";

for (let i = 0; i < set.length; i++) {
  // One by one , if condition is met , the console is excecuted .
  if (set.substr(i, find.length) == find) {
    console.log(`The value of ${find} is Existed in`, set);
    break;
  }
}


// Includes method :

// It return the boolean value , whether the given character exists or not .
console.log('Include :' ,myVariable.includes("mat"));                                            // true

console.log(set.includes(find) ? "Exist" : "Not");

if (set.includes(find)) {
  console.log("Fun panrom");
} else {
  console.log("Kathi swag");
}


//Trim of
// It is used to cut off the spaces from left and right of the string .

let name = " Agent Tina ";
console.log("Trim " ,name.trim());






