// SWAPPING OR SORTING

// const arr = [6, 7, 8, 9, 4, 5];

// console.log(arr.sort());

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//     console.log(arr);
//   }
// }

// const arr = [6, 7, 8, 9, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   let min = i;
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[min] > arr[j]) {
//       min = j;
//     }
//   }
//   let temp = arr[i];
//   arr[i] = arr[min];
//   arr[min] = temp;
// }

// console.log(arr);

// SEARCHING METHOD IN ARRAY :

// const arr = [6, 7, 8, 9, 4, 5, 7];

// function searchval(val) {
//   for (i = 0; i < arr.length; i++) {
//     if (val == arr[i]) {
//       console.log("Matching found : " + arr[i]);
//       break;
//     }
//   }
// }

// searchval(7);

// BINARY SEARCH METHOD OF ARRAY :

const arry = [
  6, 0, 8, 9, 4, 5, 7, 90, 66, 77, 33, 67, 99, 44, 22, 96, 55, 70, 87, 90, 78,
  64, 75, 46, 89, 23, 76, 33, 23, 65,
];

for (let i = 0; i < arry.length; i++) {
  let min = i;
  for (let j = i + 1; j < arry.length; j++) {
    if (arry[min] > arry[j]) {
      min = j;
    }
  }
  let temp = arry[i];
  arry[i] = arry[min];
  arry[min] = temp;
}

console.log(arry);

let start = 0;
let end = arry.length - 1;

let choose = 64;
let track = 0;
let pramid = 0;

while (start < end) {
  let jai = Math.ceil((start + end) / 2);

  if (arry[start] == choose) {
    console.log("start : " + arry[start]);
    break;
  }
  if (arry[end] == choose) {
    console.log("end : " + arry[end]);
    break;
  }
  if (arry[jai] == choose) {
    console.log("mid : " + arry[jai]);
    break;
  }

  if (choose > arry[jai]) {
    start = jai;
  } else {
    end = jai;
  }

  pramid = jai;

  if (pramid == jai) {
    track++;
  }
  if (track > 4) {
    console.log("Given Value is not Exist");
    break;
  }
}