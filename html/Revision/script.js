// const mainform = document.getElementById("myForm") ;

// Individual base method :

// mainform.addEventListener("submit",function(e){

//     e.preventDefault() ;

//     const user = mainform.user_name.value ;
//     const age = mainform.age.value ;
//     const password = mainform.age.value ;

//     const values = {
//         name : user ,
//         age : age ,
//         password : password
//     }

//     console.log(values ,'values')
// })

const mainform = document.getElementById("myForm");

mainform.addEventListener("submit",  (e)=> {
  e.preventDefault();

  console.log(mainform, "mainform");

  // (i) Standard Method to convert FormData to JSObject :

  const formData = new FormData(mainform);
  // The values will be in this format after using FormData .
  // ("user_name" → "John","age" → "25","password" → "12345" )

  const entries = formData.entries();
  // [["user_name","Jai"],["age","25"],["password","admin@"]]
  const data = Object.fromEntries(entries);
console.log(data,'data');

//   const newVal = {...data,userId : 1} ;

//   console.log(newVal,'newVal');
  

  // By using Object.fromEnties , the format gets changed into Object .
  // {user_name: 'Abisheth', age: '77', password: '234'}


  // (ii) Alternative method to convert FormData to JSObject :

  // const data = {};
  // new FormData(mainform).forEach((value, key) => { data[key] = value; });

  // const data = {};
  // formData.entries((key,value)=>{
  //     console.log(key,value ,'keyyyyy');

  // })

// FETCH :



const Backend_url = "https://dummyjson.com" ;

// const fetchapi =   fetch(`${Backend_url}`, {
//     body: JSON.stringify(data),
//     headers: {
//       "content-type": "application/json"
//     }
//   })


  

//   const Api_url = fet/posts

//   const res = `${Api_url}/add`,

//   fetchapi.then((res)=> res.json())
//   .then((data)=> console.log(data,'data'))
// .catch((err)=> console.log(err,'error')
// )



//     fetch("https://dummyjson.com/posts/add", {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//       "content-type": "application/json"
//     }
//   }).then((res)=> res.json())
//   .then((data)=> console.log(data,'data'))
// .catch((err)=> console.log(err,'error')
// )




// AXIOS :


  //   console.log(data, "formDataaa");
});







// (
//   "user_name" → "John",
//   "age" → "25",
//   "password" → "12345"
// )

// ["user_name", "John"]
// ["age", "25"]
// ["password", "12345"]

// {
//   user_name: "John",
//   age: "25",
//   password: "12345"
// }


