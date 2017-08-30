const express = require('express')
const router = express.Router()
const user=require('../model/user')
router.delete('/user/:id',(req,res)=>{
	user.findOneAndRemove({
		_id:req.params.id
	},(err,user)=>{
		if(err)
			res.send('error in deleting')
		else{
			console.log(user)
			res.send(user)
		}
	})
})
module.exports=router;