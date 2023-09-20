import mongoose from "mongoose";

//ham ket noi CSDL mongoDB
const connectDB = () =>{
    try{
        const connection = mongoose.connect(process.env.MONGO_URI)
        console.log("Connect to MongoDB successfully");
        return connection
    }
    catch(errors){
        throw new Error("Database connection failed !!")
    }
}

export default connectDB