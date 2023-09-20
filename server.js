import express from 'express';
import * as dotenv from 'dotenv';
import { userRouter, productRouter } from './routes/index.js';
import connectDB from './database/database.js';

// import { connect } from 'mongoose';
// import Product from "./model/product_model";

const app = express()
dotenv.config()

//config cho express lam viec voi du lieu theo dinh dang json
app.use(express.json())


//debugger => run command "node inspect server.js" => c + enter => repl => req.body

// //Routes: GET, POST, PUT, DELETE
app.get('/', (req, res) =>{
    res.send("welcome to Home RESTful API");
})

// app.use('/users', userRouter)
app.use('/users', userRouter)
app.use('/products', productRouter)

const port = process.env.PORT || 8080

app.listen(port, () =>{
    connectDB()
    console.log(`Server is running on port ${port}`);
})


// app.get('/', (req, res) => {
//     res.status(200).json({ message: "hello world" })
// })

// app.get('/products', (req, res) => {
//     try {
//         const data = [
//             {
//                 id: 1,
//                 names: "tom",
//                 age: 20
//             },
//             {
//                 id: 2,
//                 names: "larry",
//                 age: 19
//             }
//         ]
//         res.status(200).json(data)
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

// app.get('/blog', (req, res) =>{
//     res.send("welcome to my blog")
// })

// //listen on port 9999
// app.listen(9999, () => {
//     // console.log("server is running on port 9999");
// })


// app. post('/product',  async (req, res) =>{
//     try{
//         const product = await Product.create(req.body)
//         if(product){
//             res.status()
//         }
//     }
// })


//connect to mongodb
// connect('mongodb+srv://tuna:mickeygello@cluster0.uecnjpo.mongodb.net/?retryWrites=true&w=majority')
//     .then(() =>{
//         console.log("connect mongoDB successfully");
//         app.listen(9999, () => {
//             console.log("server is running on port 9999");
//         })
        
//     }).catch((error) =>{
//         console.log(error.message);
//     })