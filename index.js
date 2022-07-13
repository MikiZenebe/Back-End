// const express = require('express')
// const app = express()

// app.get("/", (req, res) => {
//     res.send("<h1>Server</h1>")
// })

// app.get("/list", (req, res) => {
//     res.send("<li>Database List</li>")

// })

// app.get("/about", (req, res) => {
//     res.send("<h1>I'm Micky Front-End Dev</h1>")
// })

// app.listen(3001, () => {
//     console.log("Server is Good")
// })





 //Import the packages
// const express = require("express")
// const app = express()
// const mongose = require("mongoose")
// const UserModel = require('./models/Users')

// app.use(express.json())
// mongose.connect("mongodb+srv://miki:miki1321@cluster0.1vsuh.mongodb.net/MERN_Users?retryWrites=true&w=majority")

// app.get("/getUser", (req, res) => {
//     UserModel.find({}, (err, result) => {
//         if (err) {
//             res.json(err)
//         } else {
//             res.json(result)
//         }
//     })
// })

// app.post("/addUser", async (req, res) => {
//     const user = req.body
//     const newUser = new UserModel(user)
//     await newUser.save();

//     res.json(user)
// })

// //Start the server
// app.listen(3002, () => {
//     console.log("The server is start...")
// })