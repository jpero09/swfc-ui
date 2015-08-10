module.exports = function home(app, options) {
  var router = express.Router();

  // SPA Routes
  var spaRoutes = [
    '/home',
    '/cards',
    '/vehicles',
    '/parts',
    '/events',
    '/law',
    '/forms',
    '/legions',
    '/'
  ];

  router.get(spaRoutes, function(req, res, next) {
    if(!req.accepts('html')) { return next(); }

    return res.render('index', options);
  });

  app.use('/', router);
};
