import { body, validationResult } from "express-validator";
import { UserRepo } from "../Repository/index.js";

const getAllUsers = async (req, res) => {

}

const getUserById = async (req, res) => {

}

const login = async (req, res) => {
    //validation done
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { email, password } = req.body

    //call repositori cua user
    try {
        const loginUser = await UserRepo.login({ email, password })
        res.status(200).json({
            message: "login successfully",
            data: loginUser
        })
    } catch (error) {
        res.status(500).json({ errors: error.toString() })
    }
}

const register = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    //destructuring obvject
    const { name, email, password, phoneNumber, address } = req.body
    try {
        debugger
        const newUser = await UserRepo.register({ name, email, password, phoneNumber, address })
        res.status(201).json({
            message: "User registered successfully",
            data: newUser
        })
    } catch (error) {
        res.status(500).json({ errors: error.toString() })
    }
}


export default {
    getAllUsers,
    getUserById,
    login,
    register
}