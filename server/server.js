const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('database.json')
const middlewares = jsonServer.defaults()

const PORT = 3000;

function isAuthorized(req, res) {
  console.log('request', res, "#################", req.headers);
  return true;
}
server.use(middlewares)
server.use((req, res, next) => {
 if (isAuthorized(req)) {
   next() // continue to JSON Server router
 } else {
   res.sendStatus(401)
 }
})
server.use(router)
server.listen(PORT, () => {
  console.log('JSON Server is running on port:' + PORT )
})