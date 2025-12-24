const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())

const posts = [
  {"id": 1, 
    "name":"hello",
    "content": "I am making a new post"
  }
  ,
    {"id": 2, 
    "name":"Hi",
    "content": "I am making a duplicate post"
  }
]

//welcome
app.get('/', (req, res) => {
  console.log("Request received at /");
  res.send("Hello from Express!");
})


//posts 
app.get('/posts', (req, res) => {
  console.log("Request received at /");
  res.json(posts);
})

//post with id
app.get('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);   
  res.send(post);
})

//create new post , post request
app.post('/posts', (req, res) => {
  const newPost = req.body;
  posts.push(newPost);
  res.status(201).send(newPost);
})

app.listen(3000, () => {
  console.log("Server is listening on http://localhost:3000/");
})
