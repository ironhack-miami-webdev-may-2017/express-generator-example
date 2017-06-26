const express = require('express');

const router = express.Router();


router.get('/admin/login', (req, res, next) => {
  res.render('admin-login-view.ejs');
});


router.get('/admin/backdoor', (req, res, next) => {
  res.render('backdoor-view.ejs');
});


module.exports = router;
