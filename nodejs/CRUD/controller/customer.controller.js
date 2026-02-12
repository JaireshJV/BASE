import CustomerModel from "../models/customerModel.js";

export const Customer = async (req, res) => {
  try {
    const body = req.body;
    if (!body) {
      throw new Error("No data found");
    }
    const dbcall = await CustomerModel.create({
      title: body.title,
      name: body.name,
      age: body.age,
    });

    console.log(dbcall, "bodyyyy");

    res.status(200).json({
      status: true,
      message: "Customer Added Successfully !!!",
      response: dbcall,
    });
  } catch (e) {
    return res.status(500).json({
      status: false,
      message: "Customer Created failed !!! ",
      error: e.message,
    });
  }
};

export const getCustomer = async (req, res) => {
  try {
    const allcustomers = await CustomerModel.find();
    res.status(200).json({
      status: true,
      message: "Fetched Data sucessfully",
      response: allcustomers,
    });
  } catch (e) {
    return res.status(500).json({
      status: false,
      message: "Failed to fetch",
      error: e.message,
    });
  }
};

export const getById = async(req,res)=>{
try{
const {id} = req.params ;
console.log(id,'idididid');
const getbyid = await CustomerModel.findById({_id : id})
res.status(200).json({status : true,message : "Get by Id Data fetched successfully",getbyid})
}
catch(e){
  return res.status(500).json({
    status : false ,message : "Id not found"
  })
}
}

export const updateCustomer = async (req, res) => { 
  try {
    const { id } = req.params;
    console.log(id, "ididid");
    const data = req.body;
    const update = await CustomerModel.findByIdAndUpdate({ _id:id }, { ...data });
    res
      .status(200)
      .json({ status: true, message: "Data updated successfully", update });
  } catch (e) {
    return res.status(500).json({
      status: false,
      message: "Failed to update",
      error: e.message,
    });
  }
};

export const deleteCustomer = async (req, res) => {
  try {
    const {id} = req.params ;
    const deleteid = await CustomerModel.findByIdAndDelete({_id:id}) ;
    res.status(200)
    .json({status : true , message : "Data deleted successfully" ,deleteid}) ;
  } catch (e) {
    return res.status(500).json({
      status: false,
      message: "Failed to delete",
      error: e.message,
    });
  }
};
