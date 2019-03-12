var express = require('express');
var router = express.Router();
var request = require('request');
var us_states = require('../us_state.js');
var createOcdUrl = require('../utils/createOcdUrl');

// * Post matched elections page. *//
router.post('/', function (req, res) {
  
  var ocdUrl = createOcdUrl(req.body.state, req.body.city);

  // * This request will handle getting all upcoming elections. We set our header to receive json.
  request.get({
    url: ocdUrl,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }, function (error, response, body) {
    if (error) {
      // * if there is an error we redirect the user back to the form
      console.log(error);
      res.redirect('/');
    } else {
      // * Here we get the data and render the elections page with upcoming elections
      var elections = JSON.parse(body);
      // var elections = [
      //   {
      //     'polling-place-url':'https://registration.elections.myflorida.com/CheckVoterStatus',
      //     description: 'Gainesville Municipal Election',
      //   },
      //   {
      //     'polling-place-url': 'https://services.sos.wv.gov/Elections/Voter/FindMyPollingPlace',
      //     description: 'Ceredo Municipal Election'
      //   }
      // ]
      res.render('elections', { title: 'Find My Election', elections: elections});
    }
  });
});

module.exports = router;
