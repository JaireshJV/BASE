const Tbody = document.getElementById("tbody");
let apiData = [] ;
let filter = [] ;

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    apiData = data ;
    GetAPI(apiData);
  });

const handleSearch =(e)=>{
console.log(e.target.value,'searched');
const value = e.target.value ;
const filteredvalue = apiData.filter((elem)=> elem.title.toLowerCase().includes(value) && elem.userId == 1)
filter = filteredvalue ;
console.log(filteredvalue,'filter');

}


function GetAPI(data) {
    console.log(data,'ddd');
    console.log(filter,'fffff');
    
  filter.forEach((field,ind) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${ind + 1}</td>
<td>${field.userId}</td>
<td>${field.title}</td>
 `;
 Tbody.appendChild(row);
  });
}


