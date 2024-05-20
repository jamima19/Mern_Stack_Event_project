import mongoose from"mongoose";
import validator from "validator";
const messageSchema = new mongoose.Schema({
name:{
    type:String,
    required:[true,"name required!"],
    minLength:[4,"name must contain at least 4 character"],
},
email:{
    type:String,
    required:[true,"Email required!"],
    validate:[validator.isEmail,"plz provide correct email!"],
},
subject:{
    type:String,
required:[true,"subject required"],
minLength:[6,"subject must contain at least 6 character"],
},
message:{
    type:String,
    required:[true,"message required"],
minLength:[10,"message must contain at least 10 character"]
},
});

export const Message = mongoose.model("Message", messageSchema);