const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello!'));
app.get('/', (req, res) => res.send('Goal:'));

app.get('/', (req, res) => res.send('Set up a Git repo, deploy a sample web app, and create a continuous delivery pipeline.'));




app.listen(port);
console.log(`App running on http://localhost:${port}`);
