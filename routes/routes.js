const express = require("express")
const router = express.Router()

router.get("/",(reg,res) =>{
    res.redirect("/login")
})

router.get("/login",(req,res) => {
    res.render("login")
})

router.get("/register",(req,res) =>{
    res.render("register")
})

router.get("/recipe",(req,res) =>{
    res.render("recipe")
})

router.get("/add-recipe",(req,res) =>{
    res.render("add-recipe")
})

module.exports = router