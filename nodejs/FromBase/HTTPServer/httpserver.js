const http = require("http") ;
const fs = require("fs") ;

// Server creation
const server = http.createServer((req, res) => {

  console.log(req.url, "REQURL");
  if(req.url == "/"){
      res.writeHead(200, {
    "content-type": "application/json",
  });
    res.end("ENTERED");  
  }
  else if (req.url == "/about") {
      res.writeHead(200, {
    "content-type": "application/json",
  });
    res.end("ENTERED ABOUT");
  } else if (req.url == "/contact") {
      res.writeHead(200, {
    "content-type": "application/json",
  });
    res.end("ENTERED CONTACT");
  } else if (req.url == "/sample") {
      res.writeHead(200, {
    "content-type": "video/mp4",
  });
    // res.end("/sample.mp4");
    const readstream = fs.createReadStream("./samplevideo.mp4") ;
    readstream.pipe(res) ;
  } 
  else {
      res.writeHead(404, {
    "content-type": "application/json",
  });
    res.end("404 : PAGE NOT FOUND");
  }

  // res.end("Hi Hello !!!")
});

// Port listener
server.listen(5000, () => {
  console.log(`The server is successfully running in PORT 5000`);
});
