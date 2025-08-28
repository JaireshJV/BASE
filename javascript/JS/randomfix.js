const arr = [1,2,3,4,5,6,1,7] ;

const count = (arr) => arr.reduce((acc,cur) =>((acc[cur] = (acc[cur] || 0) + 1), acc), {});

console.log(count(arr),"count");

const reducecheck = arr.reduce((acc,cur) => cur,0) ;
const reducecheck2 = arr.reduce((acc,cur) => cur) ;
console.log(reducecheck,'reducecheck');
console.log(reducecheck2,'reducecheck2');

