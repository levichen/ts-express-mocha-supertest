
import * as sourceMapSupport from "source-map-support";
sourceMapSupport.install();

import * as bodyParser from "body-parser";
import * as express from "express";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ error: false, message: "Hello"});
});

router.post("/add", (req, res) => {
  let num1: number = req.body.num1;
  let num2: number = req.body.num2;

  res.json({ data: num1 + num2, error: false });
});

app.use("/", router);

app.use((req, res, next) => {
  res.status(404).send({ error: true });
});

app.listen(3000, () => {
  console.log("I am listening at Port 3000");
});
