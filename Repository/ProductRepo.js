import Product from "../model/ProductModel.js";

const getAllProducts = async () => {
    const products = await Product.find().exec();
    return products;
}

const createProduct = async ({ name, price, quantity }) => {
    try {
        const newProduct = await Product.create({ name, price, quantity })
        return {
            ... newProduct._doc
        }
    } catch (error) {
        throw new Error('Error:' + error.message)
    }
}

export default {
    getAllProducts,
    createProduct
}