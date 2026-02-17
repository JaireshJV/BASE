import CustomerSchema from "../models/customerModel"


export const Login =async (req,res)=>{
try{
    
const {employeeid , password} = req.body ;

console.log(employeeid , password );
if(!employeeid || !password){
    throw new Error("EmployeeId or Password is not found")
}
const tofind = CustomerSchema.findOne(employeeid).$where ;

    res.status(200).json({status : true , message : "Login Successful"})
}
catch(e){
    res.status(500).json({status:false , message : "Login failed" , error : e.message})
}
}