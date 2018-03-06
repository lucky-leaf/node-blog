const express=require('express');
const router=express.Router();

const {checkLogin}=require('../middlewares/check');

//GET /posts所有用户或者特定用户的文章页
//eg: GET /posts?author=xxx
router.get('/',(req,res,next)=>{
    res.send('主页');
});

//POST /posts/create发表一篇文章
router.post('/create',checkLogin,(req,res,next)=>{
    res.send('发表文章');
});

//GET /posts/create发表文章页
router.post('/create',checkLogin,(req,res,next)=>{
    res.send('发表文章页');
});

//GET /posts/:postId单独一篇的文章页
router.get('/:postId',(req,res,next)=>{
    res.send('文章详情页');
});

//POST /posts/:postId/edit更新一篇文章
router.post('/:postId/edit',checkLogin,(req,res,next)=>{
    res.send('更新文章');
});

//GET /posts/:postId/remove删除一篇文章
router.get('/:postId/remove',checkLogin,(req,res,next)=>{
    res.send('删除文章');
});

module.exports=router;