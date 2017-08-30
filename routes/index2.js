const express = require('express')
const router = express.Router()
const user=require('../model/user')
router.post('/user',(req,res)=>{
	const newUser=new user();
	newUser.userid=req.body.userid;
	newUser.password=req.body.password;
	newUser.state=req.body.state;
	newUser.save((err,user)=>{
		if(err)
			res.send("error")
		else{
			console.log(user)
			res.send(user)
		}
	})
})
module.exports=router;