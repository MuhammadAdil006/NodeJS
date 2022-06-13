const express=require('express');
const app=express();

app.listen(3000);

// 2.1 registring view engine
app.set('view engine','ejs');
//2.2 it automatically make views tempalted but if u have another folder named somethoings else
// then use   app.set('views','myviews')

//3 how to pass data from handler to view
app.get('/',(req,res)=>{
    const blogs=[
        {title:'blog1',msg:'lorem ipsum'},
        {title:'blog2',msg:'lasfj;lasfjaskldf'},
        {title:'blog3',msg:'lsfjas;ljf;asdkjfasdl'}
    ];
    res.render('index',{title:'home',blogs});
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
app.use((req,res)=>{

    res.status(404).render('404');
});

//1 View Engines
//1.1 it helps to add loops variables in html
//1.2 ejs embedded javascript template

//npm install ejs

//2 register vew engine