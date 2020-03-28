const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routers = require('./routers');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routers);
app.use(errors());

module.exports = app; 