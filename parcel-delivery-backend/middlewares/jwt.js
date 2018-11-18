//middlewares/jwt.js

// this middleware only checks the jwt is valid, to decode it we should use the jsonwebtoken lib

const koaJwt = require("koa-jwt");

module.exports = koaJwt({
  secret: "A very secret key" // Should not be hardcoded, shall be some env variable
});
