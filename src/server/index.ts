import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";

import testRouter from "@api/test/routes";
import logMiddleware from "./middlewares/log";
import errorMiddleware from "./middlewares/error";

export const setup = () => {
  const server = express();
  // Cross origin resource sharing
  server.use(cors());
  // Parse cookie in request so that endpoint can access it through req.cookie
  server.use(cookieParser());
  // Parse application/json so that endpoint can access it through req.body
  server.use(express.json());
  // Parse application/x-www-form-urlencoded so that endpoint can access it through req.body
  server.use(express.urlencoded());
  // Middleware to handle request logging
  server.use(logMiddleware);
  // Web server routing section
  server.use("/", testRouter);
  // Middleware to handle errors
  server.use(errorMiddleware);
  return server;
};
