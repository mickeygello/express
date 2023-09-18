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
    const {email, password} = req.body

    //call repositori cua user
    res.status(200).json({message:"login successfully"})
}

const register = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    //destructuring obvject
    const {name, email, password, phoneNumber, address} = req.body
    UserRepo.register({name, email, password, phoneNumber, address})
}


export default{
    getAllUsers,
    getUserById,
    login,
    register
}