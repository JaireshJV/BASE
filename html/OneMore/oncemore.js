const FormID = document.getElementById("formId") ;

FormID.addEventListener('submit',(e)=>{
e.preventDefault() ;

console.log(FormID,'FormID');

const Data = new FormData(FormID) ;
const fromEnt = Data.entries() ;

const DataInform = Object.fromEntries(fromEnt);

console.log(DataInform ,'DataInform');

})