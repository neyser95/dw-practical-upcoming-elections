var express = require('express');
var router = express.Router();
var request = require('request');

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
      'Content-Type': 'application/json'
    }
  }, function (error, response, body) {
    if (error) {
      res.render('elections', { title: error });
    } else {
      var elections = body;
      // * We're getting the data now
      console.log('BODY: ', body);
      res.render('elections', { title: 'Find My Election' });
    }
  });
  // res.render('elections', { title: 'Find My Election'});
});

module.exports = router;
