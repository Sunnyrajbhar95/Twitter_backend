const userServices = require("../Services/user-services");
const services = new userServices();
const SignUp = async (req, res) => {
  try {
    const user = await services.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(200).json({
      user,
      success: true,
      message: "user created successfully",
      error: [],
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err,
    });
  }
};
const login=async(req,res)=>{
  try{
       
      const token=await services.find(req.body);
      return res.status(200).json({
        eamil:req.body.email,
        token:token,
        success:true,
        message:"token generate successfully"
      })
  }
  catch(err){
    console.log(err)
     return res.status(500).json({
        success:false,
        message:"something went wrong",
        error:err
     })
  }
}


module.exports={
    SignUp,
    login,
   
    
}
