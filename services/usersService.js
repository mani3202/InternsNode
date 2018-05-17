 
var DBModel=require('../models/usersmodel');
var User=DBModel.User;

//Insert User data in the database
var createUser=function(obj,res){
	 
     //Initializing DB Model Schema and assigning values to that schema 
	 var user = new User();
	 
	 user.firstname=obj.firstname;
     user.lastname=obj.lastname;
	 user.email=obj.email
	 user.location=obj.location;
	 user.password=obj.password;
	 
	// Insert the Data 
    user.save(function(err,data) {
        if (err){
            console.log('Error in Registering user data: '+err);  
            throw err;  
            res.send('failed');
        }
        console.log('Employee Registration successful');    
        res.send('Employee Registration successful');
    });

    //If Schema less 
    //var url = 'mongodb://localhost:27017/DB_Name';
    // var MongoClient = mongodb.MongoClient;
    // MongoClient.connect(url, function (err, db) {
    //     if (err) {
    //         console.log("unable to connect", err);
    //         res.send(err)
    //     }
    //     else {
    //         console.log('connection established', url);
    //         var collection = db.collection("collection_name");
    //         collection.insert([obj], function (err, result) {
    //             if (err) {
    //                 console.log("Error Inserting Data",err);
    //                 res.send(err);
    //             }
    //             else {
    //                 console.log("Data Inserted Successful :",result);
    //                 res.send(result);
    //             }
    //         });
    //     }
    // });
 }
 
 
//Retrieve User Data from the database
var getUser=function(obj,res){

	var email = obj.email;
	var password = obj.password;
     
	// Get the user Details through UserName And Password - (Login)
    User.find({"email":email,"password":password},function(err,data) {
        if (err){
            console.log('Error in Registering user data: '+err);  
            throw err;  
            res.send('failed');
        }
        console.log('Employee Registration succesful');    
        res.send(data);
    });
 }


//Update User Data in Database
 var updateUser=function(obj,res){

    var firstname=obj.firstname;
    var lastname=obj.lastname;
    var email=obj.email;
    var userid=obj.userid;
    var location=obj.location;
    var password=obj.password;

    User.update({ _id:userid }, {
                                firstname:firstname,
                                lastname:lastname,
                                email:email,
                                location:location,
                                password:password
                            },function(err, user) {
		if (err){
			console.log('Error in Updating user data: '+err);  
            throw err;  
            res.send('failed');  
		}  else {
			console.log("Updated successfully...");
			res.send('Updated User Data Successfully');
		}			 
	})
 }


//Delete User Data from Database
 var deleteUser= function(obj,res){

    var email=obj.email;

    User.remove({ email: email }, function(err, user) {
		
        if (err){
           console.log('Error in Deleting user data:'+err);  
           throw err;  
           res.send('failed');  
         }
        console.log('User Data deleted');    
        res.send('Deleted User Data Successfully');
});
}
 
 
module.exports.createUser = createUser;
module.exports.getUser = getUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser= deleteUser;