var express = require('express');
var router = express.Router();
var stuffController = require('../controllers/stuff');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/stuff', stuffController.createStuff);

module.exports = router;
