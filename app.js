const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello!'));

app.get('/', (req, res) => res.send('This is an AWS Hands-On project where we create a' +
    ' continuous delivery pipeline by setting up a GitHub repository, deploying a sample web application, and ' +
    'creating a continuous delivery pipeline. '));

app.listen(port);
console.log(`The app is running on http://localhost:${port}`);
