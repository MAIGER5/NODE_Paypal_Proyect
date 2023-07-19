const { Router } = require('express');
const createOrderHandler = require('../handlers/createOrderHandler');
const captureOrderHandler = require('../handlers/captureOrderHandler');
const cancelOrderhandler = require('../handlers/cancelOrderhandler');

const paymentRoutes = Router();

paymentRoutes.get('/create-order', createOrderHandler)
paymentRoutes.get('/capture-order', captureOrderHandler)
paymentRoutes.get('/cancel-order', cancelOrderhandler)

module.exports = paymentRoutes;