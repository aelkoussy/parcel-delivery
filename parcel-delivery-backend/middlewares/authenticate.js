// we create the token inside this file using jsonwebtoken & it is injected in the paths as koa-jwt middleware
// (since koa-jwt doesn't create jwts now, only verifies them)

var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const db = require("../models/index");

module.exports = async function(ctx) {
  var isPasswordOk;
  // getting the user record from DB to compare the password hash
  await db.User.find({
    where: {
      email: ctx.request.body.email
    }
  })
    .then(async result => {
      // here we compare the password supplied by user with the password in user record in DB
      console.log(result.password);
      isPasswordOk = await bcrypt.compare(
        ctx.request.body.password,
        result.password
      );
      if (isPasswordOk === true) {
        // create jwt then return it here (using jsonwebtoken library)
        ctx.status = 200;
        console.log("authentication success");
        // set the expiry to 1 hour from jwt creation time
        // exp shall be set to use the koa-jwt middleware validation for it automatically
        // or we can use the expiresIn option in jsonwebtoken as follows, which creates the exp claim too ;)
        // Should be the same secret key as the one used is ./jwt.js
        const token = await jwt.sign(
          {
            role: result.role,
            firstName: result.firstName,
            lastName: result.lastName,
            id: result.id
          },
          "A very secret key", // this is just for testing, must use a strong key!!
          {
            expiresIn: "60m"
          }
        );
        ctx.body = {
          token: token,
          message: "Successfully logged in!",
          firstName: result.firstName,
          lastName: result.lastName,
          role: result.role,
          isPasswordOk: isPasswordOk
        };
      }
    })
    .catch(err => {
      console.log(err);
    });
  if (isPasswordOk !== true) {
    ctx.status = 401;
    ctx.body = {
      message: "Authentication failed"
    };
  }
  return ctx;
};
