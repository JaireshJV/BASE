import userSchema from "../models/usermodel.js"

export const register = async (req, res) => {
  try {
    const data = req.body ;
    const register = await userSchema.create(data)
    return res.status(200).json({status : true , message : "Registration successfully !!",data : register})
  } catch (e) {
    return res.status(500).json({status : false , message : "Registration failed !!!"})
  }
};


export const getUser = async (req, res) => {
  try {
    const register = await userSchema.find() ;
    return res.status(200).json({status : true , message : "User fetched successfully !!",data : register})
  } catch (e) {
    return res.status(500).json({status : false , message : "User fetched failed !!!",error : e.message})
  }
};

export const deleteUser = async (req,res) =>{
      const {id} = req.params ;
    console.log(id,'idddd');
  try{
    const {id} = req.params ;
    console.log(id,'idddd');
    
const deleteuser = await userSchema.findByIdAndDelete({_id:id}) ;
return res.status(200).json({status : true , message : "User deleted successfully" , res : deleteuser})
  }
  catch(e){
    return res.status(500).json({status : false , message : "User deletion failed",stack:e.stack})
  }
}