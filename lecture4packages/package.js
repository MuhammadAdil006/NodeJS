//nodemon reflects changes automatically

// npm install -g nodemon
// install nodemon globally

//installing  express
//make package jason file 
//npm init


//installing locally packages
// lodash
//save dependacies in package.json
// npm install lodash

//when we have multiple packages in dependancies we can install by writing npm install
//generating random number
const _ = require('lodash');
const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'Text/plain'});
    const num= _.random(1,5);
    const great=_.once(()=>{
        console.log("hellow");
      });
    res.write(`${num}`);
    great();
    great();
    res.end();
});
server.listen(3000,()=>{
    console.log('server is running on port 3000');
})