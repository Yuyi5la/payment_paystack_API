const express = require('express');
const serverless = require('serverless-http');
const paymentRoutes = require('./Routes/paymentsRoutes');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use('/api/v1/payments', paymentsRoutes);

module.exports.handler = serverless(app);
