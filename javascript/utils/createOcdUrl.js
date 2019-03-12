const createOcdUrl = function createOcdUrl (state, city){
  var state = state.toLowerCase();
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

  return url;
};

module.exports = createOcdUrl;