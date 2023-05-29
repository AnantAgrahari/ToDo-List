import mongoose from "mongoose";
const createSchema=new mongoose.Schema({
    todoId:{
        type: String,
    },
    category:{
        type:String,
    },
    todo:{
        type:String,
    }
    
});
const createModel=mongoose.model("create",createSchema);
export default createModel;