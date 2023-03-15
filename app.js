const express = require('express')
const app = express()
const port = 3000

//The app responds with “Hello World!” for requests to the root URL (/) or route. 
//For every other path, it will respond with a 404 Not Found.
app.get('/', (req, res) => {
  res.send('Hellow World!')
})

//app starts a server and listens on port 3000 for connections
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})