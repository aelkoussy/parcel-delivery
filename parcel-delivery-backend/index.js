var Koa = require("koa");
var Router = require("koa-router");

var app = new Koa();
var bodyParser = require("koa-bodyparser");

// routes
var router = new Router();
var parcelRoutes = require("./api/parcel");

router.get("/hello", async ctx => {
  ctx.body = {
    status: "success",
    message: "hello, world!"
  };
});

app.use(bodyParser());
app.use(router.routes());
app.use(parcelRoutes.routes());
app.listen(5000);
