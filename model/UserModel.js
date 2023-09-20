import mongoose, {ObjectId, Schema} from "mongoose";    
import isEmail from "validator/lib/isEmail.js";

const User = mongoose.model("User", new Schema({
    //model validation
    "id":{
        type: ObjectId
    },
    "name":{
        type: String,
        require: true,
        validate: {
            validator: (value) => value.length > 3,
            message: "length of name > 3"
        }
    },
    "email":{
        type: String,
        require: true,
        validate:{
            validator: (value) => isEmail(value),
            message: "Incorrect format"
        }
    },
    "password":{
        type: String,
        require: true,
        validate: {
            validator: (value) => value.length >= 8,
            message: "length of name > 8"
        }
    },
    "phoneNumber":{
        type: String,
        require: false
    },
    "address":{
        type: String,
        require: true
    }
}))

export default User;