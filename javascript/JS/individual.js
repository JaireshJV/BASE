// ODD OR EVEN

// const oddoreven = 0;
let odds = [];
let evens = [];
for (let oddoreven = -10; oddoreven <= 50; oddoreven++) {
  if (!Number.isInteger(oddoreven)) {
    console.log("inside", oddoreven);
  } else if (oddoreven % 2 == 0) {
    evens.push(oddoreven);

    // console.log(`${oddoreven} Its even`);
  } else {
    odds.push(oddoreven);

    // console.log(`${oddoreven} Its odd`);
  }
}
console.log("odds :", odds);
console.log("evens :", evens);

// const input = prompt("Enter num");
// if (input % 2 == 0) {
//   console.log("even");
//   alert("Even")
// } else {
//   console.log("odd");
//   alert("Odd")
// }

console.log(Number.isInteger(4.01));


// LARGEST NUMBER

