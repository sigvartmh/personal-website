var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sigvart M. Hovland', description: '"Embedded system programmer, web enthusiast, live for the IoT and occationally funny"' });
});
router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'Blog'});
});
router.get('/is/professional', function(req, res, next) {
  res.render('cv', { title: 'CV'});
});

module.exports = router;
