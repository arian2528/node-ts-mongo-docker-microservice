import * as request from "supertest";
import { expect } from "chai";

import createServer from "./server";
import { Application } from "express";

describe("server checks", function () {
    const app = createServer();
  
    it("server instantiated without error", function (done) {
        const req = request(app)
        req.get("/").expect(200, done);
    });
});
