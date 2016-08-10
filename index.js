const crypto = require('crypto');
const http = require('http');
const url = require('url');

function dumbFibonacci(n) {
  if (n == 0 || n == 1) return 1;

  return dumbFibonacci(n-1) + dumbFibonacci(n-2);
}

http.createServer((req, res) => {
  const query = url.parse(req.url, true).query;
  const n = parseInt(query.n);
  const reqId = `req-${crypto.randomBytes(2).toString('hex')} (${n})`;

  console.time(reqId);
  const result = dumbFibonacci(n);
  console.timeEnd(reqId);

  res.end(''+result);
}).listen(80, () => console.log('Server started.'));
