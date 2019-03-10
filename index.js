const http = require('http')
const port = process.env.PORT || 3000

const server = http.createServer((request, response) => {
  console.log(request.url)
  response.end('Hello from ToiDiCodeDao')
})

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`Server is listening on ${port}`)
})
