const express = require('express');
const router = express.Router();
const user= require('../models/user');


router.get('/getAll',async(req,res)=>{

    let success= await user.find();

    res.send(success);
});
router.post('/register',async (req,res)=>{
    console.log('done');
    let newUser= new user({
     name:req.body.name,
     email:req.body.email,
     password:req.body.password,
     phone:req.body.phone
    });
    let id = req.body._id;
    let success;
    try{
    if(id!='') success=await user.findOneAndDelete({_id:req.body._id});
    success=await newUser.save();
    if(!success) res.send({success:0});
    else
    res.send({success:1});
}
catch(err)
{
    return res.send(err);
}
    res.send({success:1});
});

router.post('/delete',async (req,res)=>{

    let success= await user.findOneAndDelete({_id:req.body._id});
    res.send({success:1});
});



module.exports=router;