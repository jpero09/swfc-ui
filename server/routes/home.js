module.exports = function home(app, options) {
  var router = express.Router();

  // SPA Routes
  var spaRoutes = [
    '/home',
    '/cards',
    '/cards/:id',
    '/vehicles',
    '/vehicles/:id',
    '/parts',
    '/parts/:id',
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
