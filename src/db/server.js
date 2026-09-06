import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// Db is in another continent for that we use asynct to control time and sometime err is also came from database so we use try catch also
const connectDB = async () => {
  try {
   const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(
  `\n Database connected successfully: ${connectionInstance.connection.host}`
);
    } catch (err) {
    console.log("MONGO DB CONNECTION ERROR ", err);
    process.exit(1);
    
  }
}

export default connectDB;