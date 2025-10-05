// let

let a = 1 ;
a = 7 ;
{
    console.log(a,'insidelet');
    
}
console.log(a,'let');

// var 

var b = 1 ;
b = 7 ;
{
    console.log(b,'insidevar');
    
}
console.log(b,'var');

// const

// const c = 1 ;
// c = 7 ;

// {
//     console.log(c,'insideconst');    
// }
// console.log(b,'const');

const arry = [1,2,3,2,2,5,5,6] ;

const unique = [...new Set(arry)] ;

console.log(unique,'unique');


let count = 0 ;
const unique_alt = arry.filter((ar,index)=>{
    if(arry.indexOf(ar) === index){
        return arry.indexOf(ar) === index ;
    }
    else{
        console.log(ar,'val');
        count++ ;
    }
}) ;

console.log(unique_alt,'unique_alt');
console.log(count,'count');

// For number 
const uniqarry = {};
for(let i of arry){
    console.log(i);
uniqarry[i] = (uniqarry[i] ?? 0 ) + 1 ;
}

console.log(uniqarry,'uniqarry');

// For everything

const ChinnaVandi = [
  "Car",
  "Auto",
  "Bike",
  "Bus",
  "Car",
  "Auto",
  "Bike",
  "Lorry",
  "Truck",
];

// // // Simplest way :
const countofvandi = {};

for (let item of arry) {
  if (countofvandi[item]) {
    countofvandi[item]++;
  } else {
    countofvandi[item] = 1;
  }
}

console.log(countofvandi);


