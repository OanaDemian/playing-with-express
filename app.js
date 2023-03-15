//imports express package into our server file - app.js
const express = require('express')
//calls the express function which returns an express application
const app = express()
const port = 3000

//Creating REST API Endpoints:
//app is an instance of express
//METHOD is a HTTP request method, in lowercase
//PATH is a path on the server
//HANDLER is the function executed when the route is matched
//req is a variable that stores all the information for the incoming request from the client. 
//The server response functions are stored in the res parameter.

//The app responds with “Hello World!” for requests to the root URL (/) or route, the application’s home page. 
//For every other path, it will respond with a 404 Not Found.
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Respond to POST request on the root route (/), the application’s home page
app.post('/', (res,req) => {
  res.send('Got a post request')
})

//app starts a server and listens on port 3000 for requests/connections
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})