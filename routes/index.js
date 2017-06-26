const express = require('express');
const router  = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/about', (req, res, next) => {
  res.render('about-view.ejs');
});

router.get('/faves', (req, res, next) => {
  res.render('favorites-view.ejs');
});


module.exports = router;
