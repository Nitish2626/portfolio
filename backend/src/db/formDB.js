import mongoose from "mongoose";

export const connectDb = () => {
    try {
        mongoose.connect(process.env.MONGODB_URL)
        .then(()=>{
            console.log("Database Connected Successfully");
        })
    }
    catch(err){
        console.log(err);
    }
};