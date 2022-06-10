const fs=require('fs');
//streams and buffer
const readStream = fs.createReadStream('./textfile.txt',{encoding:'utf8'});//relative path

//.on is event listener
//everytime we see a buffer we will do some task
//we will get accesss to the chunk of data


//write stream read stream

const writestream=fs.createWriteStream("./textfile3.txt");
// readStream.on('data',(chunk)=>{
//     console.log("-------new chunk-----------");
//     console.log(chunk);
//     writestream.write(chunk);
// });


//piping
// same method above one
readStream.pipe(writestream);
