//routes
 //request response 
//status codes
//redirects
const https= require("http");
const fs= require("fs");
const server = https.createServer((req,res)=>{

    //request objects

    // console.log(req);
    //1 get req things
    console.log(req.url, req.method);

    //what kind of response we will send back
    //response headers

    //setting the response header
    //2 sending html tags
    res.setHeader('content-Type','Text/Html');
    //sending html 
    // res.write('<head><link rel="stylesheet" href="#"></head>')
    // res.write('<p>hellow</p>');
    // res.write('<p>hwllo again</p>');
    // res.end();


    //3 returing html pages

    //5 
    let path='./Views/';
    switch(req.url){
        case '/':
            path+='index.html';
            //6
            res.statusCode=200;
            break;
        //let say about and aboutme are same so redirection is used
        case '/about':
            path+='about.html';
            res.statusCode=200;
            break;
        //7 redirection
        case '/about-me':
            res.statusCode=301;
            res.setHeader('Location','/about');
            res.end();
            
            break;
        default:
            path+='404.html';
            res.statusCode=404;
            break;

    }
    //4 sending html files using file system
     fs.readFile(path,(err,data)=>{
        //if there is an error end the request
        if(err){
            console.log(err);
            res.end();
        }
        else{
            
            res.write(data);
            res.end();
        }
    });

    
});
//status codes
//200 ok
//404 not found
//500 internal server error
//301 resource moved

// range 100 informational responses
//range 200 success
//range 300 redirection
//range 400 client error
//range 500 server error
server.listen(3000,'localhost',()=>{
    console.log("server is running");
})