//npm install express

// 2 routing  & html
const express=require('express');
const app=express();

//listen for request

const server =app.listen(300,()=>{
    console.log('Server is running on port 300');
})

// 2.1
app.get('/',(req,res)=>{
    //it needs absolute path
    //second parameter returns root of project
    res.sendFile('./Views/index.html',{root:__dirname});
    
});

// 1.1
app.get('/about',(req,res)=>{
    res.sendFile('/Views/about.html',{root:__dirname});
    //it automatically sets the content type and header
    //it also infer the status code

});
app.get('/index',(req,res)=>{
    res.sendFile('/Views/index.html',{root:__dirname});
});
app.get('/contactus',(req,res)=>{
    res.send("<h1>Contact Us</h1>");
});

//3 redirects

app.get('/about-us',(req,res)=>{
    res.redirect('/about');
});

// 4 404 page
//middleware function

// use this function for every other request

app.use((req,res)=>{

    res.statusCode(404).sendFile('/Views/404.html',{root:__dirname});
});