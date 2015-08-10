module.exports = function(app) {
  require('./all')(app);

  // require('./api')(app);
  require('./home')(app);
};
