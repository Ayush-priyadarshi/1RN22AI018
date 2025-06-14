const express = require('express');
const router = express.Router();
const { getAverageStockPrice } = require('../services/stockService');

router.get('/:ticker', getAverageStockPrice);

module.exports = router;
