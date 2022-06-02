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
  console.log("Is this the data I want", user);
  try {
    const user = await User.findByPk(userId, {
      include: { model: Projects, where: { id } },
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

module.exports = router;
