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








// * 🚨 IMPORTANT NOTES 🚨 * 

// When we pass the data in stringify format, we dont need to parse them manually because we use ,
// express.json() to happen that automatically .


// But when we send a data as FormData , We will face an issue between live and server code like in local
// will be running without a need of manual json.parse() to convert them as javascript object . At the same time 
// server approaches the formdata differently , for that only we use the manual json.parse() to convert 
// stringified data to json format .


// When we retrieve datas from database in an array format , the datas will be in stringified array format .
// For converting those datas to JSObject , we use json.parse() manually . 



let fields = '["id" , "name"]'
console.log(fields,'fielssss');

    if (typeof fields === "string") {
      fields = JSON.parse(fields);
    }
console.log(fields,'fields');

    if (!Array.isArray(fields)) {
      throw new Error("fields is not an array");
    } 
    
    