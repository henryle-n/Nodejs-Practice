// import dependencies
//  at the time I'm making this file ES6 for fs, path is in early beta test stage
//  thus I chose to go with CommonJS  using 'require' instead of 'import'
const http = require("http");
const fs = require("fs");
const path = require("path");

// define domain and port to listen to for this webapp
const hostName = "localhost";
const mainPort = "1500";

const server = http.createServer((req, res) => {
  console.log(
    `Requesting >>> ${req.url} <<< with method >>> ${req.method} <<<`
  );

  // check if method is get
  if (req.method == "GET") {
    var fileURL;
    // check if this is home page
    if (req.url == "/") {
      fileURL = "/index.html";
    } else {
      fileURL = req.url;
    }

    //build file path to local storage of file
    var filePath = "./public" + fileURL;

    // check if file req'ed is html format
    var fileExt = path.extname(filePath);

    //check if file type is in HTML format
    if (fileExt == ".html") {
      // new async added to check if file exists
      try {

        // NOTE: fs.exists are deprecated - it supports call back and async by default
        // fs.access doesn't support call back and thus need to use with try and catch
        // no need to wrap async ... await ... for fs.access  
        fs.access(filePath, fs.constants.F_OK, (e) => {
          res.setHeader("Content-Type", "text/html");
          res.statusCode = 200;
          fs.ReadStream(filePath).pipe(res);
        });
      } catch {
        res.setHeader("Content-Type", "text/html");
        res.statusCode = 404;
        res.write(`<html><body><p>this is the catched error: ${e}</p>`);
        res.end(
          `<p>Error: ${res.statusCode} - Requested URL: ${fileURL} doesn't exist!</p><html><body>`
        );
        console.error("File doesn't exist");
      }
    } else {
      res.setHeader("Content-Type", "text/html");
      res.statusCode = 404;
      res.end(
        `Error: ${res.statusCode} - Requested URL: ${fileURL} is not an HTML file!`
      );
    }
  } else {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 404;
    res.end(`Error: Server doesn't accept method: ${req.method}`);
  }
});
server.listen(mainPort, hostName, () =>
  console.log(`Server starts at: ${hostName}:${mainPort}`)
);