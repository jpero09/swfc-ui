module.exports = function(app) {
  require('./cards')(app);
  require('./parts')(app);
  require('./vehicles')(app);
};
