import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI) // 'mongodb://localhost:27017/myntra'
        console.log('Connected to Database ')
    } catch (error) {
        console.error("Error to connecting database", error)
    }
}

export default connectDB;