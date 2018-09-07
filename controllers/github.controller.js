const github = require("../models/github");
const githubController = {}

/* Get the github user information with a valid github username */
githubController.getUserInformation = function (req, res, next) {
    const { name } = req.params;
    if (!name) {
        next({ status: 'Invalid Api request' });
        return false;
    }
    github.getUserInfo(name)
        .then(user => res.send(user))
        .catch(err => next(err));
};

/* Get the list of github users by name */
githubController.getUsersList = function (req, res, next) {
    const { q } = req.query;
    if (!q) {
        next({ status: 'Invalid Api request' });
        return false;
    }
    github.getUsersList(q)
        .then(user => res.send(user))
        .catch(err => next(err));
}

githubController.getUserRepos = function (req, res, next) {
    const { name } = req.params;
    if (!name) {
        next({ status: 'Invalid Api request' });
        return false;
    }
    github.getUserRepos(name)
        .then(user => res.send(user))
        .catch(err => next(err));
};

module.exports = githubController;