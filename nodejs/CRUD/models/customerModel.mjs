import mongoose from "mongoose";


const CustomerSchema = new mongoose.Schema({
employeeid :{
type : String,
require : true
},
password : {
    type : String,
    require : true
}
})

export default mongoose.model("Customer" , CustomerSchema)