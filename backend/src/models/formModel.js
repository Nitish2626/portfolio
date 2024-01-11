import mongoose from "mongoose";

const formSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
});

export const formModel=new mongoose.model("portfolioForm",formSchema);