
//this will display messages after every 3 seconds


//global variable these functions can be used with global variable
 x = setInterval(() => {
    console.log("this will display msg after every 3 seconds");
}, 3000);

setInterval(() => {
    clearInterval(x);
},5000);