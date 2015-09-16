var ControllerRef = require('../../controllers/vehicles');

module.exports = function(app) {
  var router = express.Router();
  var controller = new ControllerRef();

  router
  //  .get('/', controller.getAll);
    .get('/', function(req, res) { controller.getAll(req, res); })
    .get('/:id', function(req, res) { controller.getById(req, res); })
    .get('/:id/parts', function(req, res) { controller.getParts(req, res); });

  app.use('/api/vehicles', router);
};
