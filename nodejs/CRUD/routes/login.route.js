import express from "express" ;
import { Login } from "../controller/login.controller.js";

const router = express.Router() ;

router.post('/login',Login)




export default router ;