var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/choosePhone', function (req, res) {
  res.render('phone', {
    title1: 'IPHONE',
    title2: 'SAMSUNG',
    title3: 'XIAOMI',
    title4: 'HUAWEI'
  })
})

router.get('/findPage', function (req, res) {
  res.render('finalPage', {
    phoneTitle: 'This phone suits you'
  })
})

module.exports = router;