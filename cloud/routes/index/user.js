var AV = require('leanengine');
var pre = '/user';

module.exports = function(app) {
  app.get(pre, function(req, res) {
    res.send('user');
  })
};
