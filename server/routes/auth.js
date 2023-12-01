const express = require('express');
const authRouter=express.Router();
const User=require('../models/user')


authRouter.post('/api/signup',async(req,res)=>{
console.log(req.body);


try
{
  //get data from client
  const {name,email,password}=req.body;
  const existingUser=await User.findOne({email});
  if(existingUser)
  {
    return res.status(400).json({msg:'User with same email already exists!'})
  }
  //userModel
  let user=User({
   email,password,name
  })

  user=await user.save();
  res.json({user})
} catch(e)
{
  res.status(500).json({error:e.message})
}

//post that data in database
//return that data to the user
})

module.exports=authRouter;