// this is a helper function to throw unauthorized exception if the jwt bearer is not authorized
// for example if his role is biker & trying to access a manager (roleToCheck) API

module.exports = function (ctx, roleToCheck) {
  if (ctx.state.user.role !== roleToCheck) ctx.throw(401, "Unauthorized");
};
