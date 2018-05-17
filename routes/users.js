var express = require('express');
var router = express.Router();
var userservice = require('../services/usersService');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Inserting Data in DataBase Collections
router.post('/create',function(req,res,next){
	var obj ={
		"firstname":req.body.firstname,
		"lastname":req.body.lastname,
		"email":req.body.email,
		"uid":req.body.uid,
		"location":req.body.location,
		"password":req.body.password,
	}
	userservice.createUser(obj,res);	
});


//Retrieve Data from data base
router.post('/retrieve',function(req,res,next){
	var obj ={
		"email":req.body.email,
		"password":req.body.password
	}
	userservice.getUser(obj,res);	
});


//Update User Data
router.post('/update',function(req,res,next){
	var obj ={
		"firstname":req.body.firstname,
		"lastname":req.body.lastname,
		"email":req.body.email,
		"userid":req.body.userid,
		"location":req.body.location,
		"password":req.body.password,
	}
	userservice.updateUser(obj,res);	
});

//Delete User Data
router.post('/delete',function(req,res,next){
	var obj ={

		"email":req.body.email
	}
	userservice.deleteUser(obj,res);	
});


module.exports = router;
