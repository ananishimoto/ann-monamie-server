const User = require("../models").user;
const Project = require("../models").project;
const { toData } = require("./jwt");

async function auth(request, response, next) {
  const auth =
    request.headers.authorization && request.headers.authorization.split(" ");

  if (!auth || !(auth[0] === "Bearer") || !auth[1]) {
    return response.status(401).send({
      message:
        "This endpoint requires an Authorization header with a valid token",
    });
  }

  try {
    const data = toData(auth[1]);
    const user = await User.findByPk(data.userId, {
      include: [{ model: Project, attributes: ["id"] }],
    });
    if (!user) {
      return res.status(404).send({ message: "User does not exist" });
    }

    request.user = user;
    request.data = data;

    return next();
  } catch (error) {
    console.log("ERROR IN AUTH MIDDLEWARE", error);

    switch (error.name) {
      case "TokenExpiredError":
        return response
          .status(401)
          .send({ error: error.name, message: error.message });

      case "JsonWebTokenError":
        return response
          .status(400)
          .send({ error: error.name, message: error.message });

      default:
        return response.status(400).send({
          message: "Something went wrong, sorry",
        });
    }
  }
}

module.exports = auth;
