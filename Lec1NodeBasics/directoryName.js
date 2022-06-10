console.log(__dirname);
console.log(__filename);

people=['hamza','adil','hassan'];
age=[20,21,22];
module.exports={people,age};

const os= require('os');
console.log(os.platform(),os.homedir());