// BINARY OPERATOR:

// (I) Arithematic operation :

// (i) Number vs Number :
// Performs normal arithematic operations .
console.log(5+5);     // 10
console.log(5/2);     // 2.5
console.log(5*2);     // 10
console.log(5%2);     // 1
console.log(5-2);     // 3



// (ii) Number vs String :
// Expect addition , all arithematic operations will be excecuted in Number vs String method ,
// Because in addition Number and String will be concated .

// Addition :
console.log(1+"11");       // 111
console.log(1+"Eleven");   // 1Eleven


// Other than addition :
console.log(3*"3");     // 9
console.log(3-"2");     // 1
console.log(33/"11");   // 3
console.log(33%"11");   // 0

// Number,StringNumber vs ActualString :
console.log(1*"Eleven");  // NaN
console.log(1-"Eleven");  // NaN
console.log(1/"Eleven");  // NaN
console.log(1%"Eleven");  // NaN

console.log("1"*"Eleven");  // NaN
console.log("1"-"Eleven");  // NaN
console.log("1"/"Eleven");  // NaN
console.log("1"%"Eleven");  // NaN


// (iii) String vs String :
// Same as Number vs String category (ii) .
console.log("7"+"6");  // 76
console.log("7"-"3");   // 4
console.log(("77"/"3"));  // 25.66666




console.log(1 + true);              // 2
console.log(true + true);           // 2
console.log(false + false);         // 0
console.log(true + false);          // 1
console.log(false * null);          // 0
console.log(true * null);           // 0
console.log(false / null);          // NaN
console.log(true / null);           // infinity
console.log(false + undefined);     // NaN
console.log(1 + true*2/3);          // 1.6666
console.log(null + undefined );     // NaN



let a = [1,2,3] ;
a[10] = 99 ;
console.log(a.length);
console.log(a[6]);
console.log(a);



















