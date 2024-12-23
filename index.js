const express = require("express");
// const authRoutes = require("./Routes/auth");
const { default: mongoose } = require("mongoose");
const cors = require("cors");
const app = express();
const booksRoutes = require("./Routes/books");

app.use(express.json());

// Use the CORS middleware
app.use(cors({
    origin: 'https://book-manager-rouge.vercel.app/', // Replace with the origin you want to allow
    // origin : "http://localhost:3000",
    // allowedHeaders: 'Content-Type,Authorization'
    // optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    methods : ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true
}));

// app.use(authRoutes);
app.use(booksRoutes);

mongoose.connect("mongodb+srv://jignesh:dUaszhl26B0rpW0f@cluster0.s7hzif4.mongodb.net/bookManager")
// mongoose.connect("mongodb://localhost:27017/bookManager")
.then(()=>{ console.log("DB Connection Successful"); })
.catch((error)=>{ console.log("Error while DB Connection !", error); })

app.listen(10000,()=>{
    console.log("Server is up and running on port : 10000");
});
