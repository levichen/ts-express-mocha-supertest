
import * as chai from "chai";
import * as express from "express";
import * as request from "supertest";

import Server from "../src/Server";

const expect = chai.expect;

let server: Server = new Server();
let app: express.Application = server.bootstrap();

describe("Super Test", () => {
  it("expect return home page", (done) => {
    request(app)
      .get("/")
      .expect("Content-type", /json/)
      .expect(200)
      .end((error, res) => {
        let a: string = "error";

        expect(res.status).to.equal(200);
        expect(res.body).have.property(a);
        expect(res.body).have.property("message");
        expect(res.body.error).to.equal(false);

        done();
      });
  });

  it("expect add two numbers", (done) => {
    request(app)
      .post("/add")
      .send({ num1: 10, num2: 20})
      .expect("Content-type", /json/)
      .expect(200)
      .end((error, res) => {

        expect(res.status).to.equal(200);
        expect(res.body.error).to.equal(false);
        expect(res.body.data).to.equal(30);

        done();
      });
  });

  it("expect return HTTP 404", (done) => {
    request(app)
      .get("/random")
      .expect("Content-type", /json/)
      .expect(404)
      .end((error, res) => {
        expect(res.status).to.equal(404);

        done();
      });
  });
});
