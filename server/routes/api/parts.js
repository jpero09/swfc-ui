var ControllerRef = require('../../controllers/parts');

module.exports = function(app) {
  var router = express.Router();
  var controller = new ControllerRef();

  router
    .get('/', function(req, res) { controller.getAll(req, res); });

  app.use('/api/parts', router);
};
