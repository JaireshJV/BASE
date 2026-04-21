const fetchApi =()=>{
    fetch("https://api.github.com/users")
    .then((res)=>res.json())
    .then((data)=>console.log(data,'dataaaaa'))
    .catch((error)=>console.error(error,'errorrr'))
}

fetchApi() ;