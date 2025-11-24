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
//         console.log(err);
//         console.warn(err);    // In yellow
//         console.error(err);   // In red
//         console.table(err);
//         console.error(err.stack);     // In detail
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


// Condition based setting errors with status code :

const jaibala = async()=>{
  try{
   const res = await fetch("https://jsonplaceholder.typicode.com/users/1");

   if(!res.ok){
    // console.log("Response Status:",res.status)
    if(res.status == 404){
      throw new Error("User Not Found:" + `${res.status}`);
    }else{
    throw new Error(`Data's Fetching Failed. Status:${res.status}`);
    }
   }

   const data = await res.json();
   console.log(data);
  }
  catch(e){
    console.log("Unexpected error", e.message);
  }
  finally{
    console.log("Execution Completed");
  }
}

jaibala();


