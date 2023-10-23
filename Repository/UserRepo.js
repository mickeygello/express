import User from "../model/UserModel.js";
import bcrypt from "bcrypt"
import { config } from "dotenv";
import jwt from "jsonwebtoken"

const login = async ({ email, password }) => {
    const userExisting = await User.findOne({ email }).exec()
    if (userExisting) {
        const isMatch = await bcrypt.compare(password, userExisting.password)
        if (isMatch == true) {
            //tao ra Access Token bang JWT
            const accessToken = jwt.sign(
                {
                    data: userExisting
                },
                process.env.SECRET_KEY_JWT,
                {
                    expiresIn: "5m"
                }
            )

            const refreshToken = jwt.sign(
                {
                    data: userExisting
                },
                process.env.SECRET_KEY_JWT_REFRESH,
                {
                    expiresIn: "5m"
                }
            )

            return {
                ...userExisting.toObject(),
                // status: "Logged in",
                password: "not show",
                // refreshToken: refreshToken,
                token: accessToken
            }
        } else {
            throw new Error("Wrong email and password")
        }

    } else {
        throw new Error("User not exist!")
    }

}

const register = async ({ name, email, password, phoneNumber, address }) => {
    debugger
    const userExisting = await User.findOne({ email }).exec()
    if (userExisting != null) {
        throw new Error("User already exists")
    }
    //Hash password
    const hashPassword = await bcrypt.hash(password, parseInt(process.env.SECRET_KEY))

    const newUser = await User.create({ name, email, password: hashPassword, phoneNumber, address })

    //clone  a new user
    return {
        ...newUser._doc,
        password: "not show"
    };
}

export default {
    login,
    register
}