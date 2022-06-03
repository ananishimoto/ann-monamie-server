const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Projects = require("../models/").project;
const Tool = require("../models/").tool;
const Material = require("../models/").material;
const ProjectMaterial = require("../models").projectMaterial;
const ProjectTool = require("../models").projectTool;
const UserProject = require("../models").userProject;

const router = new Router();

// Route to fetch user's projects

router.get("/", authMiddleware, async (request, response) => {
  const user = request.user;
  const id = request.data.userId;
  console.log("Is this the data I want", user);
  try {
    const user = await User.findByPk(id, { include: { model: Projects } });

    const projects = user.get({ plain: true }).projects;

    // Separate different project objects/arrays by status

    const byStatus = projects.reduce((accumulator, project) => {
      const status = project.userProject.projectStatus;

      if (accumulator[status]) {
        return { ...accumulator, [status]: [...accumulator[status], project] };
      } else {
        return { ...accumulator, [status]: [project] };
      }
    }, {});

    delete user.dataValues.password;
    response.status(200).send({ projects: byStatus });
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: "Something went wrong, sorry" });
  }
});

// Route to fetch a specific project

router.get("/:id", authMiddleware, async (request, response) => {
  const { id } = request.params;
  const user = request.user;
  const userId = request.data.userId;
  // console.log("Is this the data I want", user);
  try {
    const user = await User.findByPk(userId, {
      include: {
        model: Projects,
        where: { id },
        include: [{ model: Tool }, { model: Material }],
      },
    });

    // Separate only the projects from the user info
    const details = user.get({ plain: true }).projects;

    // delete user.dataValues.password;
    response.status(200).send({ details });
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: "Something went wrong, sorry" });
  }
});

// Route to create a new project

router.post("/new", async (request, response) => {
  // const userId = request.user.id
  console.log("what do I have here?", request.body);
  const { name, image, pattern, tools, materials } = request.body;
  if (!name || !pattern) {
    return response.status(400).send("Please provide the needed information");
  }

  console.log("What do I have tools", tools);
  // const tools = [1, 2, 3]; // => [ {amount: 2, id: 1}, { amount: 4, id: 2}, {}]
  // const materials = [1, 2];

  try {
    //first create new project
    const newProject = await Projects.create({
      name,
      image,
      pattern,
    });

    console.log("new project", newProject);

    //associate this project with a user
    const projectStatusUpdate = await UserProject.create({
      userId: 1,
      projectId: newProject.id,
      timer: 0,
      projectStatus: "Wishlist",
    });

    //add the tools for this project
    const toolsArrayOfPromises = tools.map(async (tool) => {
      const projectTools = await ProjectTool.create({
        projectId: newProject.id,
        toolId: tool,
      });
      return projectTools;
    });
    await Promise.all(toolsArrayOfPromises);

    console.log("tools", toolsArrayOfPromises);

    //add the materials for this project
    const materialsArrayOfPromises = materials.map(async (material) => {
      const projectMaterials = await ProjectMaterial.create({
        projectId: newProject.id,
        materialId: material,
      });
      return projectMaterials;
    });
    await Promise.all(materialsArrayOfPromises);

    console.log("materials", materialsArrayOfPromises);

    // response.status(201).send("worked?");
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return response
        .status(400)
        .send({ message: "There is an existing project with this name" });
    }

    return response
      .status(400)
      .send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
