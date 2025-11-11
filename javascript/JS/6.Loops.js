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