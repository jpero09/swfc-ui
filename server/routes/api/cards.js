var controller = require('../../controllers/cards');

module.exports = function(app) {
  var router = express.Router();

  router
    .get('/', controller.getAll);

  app.use('/api/cards', router);
};
