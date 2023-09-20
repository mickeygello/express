import express from 'express';
import { body, validationResult } from 'express-validator';
import { UserController } from '../controller/index.js';

const userRouter = express.Router();

//Activities => user Object
userRouter.get('/', async (req, res) => {
    res.send("get all users")
})

userRouter.get('/:id', async (req, res) => {
    res.send("get user by id")
})

userRouter.post('/register',
    body("email").isEmail().withMessage("Invalid format email !!!"),
    body("password").isLength({ min: 8 }).withMessage("Password must be at least 8 characters !!"),
    UserController.register
)

userRouter.post('/login',
    body("email").isEmail().withMessage("Invalid format email !!!"),
    body("password").isLength({ min: 5 }).withMessage("Password must be at least 5 characters !!"),
    //debugger
    UserController.login
)

userRouter.put('/edit', async (req, res) => {
    res.send("edit a new user")
})



export default userRouter