
import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/server.js";

const app = express();
dotenv.config();



connectDB();

//IIfe

// (async () => {
//   try {
//     await mongoose.connect("${process.env.MONGO_URI}/${DB_NAME}");

//     app.on("error", (err) => {
//       console.log(err);
//       throw err;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`Server is running on port ${process.env.PORT}`);
//     });
//   } catch (err) {
//     console.log(err);
//     throw err;
//   }
// })();


