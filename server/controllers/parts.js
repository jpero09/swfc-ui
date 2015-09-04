var request = require('request');
var _ = require('lodash');
var util = require('util');
var ctrlBase = require('./baseController');

var PartsController = function() {
  var self = this;
  PartsController.super_.call(self, 'swfc'); // Call the base init
  self.object = 'parts';
};
util.inherits(PartsController, ctrlBase);

PartsController.prototype.getAll = function(req, res) {
  var self = this;
  var options = PartsController.super_.prototype.getOptions.call(this);
  options.uri = options.uri + '/' + self.object;

  //logger.debug('Making service request:', options);
  request(options, function(error, response, body) {
    if(error) {
      return res.status(500).json({message: 'An unexpected error has occurred.', error: error});
    }
    res.json(body);
  });
};

module.exports = PartsController;
