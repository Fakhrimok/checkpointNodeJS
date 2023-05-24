
var http = require("http");

const port =3000
http.createServer(function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response body as "Hello World"
    response.end('<h1>Hello Node!!!!</h1>\n');
 }).listen(port,()=> console.log("Server running at port:",port));

 const fs = require('fs');

const fileName = 'welcome.txt';
const fileContent = 'Hello Node';

fs.writeFile(fileName, fileContent, (err) => {
  if (err) {
    return console.error(err);
  } else {
    console.log(`File "${fileName}" created successfully.`);
  }
});
 

