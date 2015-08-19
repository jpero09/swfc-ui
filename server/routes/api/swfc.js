var controller = require('../../controllers/swfc');

module.exports = function(app) {
  var router = express.Router();

  router
    .get('/cards', controller.getAllCards);

  app.use('/api', router);
};
