console.log("Starting server...");

const express = require('express');
const stocksRouter = require('./routes/stocks');
const { getStockCorrelation } = require('./services/stockService');

const app = express();
app.use(express.json());


app.use('/stocks', stocksRouter);
app.get('/stockcorrelation', getStockCorrelation);


app.get('/', (req, res) => res.send('Stock Aggregator API is live'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
