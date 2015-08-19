var request = require('request');
var _ = require('lodash');
var baseUri = 'https://swfc.herokuapp.com'; //TODO: Config-a-fy this. Right meow.

var swfcController = function() { };

// Cards
function getAllCards(req, res) {
  var self = this;
  var options = {
    method: req.method,
    timeout: 10 * 1000,
    json: true,
    uri: baseUri + '/cards',
    headers: {adapter: 'mock'}
  };
  // logger.debug('Making service request:', options);

  request(options, function(error, response, body) {
    if(error) {
      return res.status(500).json({message: 'An unexpected error has occurred.', error: error});
    }
    res.json(body);
  });
}

// Exports and assignments
swfcController.getAllCards = getAllCards;
module.exports = swfcController;
