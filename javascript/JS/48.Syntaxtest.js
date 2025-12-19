// Server creation :

const express = require("express");
const app = express();

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`The app is running in ${PORT}`);
});








// JSON :
const data ={
    name : "Jai",
    gender : "Boy",
    age : "18"
}

const converttoJSON = JSON.stringify(data)
const converttoObj = JSON.parse(converttoJSON)

console.log("converttoJSON :" , converttoJSON);
console.log("converttoObj :" , converttoObj);