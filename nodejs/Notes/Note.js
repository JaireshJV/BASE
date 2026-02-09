// 1.What is Node.js?

// Node.js is a free, open source tool that lets you run JavaScript outside the web browser.
// With Node.js, you can build fast and scalable applications like web servers, APIs, tools, and more.


// 2.What Can You Build With Node.js?

// Node.js uses an event-driven, non-blocking model.
// It can handle many connections at once without waiting for one to finish before starting another.

// Web servers and websites
// REST APIs
// Real-time apps (like chat)
// Command-line tools
// Working with files and databases
// IoT and hardware control


// 3.Server Creation 

// let http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World!');
// }).listen(8080);


// 4.Node.js Built-in Modules

// Node.js comes with many built-in modules to help you work with files, servers, paths, the operating system, and more.
// const os = require('os');
// console.log(os.platform());

// More Built-in methods                        ==>                     // https://www.w3schools.com/nodejs/ref_modules.asp    


// 5.What is NPM ?

// npm is the package manager for Node.js.
// It helps you install and manage third-party packages (libraries) to add more features to your apps.
// npm install express

// const express = require('express');
// const app = express();
// app.get('/', (req, res) => res.send('Hello World!'));
// app.listen(8080);