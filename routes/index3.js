const express = require('express')
const router = express.Router()
const user=require('../model/user')
router.put('/user/:id',(req,res)=>{
	user.findOneAndUpdate({
		_id:req.params.id
	},
	{
		$set:{state:req.body.state}},
		
		(err,newUser)=>{
			if(err)
				console.log('error occured')
			else{
				console.log(newUser)
				res.send(newUser)
			}
		
	}
	)
})
module.exports=router;