import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB() // It is async so it can return promises

.then(()=>{
  app.listen(process.env.PORT || 8000, ()=>{
    console.log(`SERVER IS RUNNING ON PORT ${process.env.PORT}`);
    
  })
})
.catch((err)=>{
  console.log("MONGO db connection failed !!!", err);
})
  








/*
const app = express()

(async()=>{
    try {
      mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
      app.on('error', (error)=>{
        console.log("ERR: ", error);
        throw error
      })
      
      app.listen(process.env.PORT, ()=>{
        console.log(`App is listening on ${process.env.PORT}`);
        
      })
      
    } catch (error) {
        console.error("Error: ", error)
        throw error;
    }
})()
*/