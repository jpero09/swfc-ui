
var baseController = function(serviceName) {
  var self = this;
  self.adapter = config.get('services:adapter');
  self.timeout = config.get('services:timeout');
  self.serviceName = null;
  self.baseUri = null;
  
  if(serviceName) {
    self.serviceName = serviceName;
    var serviceConfig = config.get('services:' + serviceName);
    if(serviceConfig) {
      self.adapter = serviceConfig.adapter || self.adapter;
      self.timeout = serviceConfig.timeout || self.timeout;
      self.baseUri = serviceConfig.url;
    }
  }
};

baseController.prototype.getOptions = function() {
  var self = this;
  return {
    method: 'GET',
    timeout: self.timeout,
    json: true,
    uri: self.baseUri,
    headers: {adapter: self.adapter}
  };
};

module.exports = baseController;
