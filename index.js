require('dotenv').config();

const express = require("express");
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const authRoutes = require("./routes/auth");
const dashboardRoutes = require("./routes/dashboard");
const verifyToken = require("./routes/validate-token");

app.use(express.json());
app.use("/api/user",authRoutes);
app.use("/api/dashboard", verifyToken, dashboardRoutes);
app.use(cors);

mongoose.connect(process.env.DB_CONNECT,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
},()=>{
    console.log("Connectd to database!");
});



app.listen(3000,()=>{
    console.log("Server is running on port number 3000");
})

