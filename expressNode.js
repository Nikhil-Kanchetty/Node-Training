const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const port = 1234;

app.post('/api/posts', verification, (req, res) => {  
  jwt.verify(req.token, 'key', (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: 'Hello World...',
        authData
      });
    } // IF-ELSE
  }); // VERIFY
}); // POST

app.post('/api/login', (req, res) => {
  const user = {
    id: 1, 
    username: 'Nikhil',
    email: '@gmail.com'
  }//USER CREATION
  jwt.sign({user}, 'key', (err, token) => {
    res.json({
      token
    });//TOKEN VERIFICATION
  });//SIGN METHOD
});//LOGIN

function verification(req, res, next) {

  // Get auth header value
  const bearerHeader = req.headers['authorization'];

  // Check if bearer is undefined
  if(typeof bearerHeader !== 'undefined') {
    const bearer =  bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }// IF ELSE
}//VERIFICATION FUNCTION
app.listen(port, () => console.log(`Example app listening on port ${port}!`));