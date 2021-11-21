const express = require("express")
const authControllers = require("../controllers/auth")
const router = express.Router()
const checkAuth = require("../controllers/checkAuth")

router.post("/login", checkAuth, (req,res) => {
    res.redirect("/recipe")
})

router.post("/register", authControllers.register)

router.post("/recipe",(req,res) =>{
})

router.post("/add-recipe",(req,res) =>{
})

module.exports = router