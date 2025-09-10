// // for(let i=1 ; i<=5 ; i++){
// //   let row = "";
// //   console.log("i :",i);

// //   for(let j=1 ; j<=i ; j++){
// //     row += "*"
// //     console.log("j :",j);

// //   }
// //      console.log(row);
// // }


// // Right-Angled Triangle

// // let patnum = 4;

// // for (i = 0; i < patnum; i++) {
// //   for (let j = 0; j < patnum; j++) {
// //     console.log("*");
// //   }
// // }

// // let resl = "";
// // let l = 5;

// // for (i = 1; i <= 4; i++) {

// //   for (j = 0; j <i; j++) {
// //     resl += "*";
// //   }

// //   for (y = 1; y < l - i; y++) {
// //     resl += " ";
// //   }
// //     resl += "\n";
// // }

// // console.log(resl);

// // let pat = 8;
// // let str = "";

// // for(i = 1; i <=6; i++){

// // for(j = 0; j< i-1; j++){
// //     str += "*";
// // }
// //      str += "\n";
// // }

// // console.log(str)

// // let row = "";
// // let no = 4;

// // for (let i = 1; i < 5; i++) {
// //   for (let space = 0; space <= no - i; space++) {
// //     row += " ";
// //   }
// //   for (let star = 0; star < i; star++) {
// //     row += "*";
// //   }
// //   row += "\n";
// // }

// // console.log(row);

// // let nat = "" ;

// // for(i=1;i<=7;i++){
// //  for(j=7-i;j>0;j--) {
// //   nat+="*";
// //  }
// //  nat+="\n"
// // }

// // console.log(nat);

// // let st = "";
// // let cl = 7;

// // for(let i = 0 ; i<7 ; i++){
// //   for(k=cl-i;k<7;k++){
// //     st+=" ";
// //   }

// //   for(j = 0; j<7 ; j++){
// //     st+="*"
// //   }

// // st+="\n";
// // }

// // console.log(st);

// // Pyramid

// // let numb = 5;
// // let row = "";

// // for (i = 1; i <= numb; i++) {
// //   let middle = Math.ceil(numb / 2);
// //   // console.log(middle);
// //   for (m = 1; m <= middle - i; m++) {
// //     row += " ";
// //   }

// //   row += "\n";
// // }

// // console.log(row);

// // Pyramid

// // let nm = 5;
// // let row = "";

// // for (let i = 1; i <= nm; i++) {
// //   // Add spaces
// //   for (let space = 1; space <= nm - i; space++) {
// //     row += " ";
// //   }
// //   // Add stars
// //   for (let star = 1; star <= i; star++) {
// //     row += "* ";
// //   }
// //   row +="\n"
// // }

// // console.log(row);

// // let no_of = 5 ;
// // let row = "" ;

// // for(i=1 ; i<=no_of ; i++){
// //   for(let space = 1; space <= no_of-i ; space++){
// //     row +=" "
// //   }
// //   for(let star = 1; star <=i ; star++){
// //     row +="* "
// //   }
// //   row +="\n"
// // }

// // console.log(row);

// // Inverted Pyramid

// // let n_of = 5 ;
// // let roww = "" ;

// // for(i=1;i<=n_of;i++){
// //   for(let star = i ; star<=n_of ; star++){
// //     roww += "* "
// //   }
// //     roww += "\n"

// //   for(let space = 1 ; space <=i ; space++){
// //   roww += " "

// //   }
// // }

// // console.log(roww);

// // Fully symmetric triangle

// // let numb = 5;

// // for (let i = 1; i <= numb; i++) {
// //   let row = "";

// //   // Add spaces
// //   row += " ".repeat(numb - i);

// //   // Add stars (2*i - 1)
// //   row += "*".repeat(2 * i - 1);

// //   console.log(row);
// // }

// // let nb = 5 ;
// // let row = "" ;

// // for(i = nb ; i >=1 ; i--){
// //   for(let space = 1 ; space <= nb-i ; space ++){
// //     row += " "
// //   }
// //       for(let star = 1 ; star <= 2*i -1 ; star ++){
// //       row += "*"
// //     }
// //   row += "\n"
// // }

// // console.log(row);

// // let nuum = 7 ;
// // let rw = "" ;

// // for(let i=0 ; i<nuum ; i++){
// //   for(let space = 0 ; space < i ; space ++){
// //     rw +="  "
// //   }

// //   for(let star = i ; star < nuum ; star ++ ){
// //     rw +="* "
// //   }
// //   rw+="\n"
// // }

// // console.log(rw);

// // let nbb = 7 ;
// // let rww = "" ;

// // for(let i=1; i<=nbb; i++){
// // for(let space = i; space < nbb ; space++){
// //   rww += "  "
// // }
// // for(let star = 0 ; star < i ; star++){
// //   rww += "* "
// // }
// // rww += "\n"
// // }

// // console.log(rww);

// // L

// // let lnum = 4;
// // let l = "";

// // for (let i = 0; i < lnum; i++) {
// //   for (let ll = 0; ll < 1; ll++) {
// //     l += "* ";
// //   }
// //   if (i == lnum - 1) {
// //     for (let space = 0; space < lnum-1; space++) {
// //       l += "* ";
// //     }
// //   }
// //   else{
// //      for (let space = 0; space < lnum-1; space++) {
// //       l += " ";
// //     }
// //   }

// //   l += "\n";
// // }

// // console.log(l);

// // let line = 4;
// // let row = "";

// // for(let i = 0; i<line; i++){

// // if(i == line-1){

// //   for(let star = 0; star<1; star++){
// //     row += "*";
// //   }
// // }else{

// // for(let space =0; space< line-1; space++){

// // row +=" ";
// // }
// // }
// // row +="\n";

// // }

// // console.log(row);