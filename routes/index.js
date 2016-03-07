var express = require('express');
var router = express.Router()
var knex = require('../db/knex');
function TimeWasters() {
  return knex('time_waster');
};
function Users() {
  return knex('users');
};

router.get('/', function(req, res, next) {
  TimeWasters().then(function (results) {
    res.json(results);
  })
});

router.get('/s/:searchTerm', function(req, res, next) {
  console.log(req.params.searchTerm + "&&&&&&&&&&&&");
  TimeWasters().where('name', '~*', '.*'+req.params.searchTerm+'%*.').then(function (results) {
    console.log(results);
    res.json(results);
  })
});
router.get('/users', function(req, res, next) {
  Users().then(function (results) {
    res.json(results);
  })
});
router.post('/', function(req, res, next) {
  res.json(req.body);
});
module.exports = router;
