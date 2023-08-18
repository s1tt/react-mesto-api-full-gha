// Массив доменов, с которых разрешены кросс-доменные запросы
const allowedCors = [
  'https://s1tt-mesto.nomoreparties.co',
  'http://s1tt-mesto.nomoreparties.co',
  'https://api.s1tt-mesto.nomoreparties.co',
  'http://api.s1tt-mesto.nomoreparties.co',
];

const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

module.exports = (req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;
  const requestHeaders = req.headers['access-control-request-headers'];
  res.header('Access-Control-Allow-Credentials', true);
  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    res.end();
  }
  next();
};
