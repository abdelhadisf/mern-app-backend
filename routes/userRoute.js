const express = require('express');

const router = express.Router(); 


const {signUpUser,loginUser} = require('../controllers/userController.js')







// Login 

router.post('/login',loginUser);


//Sign Up

router.post('/signUp',signUpUser) ; 


module.exports = router;