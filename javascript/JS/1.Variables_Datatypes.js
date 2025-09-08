// // Scope

// let
let a = 5 ;
let b = a

{
    let d = 7 ;
    console.log("Let1:", a);                // 7,5
}

console.log("Let2",d);

// var
var c = 5 ;
{
    var c = 7 ;
    console.log(c);                 // 7,7
}

console.log(c);

// const
const c = 5 ;

{
    const d = 7 ;
    console.log("const1 :",c);                 // 7,5
}

console.log("const2 :", d);