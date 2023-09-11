import express from 'express';

const userRouter = express.Router();

//Activities => user Object
userRouter.get('/', async (req, res) =>{
    res.send("get all users")
})

userRouter.get('/:id', async (req, res) =>{
    res.send("get user by id")
})

userRouter.post('/create', async (req, res) =>{
    res.send("create a new user")
})

export default userRouter