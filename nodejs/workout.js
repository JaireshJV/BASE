const fs = require('fs')
const path = require('path') 


fs.readFile(path.join(__dirname,'Files','readfile.txt'),'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.writeFile(path.join(__dirname,'Files','writefile.txt'),'Hellooooooo !!!', (err, data) => {
    if (err) throw err;
    console.log(data);
  });

  fs.appendFile(path.join(__dirname,'Files','writefile.txt'),'\n\nVanakkam!!!', (err, data) => {
    if (err) throw err;
    console.log(data);
  });

  fs.rename(path.join(__dirname,'Files','writefile.txt'),path.join(__dirname,'Files','renamed.txt'), (err, data) => {
    if (err) throw err;
    console.log(data);
  });

  process.on('uncaughtException',err =>{
    console.error(`There was an uncaught error : ${err}`)
    process.exit(1)
})