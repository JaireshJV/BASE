// // JSON

const jsobj = {name : "Jai" , age : "23"} ;        // JavaScript Object 
const JSON = {"name" : "Jai" , "age" : "23"} ;    // JSON
const stringifiedJSON = '{"name" : "Jai" , "age" : "23"}' ;  // Stringified JSON


const myObject = {
    name : "Dhuddu",
    content : ["Earn","Grow","Give"] ,
    sub : function (){
        console.log("Please subscribe the channel");
    }
}

console.log(myObject);
console.log(myObject.content);
myObject.sub();








// (i) JavaScript Object (or) Object : 

const JSObject = {name : "Jai" , age : "23"} ; 

// This is what we will collect from the submitted form , from the browser send to backend before API call .



// (ii) JSON Stringify :

const StringifiedJSON = JSON.stringify(JSObject) ;

// The collected values in object form , will be converted to above stringify function and the result becomes like below 

StringifiedJSON = '{"name" : "Jai" , "age" : "23"}' ;  // Stringified JSON



// (iii) JSON Parse :

const ParsedJSObj = JSON.parse(StringifiedJSON) ;

// Only the StringifiedJSON format will acceptable to convert into normal JS Object . 
// If we failed to pass expected format , it will throw invalid JSON error or sometime Object Error .






// JSON.Stringify() :

// // Convert Object into JSON
const sendJSON = JSON.stringify(myObject)
console.log(sendJSON);   // Gets converted into JSON strings without function
console.log(sendJSON.content);    // undefined


// It converts JavaScript data (objects, arrays, etc.) into a JSON string.

// 📌 Used when:

// Sending data from frontend to backend (via API calls)
// Storing objects in localStorage / sessionStorage
// Saving data in a database that expects JSON strings
// Debugging/logging readable data



// JSON.parse() :

// // Convert JSON Stringify into object
const receiveJSON = JSON.parse(sendJSON)
console.log(receiveJSON);    // Again gets converted into object


// It converts a JSON string back into a JavaScript object.

// 📌 Used when:

// Receiving API responses from backend (usually JSON strings)
// Fetching stored data from localStorage
// Reading JSON from files