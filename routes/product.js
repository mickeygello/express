import express from 'express';
// import productController from '../controller/ProductController.js';

const productRouter = express.Router();

productRouter.get('/',  (req, res) =>{
    // productController.getAllProducts(req, res)
    res.send("get all products")
})

productRouter.get('/:id', (req, res) =>{
    res.send("get product by id")
})


productRouter.post('/create', (req, res) =>{
    res.send("create a new product")
})


export default productRouter;