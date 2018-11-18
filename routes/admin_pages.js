var express = require('express');
var router = express.Router();
// exports
module.exports = router;

// Setup Index
// router.get('/', function(req,res){
//   res.render("index",{
//     title: "Happy Shopping"
//   });
// });

router.get('/', function(req, res){
	// mengambil data dari database
		// res.render('admin/pages', {
		// 	title: "halaman admin"	
    // });
    res.send("ini area admin");
});