

const data ={
    name : "Jai",
    gender : "Boy",
    age : "18"
}

const converttoJSON = JSON.stringify(data)
const converttoObj = JSON.parse(converttoJSON)

console.log("converttoJSON :" , converttoJSON);
console.log("converttoObj :" , converttoObj);

