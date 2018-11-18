var express = require('express');
var router = express.Router();
// exports
module.exports = router;

// Setup Index
router.get('/', function(req,res){
  res.render("index",{
    title: "Happy Shopping"
  });
});
