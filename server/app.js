var bodyParser = require('body-parser');
var express = require('express');
var http = require('http');
var morgan = require('morgan');
var nib = require('nib');
var path = require('path');
var serveFavicon = require('serve-favicon');
var serveStatic = require('serve-static');
var stylus = require('stylus');

// Globals
// TODO: Move to seperate file?
global.express = require('express');
global.pkgjson = require('../package.json');

var app = global.express();
app.set('name', pkgjson.name);

// Config
global.config = require('./app/config').initConfig();

// logger
var loggingConfig = config.get('Logger');
loggingConfig.name = app.get('name');
global.logger = require('./app/logger').createLogger(loggingConfig);

// Stylus
function compile(str, filename) {
  return stylus(str)
    .set('filename', filename)
    .use(nib());
}

// TODO: Middleware
var publicPath = path.join(__dirname, '../public');
app.set('version', pkgjson.version);
app.set('host', process.env.HOST || config.get('app:host'));
app.set('port', process.env.PORT || config.get('app:port'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'jade');
app.use(morgan(config.get('app:morganFormat') || 'tiny')); // Morgan Formats: combined, common, dev, short, tiny
app.use(stylus.middleware({src: publicPath, compile: compile}));
app.use(serveFavicon(path.join(__dirname, '../public/images/favicon.ico')));
app.use(serveStatic(publicPath));

// Heartbeat
var HeartbeatMW = require('./middleware/heartbeat');
var hb = new HeartbeatMW(app.get('name'));
app.use(hb.Handler);

// Routes
require('./routes')(app);

// TODO: Unhandled errors
// app.use(errorHandler);

// Start this party:
http.createServer(app).listen(app.get('port'), app.get('host'), function() {
  logger.info('Starting: %s v%s', app.get('name'), app.get('version'));
  logger.debug('Running @ //%s:%s', app.get('host'), app.get('port'));
  logger.debug('Environment:', process.env.NODE_ENV);
  logger.debug('Software:', process.versions);
});