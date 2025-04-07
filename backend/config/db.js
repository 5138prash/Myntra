import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/myntra')
        console.log('Connected to Compass')
    } catch (error) {
        console.error("Error to connecting database", error)
    }
}

export default connectDB;