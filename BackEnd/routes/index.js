var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('users/index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('users/login.ejs', { message: req.flash('signupMessage') });
});

router.get('/signup', function(req, res) {
  res.render('users/signup.ejs', { message: req.flash('loginMessage') });
});

router.get('/profile', isLoggedIn, function(req, res) {
  res.render('users/profile.ejs', { user: req.user });
});
router.get('/logout', isLoggedIn, function(req, res) {
  req.logout();
  res.redirect('/');
});
// router.get('/logout', function(req, res) {
//   req.logout();
//   res.redirect('/');
// });


// router.get('/users', function(req, res) {
//   User.find({}, function (err, allUsers) {
//     if (err)
//       throw err;
//     res.render('.ejs', {users: allUsers});
//
//   });
// });
router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/profile',
  failureRedirect: '/signup',
  failureFlash: true,
}));

router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/profile',
  failureRedirect: '/login',
  failureFlash: true,
}));

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
}
