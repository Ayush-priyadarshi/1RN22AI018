require('dotenv').config();
const TOKEN = process.env.BEARER_TOKEN;

async function fetchStockHistory(ticker, minutes) {
  const key = `${ticker}_${minutes}`;
  if (cache.has(key)) return cache.get(key);

  const url = `${BASE_URL}/${ticker}` + (minutes ? `?minutes=${minutes}` : '');

  const resp = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: 'application/json'
    }
  });

  const data = resp.data;

  const history = Array.isArray(data)
    ? data
    : data.stock
      ? [data.stock]
      : [];

  cache.set(key, history);
  return history;
}
