const { Router } = require("express");
const Projects = require("../models/").project;
const Tool = require("../models/").tool;
const Material = require("../models/").material;
const ProjectMaterial = require("../models").projectMaterial;
const ProjectTool = require("../models").projectTool;
const UserProject = require("../models").userProject;

const router = new Router();

// Route to fetch all the projects

router.get("/", async (request, response) => {
  try {
    const allProjects = await Projects.findAll();

    response.status(200).send(allProjects);
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
