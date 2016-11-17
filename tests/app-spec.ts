
import * as chai from "chai";
import * as supertest from "supertest";

const server = supertest.agent("http://localhost:3000");
const expect = chai.expect;

describe("Super Test", () => {
  it("expect return home page", (done) => {
    server
      .get("/")
      .expect("Content-type", /json/)
      .expect(200)
      .end((error, res) => {

        expect(res.status).to.equal(200);
        expect(res.body.error).to.equal(false);

        done();
      });
  });

  it("expect add two numbers", (done) => {
    server
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
    server
      .get("/random")
      .expect("Content-type", /json/)
      .expect(404)
      .end((error, res) => {
        expect(res.status).to.equal(404);

        done();
      });
  });
});
