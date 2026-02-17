import express from "express" ;
import { AddEmployee } from "../controllers/employeecontroller.js";


const router = express.Router() ;

router.post("/addemployee" ,AddEmployee) ;




export default router ;