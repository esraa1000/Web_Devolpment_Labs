const http = require('http');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.join())
//const server = http.createServer(app);

// counter = 0
 
// const server = http.createServer( (req, resp) => {
//   console.log("Incoming request");
//   console.log(`Hello request ${counter++}, url is: ${req.url}`)

//   if(resp.url == '/'){
//     resp.end("Welecome to the home page");
//   } 

//   else if(resp.url == "/about"){
//     resp.end("Welecome to the about page");
//   } 

//   // else{
//   //   resp.end("We cannot find a page");
//   // }
// })

app.listen(3000, () => {
  console.log("Server is listening on http://localhost:3000/");
})

app.get('/', (req, res) => {
  res.send("Hello from Express!");
});
