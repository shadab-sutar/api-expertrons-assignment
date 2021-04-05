const controller = require('../controller');
const middleware = require('../middleware');

module.exports = app => {
    let apiRoot = '/api/expertrons';
    app.post(`${apiRoot}/user-login`, controller.login);
    app.get(`${apiRoot}/get-all-mentors`, middleware.checkActiveSession, controller.getAllMentors);
    app.post(`${apiRoot}/create-mentor`, middleware.checkActiveSession, controller.createMentor);
    app.put(`${apiRoot}/update-mentor`, middleware.checkActiveSession, controller.updateMentor);
    app.delete(`${apiRoot}/remove-mentor`, middleware.checkActiveSession, controller.removeMentor);
    app.get(`${apiRoot}/get-all-mentortasks`, middleware.checkActiveSession, controller.getAllMentorTasks);
    app.post(`${apiRoot}/create-task`, middleware.checkActiveSession, controller.createTask);
    app.put(`${apiRoot}/update-task`, middleware.checkActiveSession, controller.updateTask);
    app.delete(`${apiRoot}/remove-task`, middleware.checkActiveSession, controller.removeTask);
};