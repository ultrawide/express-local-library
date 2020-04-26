var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.redirect('/catalog'); // Re-route base homepage to catalog
});

module.exports = router;
