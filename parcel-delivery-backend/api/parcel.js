var Router = require("koa-router");
var router = new Router();

const db = require("../models/index");

const verifyJwt = require("../middlewares/jwt");
const verifyRole = require("../middlewares/verifyRole");

// here it is accessible only for manager role
router.get("/parcel/:id", verifyJwt, async ctx => {
  verifyRole(ctx, "manager");
  var parcel = await db.Parcel.findById(ctx.params.id);
  if (parcel != null) {
    ctx.body = {
      parcel
    };
  } else {
    ctx.body = {
      status: "notFound"
    };
  }
});

// here it is accessible only for manager role
// inserting new parcel
router.post("/parcel/", verifyJwt, async ctx => {
  verifyRole(ctx, "manager");
  var request_body = ctx.request.body;
  await db.Parcel.create({
    origin: request_body.origin,
    destination: request_body.destination,
    status: request_body.status,
    // assignee: request_body.assignee,
    UserID: request_body.UserID
  })
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });

  ctx.body = {
    status: "success",
    message: "parcel was added successfully!"
  };
});

// The assign parcel API , only managers
router.put("/parcel/assign", verifyJwt, async ctx => {
  verifyRole(ctx, "manager");
  var request_body = ctx.request.body;
  await db.Parcel.update(
    {
      status: request_body.status,
      // assignee: request_body.assignee,
      UserID: request_body.UserID
    },
    { where: { id: request_body.parcelID } }
  );

  var parcel = await db.Parcel.findById(request_body.parcelID);
  ctx.body = {
    status: "success",
    message: "parcel was assigned successfully!",
    parcel: parcel // sending the updated parcel in response
  };
});

// The assign parcel API , only bikers
router.put("/parcel/submitPickupTimestamp", verifyJwt, async ctx => {
  verifyRole(ctx, "biker");
  var request_body = ctx.request.body;
  await db.Parcel.update(
    { status: "PICKED_UP", pickupTimestamp: request_body.pickupTimestamp },
    { where: { id: request_body.parcelID } }
  );

  var parcel = await db.Parcel.findById(request_body.parcelID);
  ctx.body = {
    status: "success",
    message: "parcel was assigned successfully!",
    parcel: parcel // sending the updated parcel in response
  };
});
// The assign parcel API , only bikers
router.put("/parcel/submitDeliveryTimestamp", verifyJwt, async ctx => {
  verifyRole(ctx, "biker");
  var request_body = ctx.request.body;
  await db.Parcel.update(
    { status: "DELIVERED", deliveryTimestamp: request_body.deliveryTimestamp },
    { where: { id: request_body.parcelID } }
  );

  var parcel = await db.Parcel.findById(request_body.parcelID);
  ctx.body = {
    status: "success",
    message: "parcel was assigned successfully!",
    parcel: parcel // sending the updated parcel in response
  };
});

// here it is accessible only for manager role
// get all parcels
router.get("/parcels/", verifyJwt, async ctx => {
  // we get access to the decoded jwt in ctx.state.user
  verifyRole(ctx, "manager");
  var parcels = await db.Parcel.findAll().then(parcels => {
    return parcels;
  });
  ctx.body = {
    parcels
  };
});

module.exports = router;
