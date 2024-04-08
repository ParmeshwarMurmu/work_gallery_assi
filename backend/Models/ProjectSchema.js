const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    title: String,
    description: String,
    additionalDetails: String,
    image: String
})

const ProjectModel = mongoose.model('projects', projectSchema)

module.exports = {
    ProjectModel
}