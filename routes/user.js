import express from 'express';
import { body, validationResult } from 'express-validator';

const userRouter = express.Router();

//Activities => user Object
userRouter.get('/', async (req, res) => {
    res.send("get all users")
})

userRouter.get('/:id', async (req, res) => {
    res.send("get user by id")
})

userRouter.post('/register', async (req, res) => {
    res.send("register a new user")
})

userRouter.post('/login',
    body("email").isEmail().withMessage("Invalid format email !!!"),
    body("password").isLength({ min: 5 }).withMessage("Password must be at least 5 characters !!"),
    async (req, res) => {
        // debugger
        const error = validationResult(req)
        if(!error.isEmpty()){
            return res.status(400).json({errors: error.array()})
        }
        res.send("login successfully")
    })

userRouter.put('/edit', async (req, res) => {
    res.send("edit a new user")
})



export default userRouter