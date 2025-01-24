import { Express } from "express";
import supertest from "supertest";

import { setup } from "@server";

describe("[api][v1][testing]", async () => {
  let server: Express;

  beforeAll(async () => {
    server = setup();
  });

  afterAll(async () => {});

  test("Success - Get success in response", async () => {
    const { status, body } = await supertest(server).get("/api/v1/");
    expect(status).toBe(200);
    expect(body.success).toBe(true);
  });
});
