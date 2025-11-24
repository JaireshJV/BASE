// SWAPPING OR SORTING

const arr = [6, 7, 8, -9, 4, 10, -88, -77, -78, 44, -5];

console.log(arr.sort(), "sort"); // Wrong method as it works fine with only single digit

console.log(
  arr.sort((a, b) => a - b),
  "asc"
); //  Proper working process to sort an array even any form of values [in ascending order]

console.log(
  arr.sort((a, b) => b - a),
  "desc"
); //  Proper working process to sort an array even any form of values [in descending order]

// Bubble Sort :

// Swaps happen many times during each loop.Works by comparing and swapping repeatedly.
// Slower because of frequent swaps . Easy to understand and implement.

const arry = [9, 7, 8, 9, 4, 3];

for (let i = 0; i < arry.length; i++) {
  for (let j = i + 1; j < arry.length; j++) {
    if (arry[i] > arry[j]) {
      let temp = arry[i];
      arry[i] = arry[j];
      arry[j] = temp;
    }
  }
}

console.log(arry, "swapping");

// Selection Sort :

// Swaps happen only once per pass. Focuses on finding the minimum first, then swapping.
// Faster than Bubble Sort (less swapping). Still simple, but more efficient in swapping steps.

const arryy = [6, 7, 8, 9, 5, 4, 2];

for (let i = 0; i < arryy.length; i++) {
  let min = i;
  for (let j = i + 1; j < arryy.length; j++) {
    if (arryy[min] > arryy[j]) {
      min = j;
    }
  }
  let temp = arryy[i];
  arryy[i] = arryy[min];
  arryy[min] = temp;
}

console.log(arryy, "arryy");

// SEARCHING METHOD IN ARRAY :

const arrr = [6, 7, 8, 9, 4, 5, 7];

function searchval(val) {
  for (i = 0; i < arrr.length; i++) {
    if (val == arrr[i]) {
      console.log("Matching found : " + arrr[i]);
      break;
    }
  }
}

searchval(7);


// BINARY SEARCH METHOD OF ARRAY :

const ar = [
    57, 12, 86, 33, 48, 95, 7, 64, 28, 76,
  91, 4, 58, 81, 26, 39, 62, 18, 72, 41,
  54, 36, 88, 13, 69, 9, 23, 97, 60, 44,
  83, 3, 52, 31, 94, 15, 79, 25, 68, 42,
  87, 21, 5, 70, 49, 80, 19, 29, 37, 92,
  50, 8, 46, 16, 84, 35, 67, 24, 40, 73,
  30, 63, 47, 14, 78, 22, 34, 75, 66, 27,
  11, 56, 32, 82, 90, 53, 17, 99, 10, 38,
  20, 98, 45, 6, 59, 71, 55, 85, 2, 43,
  1, 65, 61, 93, 77, 74, 51, 89, 96, 

];

for (let i = 0; i < ar.length; i++) {
  let min = i;
  for (let j = i + 1; j < ar.length; j++) {
    if (ar[min] > ar[j]) {
      min = j;
    }
  }
  let temp = ar[i];
  ar[i] = ar[min];
  ar[min] = temp;
}

console.log(ar, "sorted");

let start = 0;
let end = ar.length - 1;

let choose = 641 ;
let track = 0;
let pramid = 0;

while (start < end) {
  let mid = Math.ceil((start + end) / 2);

  if (ar[start] == choose) {
    console.log("start : " + ar[start]);
    break;
  }
  if (ar[end] == choose) {
    console.log("end : " + ar[end]);
    break;
  }
  if (ar[mid] == choose) {
    console.log("mid : " + ar[mid]);
    break;
  }

  console.log(ar[start], "start");
  console.log(ar[mid], "mid");
  console.log(ar[end], "end");

  if (choose > ar[mid]) {
    start = mid;
  } else {
    end = mid;
  }

  pramid = mid;

  if (pramid == mid) {
    track++;
  }

  let limit = Math.floor(Math.log2(ar.length));     // we can prevent the loop run unneccesarily by setting then limit .
  
  if (track > limit ) {
    console.log("Given Value is not Exist");
    break;
  }
}
