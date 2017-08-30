const express = require('express')
const router = express.Router()
const user = require('../model/user')
router.get('/users', (req, res) => {
    console.log('getting all users')
    user.find((err, user) => {
        if (err)
            res.send('error has occured')
        else
            console.log(user)
        res.send(user)
    })
})
module.exports = router;