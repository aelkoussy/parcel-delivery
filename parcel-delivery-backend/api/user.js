var Router = require("koa-router");
var router = new Router();

const db = require("../models/index");

const authenticate = require("../middlewares/authenticate");
const verifyJwt = require("../middlewares/jwt");
const verifyRole = require("../middlewares/verifyRole");

// create user api (register)
// managers only
router.post("/user/", verifyJwt, async ctx => {
  verifyRole(ctx, "manager");
  console.log(ctx.request.body);
  var request_body = ctx.request.body;
  await db.User.create({
    firstName: request_body.firstName,
    lastName: request_body.firstName,
    phone: request_body.firstName,
    email: request_body.firstName,
    password: request_body.firstName,
    role: request_body.firstName
  })
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });

  ctx.body = {
    status: "success",
    message: "user was added successfully!"
  };
});

// login api calls authenticate middleware for creating a jwt
// anyone can access this API
router.post("/user/login/", authenticate, async ctx => {
  console.log(ctx.request.body);
});

// accessible only for managers
// gets all biker user data (selected fields only)
router.get("/users/bikersData", verifyJwt, async ctx => {
  verifyRole(ctx, "manager");
  var bikers = await db.User.findAll({
    attributes: ["id", "firstName", "lastName", "phone", "email"],
    where: { role: "biker" }
  }).then(bikers => {
    return bikers;
  });
  ctx.body = {
    bikers
  };
});

// API accessible only for bikers (to access their specific parcels)
// gets user parcels
router.get("/user/parcels", verifyJwt, async ctx => {
  // console log the decoded token (if valid token)
  console.log(ctx.state.user);
  verifyRole(ctx, "biker");
  // console.log(ctx)
  const decodedToken = ctx.state.user;

  var parcels = await db.Parcel.findAll({
    attributes: [
      "id",
      "origin",
      "destination",
      "status",
      "UserID",
      "pickupTimestamp",
      "deliveryTimestamp",
      "createdAt",
      "updatedAt"
    ],
    where: { UserID: ctx.state.user.id }
  }).then(bikers => {
    return bikers;
  });
  ctx.body = { parcels };
});

// TODO delete user (for superAdmins only)
module.exports = router;
