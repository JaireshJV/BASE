// Conditional Statements

// if

let num = "23";
if (!num) {
  console.log("There is no value");
}

a = 5;
b = 25;
c = 3;

big = a;

if (b > big) {
  big = b;
}
if (c > big) {
  big = c;
}

console.log("Big number : " + big);



// if else
if (num > 9) {
  console.log(`The given ${num} is an integer`);
} else {
  console.log(`The given ${num} is not an integer`);
}

if (num == "9") {
  console.log("They are same");
} else if (typeof num === "number") {
  console.log("Its string");
} else if (!isNaN(num)) {
  console.log("Itz definitely number");
} else {
  console.log("Itz wrong");
}

if (2 < 7) {
  console.log("llll");
} else if (8 > 0) {
  console.log("kkk");
} else {
  console.log("else");
}

if (40 > 60) {
  console.log("Greater than 60");
} else if (40 > 50) {
  console.log("Greater than 50");
} else if (40 > 40) {
  console.log("Greater than 40");
} else if (40 > 30) {
  console.log("Greater than 30");
} else {
  console.log("None of the above");
}

let vari = "born";
let eligiblity = 18;
if (vari === "born") {
  if (typeof vari !== "string") {
    if (vari.length == 4) {
      if (57 >= eligiblity) {
        console.log("Allow to vote");
      }
    }
  } else {
    console.log("Itz not a string");
  }
} else {
  console.log("Dont Allow to vote");
}

// Switch
// If the elements are matched to any particular cases , it directly gets navigated towards that case .

const array = [1,2,3,4,5,6,7] ;

for(let element of array){
  switch (element){
    
    case 2 : 
    console.log(`The given value ${element} is even`);
    break;
    case 4 : 
    console.log(`The given value ${element} is even`);
    break;
    case 6 : 
    console.log(`The given value ${element} is even`);
    break;
    default :
    console.log(`Thee given value ${element} is odd`);
  }
}

