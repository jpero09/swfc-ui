var controllerRef = require('../../controllers/cards');

module.exports = function(app) {
  var router = express.Router();
  var controller = new controllerRef();

  router
  //  .get('/', controller.getAll);
    .get('/', function(req, res) { controller.getAll(req, res); });

  app.use('/api/cards', router);
};
