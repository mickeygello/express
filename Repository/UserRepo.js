import User from "../model/UserModel.js";
import bcrypt from "bcrypt"

const login = ({email, password}) =>{
    console.log(`email: ${email} and password: ${password}`);
}

const register = async ({name, email, password, phoneNumber, address}) =>{
    const userExisting = await User.findOne({email}).exec()
    if(userExisting != null){
        throw new Error("User already exists")
    }
    //Hash password
    const hashPassword = bcrypt.hash(password,parseInt(process.env.SECRET_KEY))

    const newUser = await User.create({name, email, password: hashPassword, phoneNumber, address})

    return newUser;
}

export default {
    login,
    register
}