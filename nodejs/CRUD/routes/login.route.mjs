import express from "express" ;
import { Login } from "../controller/login.controller.mjs";

const router = express.Router() ;

router.post('/login',Login)




export default router ;