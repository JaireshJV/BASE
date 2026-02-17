import express from "express" ;
import "dotenv/config" ;
import userRoutes from "./routes/userroutes.js" ;
import employeeRoutes from "./routes/employeeroutes.js"
import { db } from "./config/db.js";
import cors from "cors" ;

const app = express() ;

app.use(express.json()) ;
app.use(
  cors()
);

db() ;

app.use('/api/user',userRoutes) ;
app.use('/api/employee',employeeRoutes) ;

const PORT = process.env.PORT || 3000 ;
app.listen(PORT,()=>{
    console.log(`The app is running in the PORT ${PORT}`); 
})