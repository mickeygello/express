import { body, validationResult } from "express-validator";

const getAllUsers = async (req, res) => {

}

const getUserById = async (req, res) => {

}

const login = async (req, res) => {
    //validation done
    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }
    const {email, password} = req.body

    //call repositori cua user


    console.log(`emai: ${email} and password: ${password}`);
}

const register = async (req, res) => {

}


export default{
    getAllUsers,
    getUserById,
    login,
    register
}