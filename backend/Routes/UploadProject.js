const express = require('express')
const multer = require('multer')
const fs = require('fs');
const { ProjectModel } = require('../Models/ProjectSchema');



const uploadProject = express.Router();

const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    },
});

const upload = multer({ storage: storage })

uploadProject.post('/newSubmission', upload.single('workGallery'), async (req, res) => {

    // console.log(req.body);
    // const { title, additionalDetails, description } = req.body;
    // console.log(req.file);
    try {

        const { title, additionalDetails, description } = req.body;

        // Log the extracted fields
        console.log("Title:", title);
        console.log("Description:", description);
        console.log("Additional Details:", additionalDetails);

        const filename = req.file.filename

        console.log(filename);

        const newSubmission = new ProjectModel({title, description, additionalDetails, image:filename})
        await newSubmission.save();
        res.status(200).send({ "msg": "Uploded Successful" })

    } catch (error) {
      console.log(error);
    }
})

module.exports = {
    uploadProject
}

