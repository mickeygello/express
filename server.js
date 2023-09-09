const express = require('express')
const app = express()

//Routes: GET, POST, PUT, DELETE

app.get('/', (req, res) => {
    res.status(200).json({ message: "hello world" })
})

app.get('/products', (req, res) => {
    try {
        const data = [
            {
                id: 1,
                names: "tom",
                age: 20
            },
            {
                id: 2,
                names: "larry",
                age: 19
            }
        ]
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.get('/blog', (req, res) =>{
    res.send("welcome to my blog")
})

//listen on port 9999
app.listen(9999, () => {
    console.log("server is running on port 9999");
})