const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Projects = require("../models/").project;

const router = new Router();

// Route to fetch user's projects

router.get("/", authMiddleware, async (request, response) => {
  const user = request.user;
  const id = request.data.userId;
  console.log("Is this the data I want", user);
  try {
    const user = await User.findByPk(id, { include: { model: Projects } });

    const projects = user.projects;

    delete user.dataValues.password;
    response.status(200).send({ projects });
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
