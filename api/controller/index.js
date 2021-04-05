const config = require('../../config');
const models = require('../models');

exports.login = (req, res) => {
    //mocking login functionality, this can be more secure
    if (req.body && req.body.userID.toLowerCase() === 'admin' && req.body.pass.toLowerCase() === 'admin123') {
        res.status(200).send({ token: 'excFRtuy22ghskdaytrok=' });
    } else {
        res.status(401).send({ message: 'Invalid Credentials try again with correct credentials...' });
    }
};

exports.createMentor = (req, res) => {
    if (req.body) {
        let payload = req.body;
        let mentor = models.mentorModel;
        const createMentor = new mentor(payload);
        createMentor.save((err, data) => {
            if (err) {
                res.status(400).send(err);
            }
            res.status(200).send({ message: `Mentor ${payload.firstName} saved to database...` });
        });
    } else {
        res.status(400).send({ message: 'Nothing to save...' });
    }
};

exports.getAllMentors = (req, res) => {
    models.mentorModel.find(null, (err, data) => {
        if (err) {
            res.status(400).send(err);
        }
        res.status(200).send(data);
    });
};

exports.updateMentor = (req, res) => {
    let mentorID = req.query.mentorID;
    if (req.body) {
        let payload = req.body;
        let mentorUpdate = models.mentorModel;
        mentorUpdate.findOne({ _id: mentorID }, function (err, doc) {
            if (err) {
                res.status(400).send({ message: 'Something went wrong...' });
            }

            if (doc) {
                doc.firstName = payload.firstName;
                doc.lastName = payload.lastName;
                doc.contact = payload.contact;
                doc.category = payload.category;
                doc.save();
                res.status(201).send({ message: `Mentor ${payload.firstName} updated to database...` });
            } else {
                res.status(400).send({ message: 'Cannot update details of this mentor...' });
            }
        });
    }
};

exports.removeMentor = (req, res) => {
    let mentorID = req.query.mentorID;
    let deleteMentor = models.mentorModel;
    deleteMentor.deleteOne({ "_id": mentorID }, function (err, data) {
        if (err) {
            res.status(400).send({ message: 'Cannot delete mentor, try again...' });
        }
        res.status(200).send({ message: `Mentor with ID: ${mentorID} deleted from database...` });
    });
};

exports.createTask = (req, res) => {
    if (req.body) {
        let payload = req.body;
        let task = models.tasksModel;
        const createTask = new task(payload);
        createTask.save((err, data) => {
            if (err) {
                res.status(400).send(err);
            }
            res.status(200).send({ message: `Task saved to database...` });
        });
    } else {
        res.status(400).send({ message: 'Nothing to save...' });
    }
};

exports.getAllMentorTasks = (req, res) => {
    let mentorID = req.query.mentorID;
    let query = { "mentorID": mentorID };
    models.tasksModel.find(query).exec((err, data) => {
        if (err) {
            res.status(400).send(err);
        }
        res.status(200).send(data);
    });
};

exports.updateTask = (req, res) => {
    let taskID = req.query.taskID;
    if (req.body) {
        let payload = req.body;
        let taskUpdate = models.tasksModel;
        taskUpdate.findOne({ _id: taskID }, function (err, doc) {
            if (err) {
                res.status(400).send({ message: 'Something went wrong...' });
            }

            if (doc) {
                doc.mentorID = payload.mentorID;
                doc.task = payload.task;
                doc.status = payload.status;
                doc.save();
                res.status(201).send({ message: `Task updated to database...` });
            } else {
                res.status(400).send({ message: 'Cannot update details of this task...' });
            }
        });
    }
};

exports.removeTask = (req, res) => {
    let taskID = req.query.taskID;
    let deleteTask = models.tasksModel;
    deleteTask.deleteOne({ "_id": taskID }, function (err, data) {
        if (err) {
            res.status(400).send({ message: 'Cannot delete task, try again...' });
        }
        res.status(200).send({ message: `Task deleted from database...` });
    });
};