const http=require('https');


const server=http.createServer((req,res)=>
{
    console.log("request has been made");
})

server.listen(3000,'localhost',()=>{
    console.log("server has started");
})