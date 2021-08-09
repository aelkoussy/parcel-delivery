//middlewares/jwt.js

// this middleware only checks the jwt is valid, after validating it, you will find it in the ctx.state.user

const koaJwt = require("koa-jwt");

module.exports = koaJwt({
  secret: "A very secret key", // Should not be hardcoded, shall be some env variable
});
