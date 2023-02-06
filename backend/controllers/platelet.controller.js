const Platelet = require("../models/Platelet")

exports.createPlatelet = async (req, res) =>{
  
    try{
      console.log(req.body)


     const platelet = new Platelet(req.body)
     
     const result = await platelet.save()
    
     res.status(200).json({
         status:'success',
         message:'Data inserted Successfully',
         data:result
        })
    }catch(error){
     res.status(400).json({
         status:'failed',
         message:'data not inserted',
         error:error.message
     })
    }
 }

 exports.getPlatelets = async (req,res,)=>{
    try{
       const products = await Platelet.find({})
        res.status(200).json({
        status:'success',
        message:'data get Success',
        data:products
       })
    }catch(error){
      res.status(400).json({
        status:'failed',
        message:'data not found',
        error:error.message
      })
    }
}