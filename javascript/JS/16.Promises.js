const arr1 = new Promise((res, rej) => {
  rej("Arr 1");
});

const arr2 = new Promise((res, rej) => {
  res("Arr 2");
});

Promise.allSettled([arr1, arr2])
  .then((res) => {
    let fil = res.filter((ful) => {
      return ful.status === "fulfilled";
    });
    // console.log(fil.length ,'Filled length');
    return fil ;
  })
  .then((e) => {
    console.log(e.length, "lengthhhhh");
  })
  .catch((e) => {
    console.log(e, "eee");
  });

// console.log(fullfillted,'fullfillted');







// 1.Chocklate Examples
// let getChocolate = new Promise((resolve, reject) => {
//   let shopOpen = true; // Change to false to test rejection

//   console.log("Friend is going to the shop...");

//   setTimeout(() => {
//     if (shopOpen) {
//       resolve("🍫 Here is your chocolate!");
//     } else {
//       reject("❌ Sorry, shop is closed.");
//     }
//   }, 2000); // Wait 2 seconds
// })

// getChocolate
//   .then((message) => {
//     console.log(message); // Runs if resolved
//   })
//   .catch((error) => {
//     console.log(error); // Runs if rejected
//   });








// // Add Numbers Examples
// function addNumbers(a, b) {
//   return new Promise((resolve, reject) => {
//     if (typeof a === "number" && typeof b === "number") {
//       resolve(a + b);
//     } else {
//       reject("❌ Both inputs must be numbers!");
//     }
//   });
// }

// addNumbers(4, "9")
//   .then((msg) => {
//     console.log(msg * 2);
//   })

//   .catch((err) => {
//     console.log(err);
//   });

// let pizzaAvailable = Math.random() > 0.3;

// console.log("Pizza", pizzaAvailable);

// // Pizza Shop Examples

// function orderPizza(flavor) {
//   return new Promise((resolve, reject) => {
//     console.log(`🛵 Ordering a ${flavor} pizza...`);

//     setTimeout(() => {
//       let pizzaAvailable = Math.random() > 0.3; // 70% chance it's available

//       if (pizzaAvailable) {
//         resolve(`🍕 Your ${flavor} pizza is here!`);
//       } else {
//         reject("❌ Sorry, pizza is out of stock.");
//       }
//     }, 2000); // Wait 2 seconds
//   });
// }

// // Use the Promise
// orderPizza("Cheese Burst")
//   .then((message) => {
//     console.log("SUCCESS:", message);
//   })
//   .catch((error) => {
//     console.log("ERROR:", error);
//   })
//   .finally(() => {
//     console.log("Order process finished ✅");
//   });

// // Using Try Catch to Handle a Promise
// function orderPizza(flavor) {
//   return new Promise((resolve, reject) => {
//     console.log(`🛵 Ordering a ${flavor} pizza...`);

//     setTimeout(() => {
//       let pizzaAvailable = Math.random() > 0.3; // 70% chance of success

//       if (pizzaAvailable) {
//         resolve(`🍕 Your ${flavor} pizza is here!`);
//       } else {
//         reject("❌ Sorry, pizza is out of stock.");
//       }
//     }, 2000); // wait 2 seconds
//   });
// }
// async function getPizza() {
//   try {
//     // Wait for the pizza promise to resolve
//     const message = await orderPizza("Cheese Burst");
//     console.log("SUCCESS:", message);
//   } catch (error) {
//     // If promise rejects, handle the error here
//     console.log("ERROR:", error);
//   } finally {
//     console.log("Order process finished ✅");
//   }
// }

// // Call the async function
// getPizza();

// Promise.allSettled([getPizza])
//   .then((mes) => {
//     console.log(mes);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// let indivpromise = new Promise((resolve, reject) => {
//   const con = false;

//   if (con) {
//     resolve("Resolved indivpromise");
//   } else {
//     reject("Reject orderpromise");
//   }
// });

// let orderpromise = new Promise((resolve, reject) => {
//   reject("Reject orderpromise");
// });

// Promise.all([indivpromise, orderpromise]).then((mes) => {
//   console.log(mes);
// }).catch((err)=>{
//   console.log(err);
// });

