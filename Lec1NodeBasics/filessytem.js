//reading writing and deleting files 

const fs=require('fs');
//creating streams objects
// const writef=fs.createWriteStream();
// const readf=fs.createReadStream();
//write file or overwrite file

x=__dirname;
//remove directory name from x
console.log(x);
//folder creation
if(!fs.existsSync('./assests'))
{
    fs.mkdirSync('./assests');
    console.log("folder created");
}else{
    fs.rmdirSync('./assets');
    console.log("folder deleted");
}
//WRITING FILE

fs.writeFile('./assets/textfile.txt','hello world this is something i have written',()=>{
    console.log('file written');
});
//READING FILE
fs.readFile('./textfile.txt',(err,data)=>{
    if(err) throw err;
    console.log(data.toString());
});
//DELETING files


    if(fs.existsSync('./assets/textfile.txt'))
    {
        fs.unlinkSync('./assets/textfile.txt');
        console.log("file deleted");
    }

