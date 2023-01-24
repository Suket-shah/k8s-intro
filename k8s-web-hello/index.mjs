// import express from 'express';
// import fetch from 'node-fetch';
// import os from 'os';
//
// const app = express();
// const port = 3000;
//
// app.get('/', (req, res) => {
//   const helloMessage = `VERSION 2: Hello World! I'm ${os.hostname()}`;
//   console.log(helloMessage);
//   res.send(helloMessage);
// });
//
// app.get('/nginx', async (req, res) => {
//   // proxy between nginx and nodejs
//   const url = 'http://nginx';
//   const response = await fetch(url);
//   const body = await response.text();
//   res.send(body);
// });
//
// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
//
// // The code above is a simple Express.js application that returns a message with the hostname of the machine where the application is running. The application is listening on port 3000.
import express from 'express'
import fetch from 'node-fetch'
import os from 'os'

const app = express()
const PORT = 3000

app.get("/", (req, res) => {
  const helloMessage = `Hello from the ${os.hostname()}`
  console.log(helloMessage)
  res.send(helloMessage)
})

app.get("/nginx", async (req, res) => {
  const url = 'http://nginx'
  const response = await fetch(url);
  const body = await response.text();
  res.send(body)
})

app.listen(PORT, () => {
  console.log(`Web server is listening at port ${PORT}`)
})