// AUTH AND HASH TOOLS
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");
const { toJWT } = require("../auth/jwt");

// ROUTER
const { Router } = require("express");

// MIDDLEWARE
const authMiddleware = require("../auth/middleware");

// MODELS
const User = require("../models/").user;

const router = new Router();

// Create new user endpoint

router.post("/signup", async (request, response) => {
  const { email, password, name } = request.body;

  if (!email || !password || !name) {
    return response
      .status(400)
      .send("Please provide an email, password and a name");
  }

  try {
    const user = await User.findOne({ where: { email } });

    if (user) {
      console.log(user);
      return response.status(400).send("User already exist");
    }

    const newUser = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
    });

    delete newUser.dataValues["password"]; // don't send back the password hash

    const token = toJWT({ userId: newUser.id });

    response.status(201).json({ token, user: newUser });
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: "Something went wrong, sorry" });
  }
});

// Login endpoint

router.post("/login", async (request, response, next) => {
  try {
    const { email, password } = request.body;

    if (!email || !password) {
      return response
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    const user = await User.findOne({ where: { email } });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return response.status(400).send({
        message: "User with that email not found or password incorrect",
      });
    }

    delete user.dataValues["password"]; // don't send back the password hash
    const token = toJWT({ userId: user.id });
    return response.status(200).send({ token, user: user.dataValues });
  } catch (error) {
    console.log(error);
    return response
      .status(400)
      .send({ message: "Something went wrong, sorry" });
  }
});

// Keep token while loggedIn endopoint

router.get("/me", authMiddleware, async (request, response) => {
  // don't send back the password hash
  delete request.user.dataValues["password"];
  response.status(200).send({ ...request.user.dataValues });
});

// The /me endpoint can be used to:
// - get the users email & name using only their token
// - checking if a token is (still) valid

module.exports = router;
