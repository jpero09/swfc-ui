var request = require('request');
var _ = require('lodash');
var util = require('util');
var ctrlBase = require('./baseController');

var VehiclesController = function() {
  var self = this;
  VehiclesController.super_.call(self, 'swfc'); // Call the base init
  self.object = 'vehicles';
};
util.inherits(VehiclesController, ctrlBase);

VehiclesController.prototype.getAll = function(req, res) {
  var self = this;
  logger.debug('self.object:', self.object);
  var options = VehiclesController.super_.prototype.getOptions.call(this);
  options.uri = options.uri + '/' + self.object;

  //logger.debug('Making service request:', options);
  request(options, function(error, response, body) {
    if(error) {
      return res.status(500).json({message: 'An unexpected error has occurred.', error: error});
    }
    res.json(body);
  });
};

module.exports = VehiclesController;
