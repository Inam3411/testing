const express = require('express');
const app = express();
const controller = require('./controllers/controller')


app.use(express.json());

app.get('/', controller.getinfo)

app.post('/create-job', controller.createJob);
app.post('/create-condidate', controller.createCondidate);
app.get('/getinfo', controller.getinfo)


module.exports = app;
