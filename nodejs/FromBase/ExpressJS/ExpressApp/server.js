const express = require("express") ;

const app = express() ;

app.use((req,res,next) => {
console.log(req.url , "URL");
next()
})

app.get('/',(req,res)=>{
res.status(200).send("HI HELLO VANAKKAM !!!") ;
console.log('called');
})

app.post('/',(req,res)=>{
res.status(200).send("POST METHOD")
})

app.use((req,res,next)=>{
res.status(404).send("404 PAGE NOT FOUND")
})

const PORT = 5000 ;
app.listen(PORT,()=>{
    console.log(`Server is running in PORT ${PORT}`);  
})
