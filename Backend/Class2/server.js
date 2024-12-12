//import modules
const http = require("http");

const fs = require("fs");

const os = require("os");

const path = require("path");

//create server
const server=http.createServer("/",(req,res)=>{
    if((req.url === "/home")){
        res.writeHead(200);
        res.end("Home page");
    }else if(req.url === "/contact"){
        res.writeHead(200);
        res.end("Contact page");
    }else if (req.url === "/service"){
        res.writeHead(200);
        res.end("Service page");
    }else if (req.url === "/signup"){
        res.writeHead(200);
        res.end("SignUp page");
    }
});

//server listening
server.listen(4000,()=>{
    console.log("server is running on 4000");
});