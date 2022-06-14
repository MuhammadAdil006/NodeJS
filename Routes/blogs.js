const express= require('express');
const router= express.Router();
const blogController= require('../controllers/blog-controller.js');


router.get('/add-blog',blogController.add_newBlog);
//retriving data single document
// router.get('/single-doc',(req,res)=>{
//     Blog.findById('62a80911743e9055d764e056').then((result)=>{
//         res.send(result);
//     }).catch((err)=>{
//         console.log(err);
//     });
// })
//retrieving data from browser

router.get('/all-blogs',blogController.all_blogs);

router.post('/blog/create-blog',blogController.create_blog);
router.get("/blogs/:id",blogController.getblog_byid);
//ajax requrest
router.delete('/blogs/:id',blogController.deleteblog_byid);

module.exports=router;