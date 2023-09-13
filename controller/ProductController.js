// import Product from "../model/product_model.js"
// import express from "express"

// const productController = {
//     //function defined
//     getAllProducts: async (req, res) => {
//         const p = new Product({
//             name: "product1",
//             quantity: 3,
//             price: 100,
//             image: "blalalall"
//         })
//         const p2 = new Product({
//             name: "product2",
//             quantity: 4,
//             price: 165,
//             image: "lalalal"
//         })
//         const p3 = new Product({
//             name: "product3",
//             quantity: 7,
//             price: 1668,
//             image: "blalaal"
//         })
//         const list = [p, p2, p3]
//         const products = await list
//         if (!products) {
//             return res.status(404).json({ message: "Products not found" })
//         }
//         res.status(200).json(list)
//     }
// }

// export default productController