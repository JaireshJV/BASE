const fs = require("fs");

// (i) fs async
// Writefile and readfile are by default it will be async behaviour , 
// we can extract the data or errors through the callback functions
fs.writeFile('test.txt',"Itz text file",()=>{
    console.log('File created successfully !!!');
}) ;

fs.readFile('test.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data, 'Read file successfully !!!');
})




// (ii) fs sync 
// Writefile and readfile have the synchronous behaviour without callback functions to get the data or errors
// but we can get the proper data and error by using the try catch method .
fs.writeFileSync('text2.txt',"Itz text 2",
    console.log('Text 2 created successfully !!!')
)

try {
  const data = fs.readFileSync("text2.txt", "utf-8");
  console.log(data, "The data");
} catch (error) {
  console.log(error, "No file found");
}





