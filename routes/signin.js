const express=require('express');
const router=express.Router();
const {checkNotLogin}=require('../middlewares/check');

//GET /signin登录页
router.get('/',checkNotLogin,(req,res,next)=>{
    res.send('登录页');
});

//POST /signin用户登录
router.post('/signin',checkNotLogin,(req,res,next)=>{
    res.send('登录');
});

module.exports=router;