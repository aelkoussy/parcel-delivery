var Router = require("koa-router");
var router = new Router();

const db = require("../models/index");

const verifyJwt = require("../middlewares/jwt");
const verifyRole = require("../middlewares/verifyRole");

// here it is accessible only for manager role
router.get("/parcel/:id", verifyJwt, async (ctx) => {
  verifyRole(ctx, "manager");
  var parcel = await db.Parcel.findByPk(ctx.params.id);
  if (parcel != null) {
    ctx.body = {
      parcel,
    };
  } else {
    ctx.body = {
      status: "notFound",
    };
  }
});

// here it is accessible only for manager role
// inserting new parcel
router.post("/parcel/", verifyJwt, async (ctx) => {
  verifyRole(ctx, "manager");
  const {
    origin,
    destination,
    status,
    // assignee,
    UserID,
  } = ctx.request.body;
  await db.Parcel.create({
    origin,
    destination,
    status,
    // assignee,
    UserID,
  })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });

  ctx.body = {
    status: "success",
    message: "parcel was added successfully!",
  };
});

// The assign parcel API , only managers
router.put("/parcel/assign", verifyJwt, async (ctx) => {
  verifyRole(ctx, "manager");
  const { status, UserID, parcelID } = ctx.request.body;
  await db.Parcel.update(
    {
      status,
      UserID,
    },
    { where: { id: parcelID } }
  );

  const parcel = await db.Parcel.findByPk(parcelID);
  ctx.body = {
    status: "success",
    message: "parcel was assigned successfully!",
    parcel, // sending the updated parcel in response
  };
});

// The submit Pickup Timestamp API , only bikers
router.put("/parcel/submitPickupTimestamp", verifyJwt, async (ctx) => {
  verifyRole(ctx, "biker");
  const { pickupTimestamp, parcelID } = ctx.request.body;
  await db.Parcel.update(
    { status: "PICKED_UP", pickupTimestamp: pickupTimestamp },
    { where: { id: parcelID } }
  );

  const parcel = await db.Parcel.findByPk(parcelID);
  ctx.body = {
    status: "success",
    message: "parcel was assigned successfully!",
    parcel, // sending the updated parcel in response
  };
});
// The submit Delivery Timestamp API , only bikers
router.put("/parcel/submitDeliveryTimestamp", verifyJwt, async (ctx) => {
  verifyRole(ctx, "biker");
  const { deliveryTimestamp, parcelID } = ctx.request.body;
  await db.Parcel.update(
    { status: "DELIVERED", deliveryTimestamp },
    { where: { id: parcelID } }
  );

  const parcel = await db.Parcel.findByPk(request_body.parcelID);
  ctx.body = {
    status: "success",
    message: "parcel was assigned successfully!",
    parcel, // sending the updated parcel in response
  };
});

// here it is accessible only for manager role
// get all parcels
router.get("/parcels", verifyJwt, async (ctx) => {
  // we get access to the decoded jwt in ctx.state.user
  verifyRole(ctx, "manager");
  const parcels = await db.Parcel.findAll().then((parcels) => {
    return parcels;
  });
  ctx.body = {
    parcels,
  };
});

module.exports = router;
