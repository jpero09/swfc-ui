var controller = require('../../controllers/vehicles');

module.exports = function(app) {
  var router = express.Router();

  router
    .get('/', controller.getAll);

  app.use('/api/vehicles', router);
};
