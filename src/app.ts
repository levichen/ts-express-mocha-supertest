
import * as sourceMapSupport from "source-map-support";
sourceMapSupport.install();

import * as express from "express";

import Server from "./Server";

let server: Server = new Server();
let app: express.Application = server.bootstrap();

app.listen(3000, () => {
  console.log("I am listening at Port 3000");
});
