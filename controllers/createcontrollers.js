//import { todo } from "node:test";
import createmodels from "../models/createmodels.js";
import crypto from "crypto";
class createcontroller{
    static addTask=async(req,res)=>{
        const{category,todo}=req.body;
        try {
            if(category && todo)
            {
            const id = crypto.randomBytes(16).toString("hex");
             const addEvent=createmodels({
             todoId:id,
             category: category,
             todo:todo,
             });
            //  console.log(addEvent);
             const savedCreate=await addEvent.save();
            if(savedCreate)
            {
                console.log(savedCreate);
              return res.status(200).json({message:"Event Added"});  
            };
        }  
        else{
            return res.status(400).json({message:"failed"});  
        } 
           
        } catch (error) {
            return res.status(400).json({message:error.message});
        }
    }
    static deleteTask=async(req,res)=>{
        const{_id}=req.body;
        try {
            if(_id)
            {
              const deleteEvent= await createmodels.findByIdAndDelete(_id)
              return res.status(200).json({message:"deleted succesfully"});
            }
            else
            {
                return res.status(400).json({message:"No item found to be deleted"});
            }
        } catch (error) {
            return res.status(400).json({message:error.message});
        }
    }
    static updateTask=async(req,res)=>{
        const{_id}=req.body;
        try {

              //  const istodo = await createmodels.findOne({todo})        //this is used to find in the database whether the data is actually present or not.
                //const iscategory = await createmodels.findOne({category})

              if(_id)
              {
                 const updateEvent=await createmodels.findByIdAndUpdate(_id);
                 return res.status(200).json({message:"updated succesfully"});
              }
              else
              {
                return res.status(400).json({message:"item not found for update"}); 
              }
            
        }
         catch (error) {
            return res.status(400).json({message:error.message});
        }
    }
}


export default createcontroller;