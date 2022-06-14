//7 getting and saving data


const express=require('express');
const app=express();
const mongoose=require('mongoose');
const blogroutes=require('../Routes/blogs');
const Blog=require('../models/blogs');
const db='mongodb+srv://Adil:231388@mern.bcbyf8g.mongodb.net/Mern?retryWrites=true&w=majority';
//connect to mongo db
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true}).then((result)=>{
    console.log('connected to db');
    app.listen(3000);
    }).catch((err)=>{
        console.log(err);
});

//5 middleware
//everytime i use middleware it will search app.use in sequence
// if in sequence it found app.get or post it will terminate and returen response


// 2.1 registring view engine
app.set('view engine','ejs');
//2.2 it automatically make views tempalted but if u have another folder named somethoings else
// then use   app.set('views','myviews')
app.use((req,res,next)=>{
    console.log("request has made");
    next();
});
app.use((req,res,next)=>{
    console.log("do something another task");
    next();
})
//middleware and static files
//by default css file private
app.use(express.static('public'));
app.use(express.urlencoded(true));
//it will make files static public
//3 how to pass data from handler to view
app.get('/',(req,res)=>{
    Blog.find().sort({createdAt:-1}).then((result)=>{
        res.render('index',{title:'home',blogs:result});
    }).catch((err)=>{
        console.log(err);
    });
    // const blogs=[
    //     {title:'blog1',msg:'lorem ipsum'},
    //     {title:'blog2',msg:'lasfj;lasfjaskldf'},
    //     {title:'blog3',msg:'lsfjas;ljf;asdkjfasdl'}
    // ];
   
});

// 4 partial templates
//make a folder named partial and put all the partial templates in it

// 1.1
app.get('/about',(req,res)=>{
    res.render('about',{title:'about'});

});
app.get('/index',(req,res)=>{
    res.sendFile('/Views/index.html',{root:__dirname});
});
app.get('/blog/create',(req,res)=>{
    res.render('create',{title:'create'});
});
//3 redirects


app.get('/about-us',(req,res)=>{
    res.redirect('/about');
});

app.use(blogroutes);
app.use((req,res)=>{

    res.status(404).render('404',{title:"404"});
});
//1 View Engines
//1.1 it helps to add loops variables in html
//1.2 ejs embedded javascript template

//npm install ejs

//2 register vew engine


//outputiing these documents to views ejs


//request types
//request post type
//route parameters