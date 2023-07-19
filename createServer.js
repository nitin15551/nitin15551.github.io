const http = require('http');

// 1. method
/*
http.createServer((req,resp)=>{
    // resp.write("this is testing for creating server");
    resp.write("<h1>Pass html data also <h1>");
    resp.end();
}).listen(4500);
*/


// 2.. method to pass the function
function dataControll(req,resp){
    resp.write("<h1>Pass, this html data also </h1>");
    resp.end();
}

http.createServer(dataControll).listen(4500);