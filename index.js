const { response } = require("express");
const express = require("express");
const User = require("./models").user;
const Project = require("./models").project;
const Tool = require("./models").tool;
const Material = require("./models").material;
const ProjectMaterial = require("./models").projectMaterial;
const ProjectTool = require("./models").projectTool;
const UserProject = require("./models").userProject;
const app = express();
const PORT = 4000;

app.use(express.json());

app.get("/test", async (request, response) => {
  try {
    const users = await User.findByPk(1, {
      include: [
        {
          model: Project,
          include: [{ model: Tool }],
          include: [{ model: Material }],
        },
      ],
    });
    response.status(200).send(users);
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}!`));
