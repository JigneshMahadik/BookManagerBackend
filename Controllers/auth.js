const bookModel = require("../Models/auth");
const bcrypt = require("bcrypt");
require('dotenv').config();

const jwt = require("jsonwebtoken");
// JWT Secret Key
// const path = require("path");
const jwtSecretKey=process.env.jwtSecretKey;

const register = async (req,res)=>{
    console.log("Register API called");
}
const login = async (req, res) => {
    console.log("Login API called");
};



const authControllers = {
    register,
    login,
    
}

module.exports = authControllers;
