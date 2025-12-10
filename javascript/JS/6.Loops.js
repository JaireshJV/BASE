// // Loops

// // While

// let i = 50 ;

// let a = false;

// a = true

// while (i>0){
//     console.log(i);
//     i-- ;
// }

// // Do While
// let j = 50;

// do {
//   console.log(j); // Only Once
//   j += 1;
// } while (j < 50);
// 

// // For Loop

// // Numbers

// for (let i = 0 ; i <= 50 ; i ++ ){
//     console.log(i);
// }








const colors = { Name: "Red", Value: "Green", Age: "Blue" };

Object.entries(colors).forEach(([key, value], position) => {
  console.log(`The key : ${key} = ${value} is placed at ${position}`);
});



// Complicated one [ Dont touch (danger) ] :

for(var i=0 ; i< 6;i++){
  setTimeout(()=>console.log(i,'varloop') ,2000 )
}

for(let i=0 ; i<3 ;i++){
  setTimeout(()=>console.log(i,'letloop') ,1000 )
}


// Advance loop methods :
// Types of loop :
let original = [1, 2, 3, 4] ;

//(i) For Each 
let each = original.forEach((element) => element * 2);
console.log(each, "each");                                              // undefined

// (ii) Map 
let map = original.map((element) => element * 2);
console.log(map, "map");                                                // [ 2, 4, 6, 8 ]
 
// (iii) Filter 
const filter = arrr.filter((e) => {
  return e > 5;
});
console.log(filter, "filter"); 


// (iv) Find 
const findy = arrr.find((e) => {
  return e > 5;
});

console.log(findy,"find");

// (v) Some 
const somey = arrr.some((e) => {
  return e > 4;
});
console.log(somey,"some");

// (vi) Every

const everyy = arr.every((e) => {
  return e > 0;
});
console.log(everyy,"every");

// (vii) Reduce 
const red = arrr.reduce((e, i) => {
  return Math.abs(e - i);
});
console.log(red,"reduce");
// (viii) FlatMap

// (ix) FindIndex