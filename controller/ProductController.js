import { ProductRepo } from "../Repository/index.js";

const getAllProducts = async (req, res) => {
    try {
        const products = await ProductRepo.getAllProducts();
        res.status(200).json({
            message: 'Get all products successfully.',
            data: products
        })
    }
    catch (error) {
        res.status(500).json({
            message: error.toString()
        })
    }
}

const createProduct = async (req, res) => {
    try {
        const {
            name,
            price,
            quantity
        } = req.body;
        const result = await ProductRepo.createProduct({ name, price, quantity });
        if (!result) {
            res.status(500).json({ message: "Create product failed" })
        } else {
            res.status(200).json({
                message: "create product successfully",
                data: result
            })
        }
    } catch (error) {
        res.status(500).json({ errors: error.toString() })
    }
}


export default {
    getAllProducts,
    createProduct
}