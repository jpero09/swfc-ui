var ControllerRef = require('../../controllers/cards');

module.exports = function(app) {
  var router = express.Router();
  var controller = new ControllerRef();

  router
  //  .get('/', controller.getAll);
    .get('/', function(req, res) { controller.getAll(req, res); });

  app.use('/api/cards', router);
};
