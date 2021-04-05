const mongoose = require('mongoose');
const config = require('../../config');

let mentorSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    category: {
        type: String
    }
});
const mentorModel = mongoose.model('mentorModel', mentorSchema, 'mentors');

let tasksSchema = mongoose.Schema({
    mentorID: {
        type: String,
        required: true
    },
    task: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});
const tasksModel = mongoose.model('tasksModel', tasksSchema, 'tasks');

module.exports = {
    mentorModel,
    tasksModel
};