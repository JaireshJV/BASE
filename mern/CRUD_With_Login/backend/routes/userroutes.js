import express from "express" ;
import { deleteUser, getUser, register } from "../controllers/authcontroller.js";

const router = express.Router() ;

router.post("/register",register) ;
router.get("/",getUser) ;

router.delete("/deleteuser/:id",deleteUser)




export default router ;