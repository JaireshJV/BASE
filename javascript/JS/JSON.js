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