// // Break

let k = 0 ;

while (k<=6){
if(k === 3){
    break ;                   // Breaks the loop
}
k++ ;
}

console.log("break :" ,k);

// // Continue

for (i = 1 ; i <6 ; i ++ ){

    if(i === 3){
        continue ;          // try break too
                             // Continue the loop skipping that particular
    }
    console.log("Continue :",i);

}



// 1
// 2
// break;
// 4
// 5
// 6
// O/P => 1,2,4,5,6

// 1
// 2
// CONTINUE;
// 4
// 5
// 6
// O/P => 1,2

// let n = 6 ;

// for(let i=0 ; i<n ; i++){
//     if(i==3){
//         break ;
//     }
//     console.log('Break :' , i);
// }



// for(let i=0 ; i<n ; i++){
//     if(i==3){
//         continue ;
//     }
//     console.log(console.log('Continue :' , i));
// }

