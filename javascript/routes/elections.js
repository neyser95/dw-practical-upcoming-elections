// * file that will get elections from API
var express = require('express');
var router = express.Router();
var us_states = require('../us_state.js');

/* GET matched elections page. */
router.post('/', function (req, res) {
  console.log('HELLO');
  res.render('elections', { title: 'Find My Election', states: us_states });
});

module.exports = router;