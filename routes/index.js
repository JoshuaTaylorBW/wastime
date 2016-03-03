var express = require('express');
var router = express.Router()
var knex = require('../db/knex');
function TimeWasters() {
  return knex('time_waster');
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

module.exports = router;
