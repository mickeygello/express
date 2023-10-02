import express from 'express';
import { ProductController } from '../controller/index.js';

const productRouter = express.Router();
productRouter.get('/', ProductController.getAllProducts)
productRouter.post('/create', ProductController.createProduct)


export default productRouter;