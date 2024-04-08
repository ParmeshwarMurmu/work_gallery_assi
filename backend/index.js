const express = require('express');
const { connection } = require('./Config/db');
const { uploadProject } = require('./Routes/UploadProject');
const { homeRouter } = require('./Routes/HomeRouter');
require('dotenv').config()
const cors = require('cors')

const app = express();
app.use(cors())
app.use('/uploads', express.static('uploads'));
app.use('/upload', uploadProject)
app.use('/home', homeRouter)

app.listen(process.env.PORT, async()=>{
    try {
        console.log("Connecting DataBase");
        await connection;
        console.log("Connected To DataBase");
        console.log(`Your server is running at port ${process.env.PORT}`);
    } catch (error) {
        console.log("something went wrong");
        console.log(error);
    }
})
