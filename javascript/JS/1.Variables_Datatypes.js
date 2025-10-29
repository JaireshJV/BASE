
// Notes : 

// initialization : let a,const a,var a = 10 ;

// declaration : let a , const a , var a ;

// assignment : a=10 ; 


// * var : Can Reassign as well as Redeclare ,
// * let : Can only Reassign not Redeclare ,
// * const : Cannot Reassign and Redeclare .

// 1) Datatypes :
//  A Datatype specifies the type of data that a variable can store such as Number, String , Boolean , Array etc .

// (i) Primitive DataTypes : [immutable]
//         Variable can hold only one value .
//                 String,Number,Boolean,undefined,null,Symbol and bigint — are immutable, meaning you can’t change their values in place.,

// (ii) Non-Primitive DataTypes : [mutable]
//         One variable can hold more than one value .
//                 Array , Object functions, maps, and sets — are mutable, because they are stored by reference, and you can 
//                 change their contents without creating a new one..



// 2) Hoisting :

// Hoisting is the JavaScript engine’s behavior of moving declarations (not initializations) to
// the top of their containing scope before code runs. That means variables and functions can
// appear to be used before they are written in source code — but exactly what gets moved and how depends on the kind of
// declaration (var, let, const, function declaration, function expression, class, etc.)

// var: hoisted, initialized to undefined → safe to reference (will be undefined).

// function declaration: hoisted, fully initialized → callable before definition.

// let / const: hoisted, not initialized until execution reaches declaration → TDZ, accessing before gives ReferenceError.

// class: hoisted like let/const (Temporal Dead Zone - TDZ), cannot be used before declaration.

// Function expression (assigned to var/let/const): follows the variable rules (not hoisted as a function).

 // 3) Closure :

//  “A closure is a function bundled with its lexical environment. It lets an inner function access variables 
//  from the outer function even after the outer function has returned.”

//  function makeCounter() {
//   let count = 0;               // local variable in outer scope
//   return function() {          // inner function — this is the closure
//     count += 1;
//     return count;
//   };
// }

// const counter = makeCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3


// 4) Scope of variables

// let
let a = 5 ;
b = a;

console.log(typeof b ,'type');

{
    let d = 7 ;
    console.log("Let1:", a);                // 7,5   
}

// console.log("Let2",d);

// var

console.log(c,'above');
var c = 5 ;

{
    var c = 7 ;
    console.log(c);                 // 7,7
}

console.log(c);

// const

const e = 5 ;

{
    const f = 7 ;
    console.log("const1 :",e);                 // 7,5
}

// console.log("const2 :", f);

