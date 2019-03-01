var express = require('express');
var router = express.Router();
var request = require('request');
var us_states = require('../us_state.js');

// * Post matched elections page. *//
router.post('/', function (req, res) {
  var state = req.body.state.toLowerCase();
  var city = req.body.city;
  // * replacing spaces with underscores
  city = city.replace(' ', '_').toLowerCase();

  // * this is the full url with state and city information so we can make the API request
  var url =
    'https://api.turbovote.org/elections/upcoming?district-divisions=ocd-division/country:us/state:'
    + state +
    ',ocd-division/country:us/state:'
    + state +
    '/place:'
    + city;

  // * This request will handle getting all upcoming elections. We set our header to receive json.
  request.get({
    url: url,
    header: {
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
      var elections = body;
      // * We're getting the data now
      // ! Header set to accept 'application/json', but data doesn't look like json object?? type = string
      console.log('BODY: ', body);
      console.log('TYPE: ', typeof body);
      
      res.render('elections', { title: 'Find My Election' });
    }
  });
});

module.exports = router;
