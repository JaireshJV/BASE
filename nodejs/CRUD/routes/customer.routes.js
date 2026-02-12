import express from "express"  ;
import { Customer , getCustomer ,updateCustomer,deleteCustomer, getById} from "../controller/customer.controller.js";


const router = express.Router() ;

router.post('/post',Customer) ;
router.get('/get',getCustomer) ;
router.get('/getbyid/:id',getById)
router.put('/put/:id',updateCustomer)
router.delete('/delete/:id' ,deleteCustomer)

export default router ;