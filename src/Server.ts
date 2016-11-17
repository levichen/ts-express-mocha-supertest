
import * as bodyParser from "body-parser";
import * as express from "express";

import { IResponse } from "./IResponse";

export default class Server {
  private app: express.Application;
  private router: express.Router;

  constructor() {
    this.app = express();

    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());

    this.router = express.Router();

    this.Route();
  }

  public bootstrap(): express.Application {
    return this.app;
  }

  private Route(): void {
    this.router.get("/", (req, res) => {

      let response: IResponse = { error: false, message: "Hello"};

      res.json(response);
    });

    this.router.post("/add", (req, res) => {
      let num1: number = req.body.num1;
      let num2: number = req.body.num2;

      res.json({ data: num1 + num2, error: false });
    });

    this.app.use("/", this.router);

    this.app.use((req, res, next) => {
      res.status(404).send({ error: true });
    });
  }
}
