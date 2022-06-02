const { Router } = require("express");
// const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Projects = require("../models/").project;
const Tool = require("../models/").tool;
const Material = require("../models/").material;
const ProjectMaterial = require("../models").projectMaterial;

const router = new Router();

// Route to fetch all the tools and materials

router.get("/", async (request, response) => {
  // const user = request.user;
  // const id = request.data.userId;
  //   console.log("Is this the data I want", user);
  try {
    const tools = await Tool.findAll();
    const materials = await Material.findAll();

    response.status(200).send({ tools, materials });
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
