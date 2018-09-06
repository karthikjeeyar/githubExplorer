var express = require('express');
var router = express.Router();

/* GET ALL BOOKS */
router.get('/', function (req, res, next) {
    res.json({name: 'Karthik'});
});

module.exports = router;

