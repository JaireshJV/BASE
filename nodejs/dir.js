const fs = require("fs")

// For removing directory
if(fs.existsSync('./new')){
    fs.rmdir('./new',(err) =>{
        if(err){
            console.error(err);
        }
        console.log('Directory removed successfully !!!');  
    })
}

// For adding directory

if(!fs.existsSync('./new')){
    fs.mkdir('./new',(err) =>{
        if(err){
            console.error(err);
        }
        console.log('Directory created successfully !!!');  

    })  
}


