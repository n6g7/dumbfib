const crypto = require('crypto')
const http = require('http')
const url = require('url')

function dumbFibonacci (n) {
  if (n === 0 || n === 1) return 1

  return dumbFibonacci(n - 1) + dumbFibonacci(n - 2)
}

http.createServer((req, res) => {
  let { n } = url.parse(req.url, true).query

  if (!n) return res.end('Add a query parameter to your request: <a href="?n=2">n=2</a>')

  n = parseInt(n)
  const reqId = `req-${crypto.randomBytes(2).toString('hex')} (${n})`

  console.time(reqId)
  const result = dumbFibonacci(n)
  console.timeEnd(reqId)

  res.end('' + result)
}).listen(8080, () => console.log('Server started.'))