// Promise.prototype.then(indivpromise,orderpromise);

// indivpromise
//   .then((mesgg, error) => {
//     console.log("Called Resolved", mesgg);
//     console.log("Called Rejected", error);
//   })
//   .then(() => {})
//   .catch((err) => {
//     console.log("Unhandled error", err);
//   });

// Chaining Promises

// const userDetail = [{ name: "Jai", age: "27" }];

// const data = new Promise((resolve, reject) => {
//   const name = "Abi";
//   if (name) {
//     resolve(name);
//   } else {
//     reject("Undefined");
//   }
// });

// function getUserDetail(name) {
//   const Details = new Promise((resolve, reject) => {
//     const userDetail = [
//       { name: "Jai", age: "27" },
//       { name: "Abi", age: "25" },
//     ];
//     getdata = userDetail.find((elem) => elem.name == name);
//     if (getdata) {
//       resolve(getdata);
//     } else {
//       reject("No datas found");
//     }
//   });
//   return Details;
// }
// data.then((user) => console.log(userDetail.find((elem)=>elem.name == user).age))

// data
//   .then((user) => {
//     return getUserDetail(user)
//   })
//   .then((detail)=>{
//     console.log(detail);
//   })
//   .catch((err) => {
//     console.log(err,'errrr');
//   });

// Promises Problems

// 1. Simple Promise Resolution

// Create a promise that resolves with the message "Data fetched successfully"
// after 2 seconds, and print the message in the console.

// const datas = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("Data Fetched Successfully");
//   },2000);
// });

// datas.then((msg)=>{
// console.log(msg);
// })
// .catch((err)=>{
//   console.log(err);
// })

// 2. Promise Rejection

// Create a promise that rejects with the message "Error: Something went wrong"
//  after 1 second, and handle the error properly using .catch().

// let rejdata = new Promise((resolve, reject) => {
//   reject("Something went wrong");
// });

// rejdata
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log(`Error :  ${err}`);
//   });

// 3. Chaining Promises

// Write a function that returns a promise which doubles a given number after 1 second.
// Use this function to double the number 5, then double the result again, and print the final output.

// const doubled = new Promise((resolve, reject) => {
//   const num = 5;

//   if (num) {
//     resolve(num * 2);
//   } else {
//     reject("Number Undefined");
//   }
// });

// function multiply(number) {
//   const double2 = new Promise((resolve, reject) => {
//     if (number) {
//       resolve(number * 2);
//     } else {
//       reject("There is no values to Doubled");
//     }
//   });
//   return double2;
// }

// doubled
//   .then((num) => {
//     return multiply(num);
//   })
//   .then((msg) => {
//     console.log("The doubled number is :",msg);
//   })
//   .catch((err)=>{
//     console.log("Error :" ,err);
//   })

// 4. Promise.all()

// You are given 3 promises:
// First resolves after 1 second with "First done".
// Second resolves after 2 seconds with "Second done".
// Third resolves after 3 seconds with "Third done".
// Use Promise.all() to print an array of all results once all promises resolve.

// const first = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("First done");
//   }, 1000);
// });

// const second = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Second done");
//   }, 2000);
// });

// const third = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Third done");
//   }, 3000);
// });

// Promise.all([first, second, third])
//   .then((msg) => {console.log(msg)})
//   .catch((err) => {
//     console.log(err);
//   });


// //   5. Promise.race()

// // Create 3 promises that resolve after 1, 2, and 3 seconds with different messages.
// // Use Promise.race() to print whichever the promise is first.

const firstPromise = new Promise((res, rej)=>{
  setTimeout(() => {
    rej("The first Promise is going to print")
  }
  )
})

const secondPromise = new Promise((res, rej)=>{
  setTimeout(() => {
    res("The second Promise is going to print")
  },
  2000);
})

const thirdPromise = new Promise((res, rej)=>{
  setTimeout(() => {
    res("The third Promise is going to print")
  },
  3000);
})

Promise.race([firstPromise, secondPromise , thirdPromise])
.then((msg)=>{
  console.log(msg)
})
.catch((err)=>{
  console.log(err)
})

// console.log('changed');
// console.log('changed2');