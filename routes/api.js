var express = require('express');
var router = express.Router();
const githubController = require("../controllers/github.controller");

/** github api requests */
router.get('/users/:name', githubController.getUserInformation);
router.get('/users', githubController.getUsersList);
router.get('/users/:name/repos', githubController.getUserRepos);


module.exports = router;

