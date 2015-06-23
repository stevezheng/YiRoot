var AV = require('leanengine');
var user = require('cloud/routes/index/user');

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.send('ok');
  });

  user(app);
};

