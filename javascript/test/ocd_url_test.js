var tap = require('tap');
const createOcdUrl = require('../utils/createOcdUrl');
const states = ['wv', 'fl', 'ma'];
const cities = ['forest heights', 'ceredo', 'gainesville'];
const ocdUrls = [
  'https://api.turbovote.org/elections/upcoming?district-divisions=ocd-division/country:us/state:wv,ocd-division/country:us/state:wv/place:forest_heights',
  'https://api.turbovote.org/elections/upcoming?district-divisions=ocd-division/country:us/state:fl,ocd-division/country:us/state:fl/place:ceredo',
  'https://api.turbovote.org/elections/upcoming?district-divisions=ocd-division/country:us/state:ma,ocd-division/country:us/state:ma/place:gainesville'
]

for(let i  = 0; i < states.length; i++){
  let url = createOcdUrl(states[i], cities[i]);

  tap.equal(url, ocdUrls[i], 'The url should match the url listed in the ocdUrls array');
}