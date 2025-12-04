const num = 987 ;

const conv = num.toString() ;

const rev = conv.split('').reverse().join('') ;

console.log(rev,'rev');






// Ok is a boolean value , if the data has value , ok becomes true or else false :

let Ok = 37 ;


if (Ok) {
  console.log("truuuuuuuu");
} else {
  console.log("falssssssss");
}


// console.log(Array.from(w.matchAll("t"))[0].input);


// const fields = rows[0]?.column;




        const values = Array.isArray(jsonData)
      ? jsonData.map((row) =>
          fields.map((f) => {
            const value = row?.[f];
            return value === undefined || value === null || value === "" ? null : value;
          })
        )
      : [];