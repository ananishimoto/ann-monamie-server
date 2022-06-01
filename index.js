const express = require("express");
const cors = require("cors");

// ROUTES
const authRouter = require("./routers/auth");
const projectRouter = require("./routers/projects");

// MODELS
const User = require("./models").user;
const Project = require("./models").project;
const Tool = require("./models").tool;
const Material = require("./models").material;

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 4000;

app.use("/auth", authRouter);
app.use("/projects", projectRouter);

app.get("/test", async (request, response) => {
  try {
    const users = await User.findByPk(1, {
      include: [
        {
          model: Project,
          include: [
            {
              model: Tool,
            },
            {
              model: Material,
            },
          ],
        },
      ],
    });
    response.status(200).send(users);
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}!`));
