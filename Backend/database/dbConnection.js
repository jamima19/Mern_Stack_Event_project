
import { config } from 'dotenv';
import mongoose from "mongoose";


export const dbConnection = () =>{
    mongoose
    .connect(process.env.MANGODB_URL,{ dbName: "MERN_STACK_DATABASE" },{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to database!");
      
})
.catch(err=>{
        console.log("some error occured while connecting to database",err)
    });
};

