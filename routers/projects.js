const { Router } = require("express");
// const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Projects = require("../models/").project;

const router = new Router();

// Route to fetch user's projects

router.get("/", async (request, response) => {
  try {
    const projects = await User.findByPk(1, { include: { model: Projects } });

    response.status(200).send(projects);
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
