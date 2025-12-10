// Method over-loading or Polymorphism

function greet(name, age) {
  if (age !== undefined) {
    console.log(`Hello ${name}, you are ${age} years old.`);
  } else {
    console.log(`Hello ${name}`);
  }

}

greet(34);              // Hello 34
greet("Bob", 25);      // Hello Bob, you are 25 years old.



function FunName(params) {
return arguments.length ;
}

console.log(FunName("Jai"));



function calculateArea(shape ,a, b ) {
  if (shape === "circle") {
    // Circle: πr²
    return Math.PI * a * a;
  } else if (shape === "rectangle") {
    // Rectangle: length × breadth
    return a * b;
  } else if (shape === "triangle") {
    // Triangle: ½ × base × height
    return 0.5 * a * b;
  } else {
    return "Invalid input";
  }
}

// // // Usage
console.log(calculateArea( "circle" ,5)); // Circle with radius 5 → 78.54...
console.log(calculateArea( "rectangle" ,4, 6)); // Rectangle → 24
console.log(calculateArea( "triangle" ,10, 8)); // Triangle → 40



if (2 == 2 && 4 < 5) {
  console.log("Kaththisandai");
}

console.log(5 < 6 && 6 == "6" && "k" === "k" && "abi" === "sheth");

{
  8 > 6 ? console.log("kkk") : console.log("lll");
}

let n = 7;
let v = n < 0 ? -n : n;

console.log(v);


// // //

let dc = [
  {
    userId: 1,
    id: 1,
    title: "quidem molestiae enim",
  },
  {
    userId: 1,
    id: 2,
    title: "sunt qui excepturi placeat culpa",
  },
  {
    userId: 1,
    id: 3,
    title: "omnis laborum odio",
  },
];

// let Obj = [] ;

// fetch("demo.json")
// .then((res)=> res.json())
// .then((data)=> {
//   Obj = data.dc ;
//   console.log(Obj ,'Objjjj');
  
// }
// )
// .catch((err)=> console.log(err,'error')
// )


dc.forEach((element) => {
  console.log('For Each : ',element);
});


dc.map((b) => {
  console.log('Map : ', b);
});




let input = 987659;
let count_digit = input.toString();
let len = count_digit.length;

let count = 0;

while (input > 0) {
  input = Math.floor(input / 10);
  count++ ;
  console.log(input,'input');
}


console.log(count,'cnt');

console.log(Math.floor(1/10));


// // Table printing

let table = 5;

for (let i = 1; i <= 10; i++) {
  let ans = table * i;
  console.log(`${table} * ${i} =` ,ans);
  console.log(`${i} * ${table} =` ,ans);
}












      


