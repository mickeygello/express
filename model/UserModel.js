import mongoose, {ObjectId, Schema} from "mongoose";
import validator from "validator/lib";
import isEmail from "validator/lib/isEmail";

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
            validator: (value) => isEmail(),
            message: "Incorrect format"
        }
    },
    "password":{
        type: String,
        require: true
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