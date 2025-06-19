const NodeGeocoder = require('node-geocoder');

const options = {
  provider: 'openstreetmap',
};

const geocoder = NodeGeocoder(options);

// Example: geocode an address
geocoder.geocode('Empire State Building')
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

