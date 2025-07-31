// console.log("Itz Revision")

// let slice = 'Jairesh'
// console.log(slice.slice(3,5))

// const myStringNumber = '77'
// const myString = 'Seventy Seven'
// const myNumber = 77
// const myFloat = 77.17

// console.log(typeof(myStringNumber));
// console.log(typeof(myString));
// console.log(typeof(myNumber));
// console.log(typeof(myFloat));

// console.log(!isNaN(Number(myStringNumber)));

// // console.log(myNumber);

// const sampleArray = [33,88,11,99]

// console.log(Math.min(...sampleArray));
// console.log(Math.max(...sampleArray));

// console.log(slice.charAt(Math.floor(Math.random() * slice.length)));

// console.log(slice.length);

// for(i=0;i<= slice.length;i++){
//     console.log(slice.charAt(i));
// }

// let b = 0 ;

// while (b<=6){
//     if(b===3){
//         break ;
//     }
//  b = b+1 ;
// }

// console.log(b,'break');

// for (c = 1; c<6 ; c ++){
//     if(c==3){
//         continue ;
//     }
//     console.log(c);

// }

// let cnt = 0;

// while (cnt < 6) {
//     cnt = cnt + 1;
//     if (cnt === 3) {
//         continue;
//     }
//     console.log(cnt, 'continue');
// }

// console.log("11" + 1);   // 111
// console.log("11" - 1);   // 10
// console.log("11" * 1);   // 11

// function multiplication(a,b){
//     return a*b
// }

// console.log(multiplication(6,5));

// function getUserFromMail(email){
//     return email.slice(0,email.indexOf("@"))
// }

// console.log(getUserFromMail("jairesh@gmail.com"));

// function toProperCase(name){
//     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
// }

// console.log(toProperCase("jairesh"));

// Find the repeated character in an string

const char = "malayalam";

let arr = [];

for (i = 0; i < char.length; i++) {
  let count = 0;
  for (j = 0; j < char.length; j++) {
    if (char[i] == char[j] && i !== j) {
      count++;
    }
  }

  let repeated = false;

  for (k = 0; k < arr.length; k++) {

    if (arr[k] == char[i]) {
      repeated = true;
    }
  }
  if (count > 0 && repeated == false) {
    arr.push(char[i]);
  }
}

console.log("The repeated characters are : " + arr.slice(0,-1) + " " + "and" + " " + arr[arr.length - 1]);
console.log();

