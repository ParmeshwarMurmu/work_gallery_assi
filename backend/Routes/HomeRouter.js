const express = require('express');
const { ProjectModel } = require('../Models/ProjectSchema');


const homeRouter = express.Router();

homeRouter.get('/', async(req, res)=>{

    try {
        const all = await ProjectModel.find().limit(3)
        res.status(200).send({"all": all})
    } catch (error) {
        res.status(400).send({"msg": error})
    }
})

homeRouter.get('/moreProjects', async(req, res)=>{

    try {
        const all = await ProjectModel.find();
        res.status(200).send({"moreProjects": all})
    } catch (error) {
        res.status(400).send({"msg": error})
    }
})



module.exports = {
    homeRouter
}

