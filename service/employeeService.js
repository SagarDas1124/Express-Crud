import Emp from "../model/employeeModel.js"

const createEmployee=async(req,res)=>{
    const { ename,email,emobile}=req.body;
    if(!ename || !email || !emobile)
    res.status(404).json({message:"missing fields"})
    else{
         try{
             const response=await Emp.create({ename,email,emobile});
             if(response)
             res.status(201).json({message:"Record succesfully created"})
             else
             res.status(201).json({message:" not Recorded "})
    }catch(err)
    {
        res.json(err.message);
    }
}
}

const getEmployees=async(req,res)=>{
    try{
        const e = await Emp.find()
        if(e.length!=0)
        res.status(200).json(e)
        else
        res.status(404).json({message:"No record found"})
    }catch(err){
        res.json(err.message)
    }
}

const getEmployee=async(req,res)=>{
    try{
        const e = await Emp.findById(req.params.id)
        if(e)
        res.status(200).json(e)
        else
        res.status(404).json({message:"No record found"})
    }catch(err){
        res.json(err.message)
    }
}

const deletEmployee=async(req,res)=>{
    try{
        const e = await Emp.findByIdAndRemove(req.params.id)
        if(e)
        res.status(200).json(e)
        else
        res.status(404).json({message:"No record found"})
    }catch(err){
        res.json(err.message)
    }
}

const updateEmployee=async(req,res)=>{
    try{
        const e = await Emp.findByIdAndUpdate(req.params.id,req.body,{nwe:true})
        if(e)
        res.status(200).json({message:"Record sucessfully updated "})
        else
        res.status(404).json({message:"Unable to update record"})
    }catch(err){
        res.status(404).json(err.message)
    }
}

 export {createEmployee,getEmployees,getEmployee,deletEmployee,updateEmployee}