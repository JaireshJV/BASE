//BINARY

console.log(5+5);     // 10
console.log(5/2);     // 2.5
console.log(1+"11");  // 111
console.log(1+"Eleven");  // 1Eleven
console.log(3*"3");    // 9
console.log(3-"2");    // 1
console.log("7"+"6");  // 76
console.log("7"-"3");   // 4
console.log(33/"11");   // 3
console.log(("77"/"3"));  // 25.66666

/*
Notes : 1) By default , all the arithematic operations will happen
           between numbers and string number except addition
        2) Between number and actual string , the arithematic 
           operations will return "NaN" only except addition
        3) In this both operations, addition only do append
           operation like 1+"Eleven" ==> 1Eleven , 1+"11" ==> 111  */


console.log(1 + true);    // 2
console.log(true + true); // 2
console.log(false + false); // 0
console.log(true + false);   // 1
console.log(false * null);   // 0
console.log(true * null);    // 0
console.log(false / null);    // NaN
console.log(true / null);     // infinity
console.log(false + undefined);   // NaN
console.log(1 + true*2/3);  // 1.6666

let a = [1,2,3] ;
a[10] = 99 ;
console.log(a.length);
console.log(a[6]);
console.log(a);



















