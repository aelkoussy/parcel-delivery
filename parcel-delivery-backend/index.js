var Koa = require("koa");
var Router = require("koa-router");
var cors = require("@koa/cors");

var app = new Koa();
var bodyParser = require("koa-bodyparser");

// routes
var router = new Router();
var parcelRoutes = require("./api/parcel");
var usersRoutes = require("./api/user");

router.get("/hello", async ctx => {
  ctx.body = {
    status: "success",
    message: "hello, world!"
  };
});

app.use(bodyParser());
app.use(cors());
app.use(router.routes());
app.use(parcelRoutes.routes());
app.use(usersRoutes.routes());
app.listen(5000);
