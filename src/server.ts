import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/:endpoint([\\/\\w\\.-]*)", async (req, res) => {
  axios
    .get(req.params.endpoint)
    .then(async (r) => {
      return res.send(await r.data);
    })
    .catch((e) => {
      return res.status(403).send({ status: "error" });
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
