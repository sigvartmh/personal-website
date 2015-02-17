var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sigvart M. Hovland', description: '"Embedded system programmer, Webenthusiast, live for the IoT and occationally funny"' });
});

module.exports = router;
