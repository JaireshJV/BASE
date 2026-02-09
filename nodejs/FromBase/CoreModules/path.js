const path = require("path") ;
const fs = require("fs") ;

console.log(__dirname,'dirname');
console.log(__filename,'filename');
console.log(path.basename(__filename),'basename');
console.log(path.extname(__filename),'file_extension');
console.log(path.dirname(__filename),'dirname_methodwise');

if(__dirname)
console.log(path.join(__dirname,'Demo','demo.js'),'join') ;

const checkfolder = 'Demo'
const checkfile = 'demo.js'

const checked = fs.existsSync(`${checkfolder} /${checkfile}`) ;

if(checked){
    console.log("The file exists ") 
}
else{
   console.log("The  file doesnot exists ")   
}

console.log(path.join(__dirname,`${checkfolder}`,`${checkfile}`),'join') ;