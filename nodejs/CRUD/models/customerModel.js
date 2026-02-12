import mongoose from "mongoose";


const CustomerSchema = new mongoose.Schema({
title : {
    type : String ,
},
name : {
 type: String
},
age : {
    type  : Number 
}
})

export default mongoose.model("Customer" , CustomerSchema)