const express = require('express');
const paymentRoutes = require('./src/routes/paymentRoutes');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'))

app.use(paymentRoutes);



module.exports = app;