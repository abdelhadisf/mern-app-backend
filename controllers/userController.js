const User = require('../model/userModel') ; 
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')



const createToken = (_id) =>  {


    return jwt.sign({_id} , process.env.SECRET , {  expiresIn: '3d' })
}



// Sign Up controller 

const signUpUser = async (req,res) => {
    const {email,password} = req.body ;
    try {
        const user = await User.signup(email,password);


    //createToken


    const  token = createToken(user._id);

        res.status(200).json({email,token})
    }
    catch(error) {
        res.status(400).json({error : error.message})

    }
    

    

}




// Login Controller


const loginUser = async (req,res) => {
    const {email,password} = req.body ;

    try{
        const user = await User.login(email,password);


        //createToken
    
    
        const  token = createToken(user._id);
    
            res.status(200).json({email,token})


    }
    catch(error) {
        res.status(400).json({error : error.message})
    }

    

}


module.exports = {signUpUser,loginUser}