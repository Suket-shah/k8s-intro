import express from 'express';
import os from 'os';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const helloMessage = `VERSION 2: Hello World! I'm ${os.hostname()}`;
  console.log(helloMessage);
  res.send(helloMessage);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// The code above is a simple Express.js application that returns a message with the hostname of the machine where the application is running. The application is listening on port 3000.