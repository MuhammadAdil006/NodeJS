const mongoose=require('mongoose');
const Blog=require('../models/blogs');
const db='mongodb+srv://Adil:231388@mern.bcbyf8g.mongodb.net/Mern?retryWrites=true&w=majority';

//connect to mongo db
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true}).then((result)=>{
    console.log('connected to db');
    app.listen(3000);
    }).catch((err)=>{
        console.log(err);
});
//6 m


//mongoose is an object document mapping library
//blog model   blod.deleteOne()

//schemas and models
//schema define the structure and datatype
//e.d title (string), required
//msg(string), required
//id (int),auto generated
//Model save get delete etc data
//npm install mongoose

//adding data to browser

const add_newBlog = (req,res)=>{
const blog=new Blog({
    title:'new blog',
    msg:'aljfsdljfalsfjasdlfjsdlfkasd'});
    blog.save().then((result)=>{
        res.send(result);
    }).catch((err)=>{
        console.log(err);
    });
    //asynchronous tasks
};

const all_blogs=(req,res)=>{
    Blog.find().then((result)=>{
        const tilte="home";
         res.send(result,title);
     }).catch((err)=>{
         console.log(err);
     });
};

const create_blog=(req,res)=>{ 
     const blog= new Blog({title:req.body.title,msg:req.body.body});
console.log(req.body);
blog.save().then((result)=>{
    console.log(result+" has been saved");
    res.redirect('/');
});};

const getblog_byid=(req,res)=>{

    const id=req.params.id;
    Blog.findById(id).then(result=>{
        res.render('details',{blog:result,title:"BlogDetails"});
    }).catch(err=>{
        console.log(err);
    });
};
const deleteblog_byid=(req,res)=>{
    const id= req.params.id;
    Blog.findByIdAndDelete(id).then((result)=>{
        res.json({redirect:'/'});
    }).catch(err=>{
        console.log(err);
    })
};
module.exports={add_newBlog
    ,all_blogs
,create_blog
,getblog_byid,deleteblog_byid};