const e = require("express");
const mysql = require("mysql")
const jwt = require('jsonwebtoken')
const bcrypt = require("bcryptjs")

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})


const jwtsecret = "Rumia is my number ONE!!!!"

exports.register = (req,res) => {
    console.log(req.body)

    const {username, password, email} = req.body
        db.query("SELECT email FROM user WHERE email = ? ", [email], async (error,result) => {
        if(error){
            console.log(error)
        }
        
        if(result.length > 0){
            return res.render("/register")
        }

        let hashedpassword = await bcrypt.hash(password, 8)
        console.log(hashedpassword)

        db.query("INSERT INTO users SET ?", {username: username, password: hashedpassword, email:email}, (error, result) => {
            if(error){
                console.log(error)
            }
        })
    })
    const token = jwt.sign({username}, jwtsecret)

    res.json({token})
}

exports.login = (reg,res) => {
    const {username, password} = req.body
    db.query("SELECT password FROM user WHERE username = ? ", [username], async (error,result) => {
        if(error){
            console.log(error)
        }

        let isMatch = await bcrypt.compare(password, result)
        if(!isMatch){
            res.render("/login")
        }

        const token = jwt.sign({username}, jwtsecret)
        res.json({
            token
        })
    })
}

