import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'

const connectDB = async()=>{
    try {
        const connectInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n mongodb connected !! db host: ${connectInstance}`);
        
    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1)
    }
}

export default connectDB