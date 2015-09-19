var ControllerRef = require('../../controllers/parts');

module.exports = function(app) {
  var router = express.Router();
  var controller = new ControllerRef();

  router
    .get('/', function(req, res) { controller.getAll(req, res); })
    .get('/:id', function(req, res) { controller.getById(req, res); })
    .get('/:id/vehicles', function(req, res) { controller.getVehicles(req, res); });

  app.use('/api/parts', router);
};
