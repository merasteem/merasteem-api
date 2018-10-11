const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {name: "home"});
});

router.get('/about', (req, res) => {
  res.render('about', {name: "about"});
});

router.get('/exchange', (req, res) => {
  res.render('exchange', {name: "exchange"});
});

router.get('/howitworks', (req, res) => {
  res.render('aboutWorking', {name: "howitworks"});
});

router.get('/becomepartner', (req, res) => {
  res.render('becomepartner', {name: "becomepartner"});
});

router.get('/wallet', (req, res) => {
  res.render('wallet', {name: "wallet"});
});

router.get('/profile', (req, res) => {
  res.render('profile');
});

module.exports = router;
