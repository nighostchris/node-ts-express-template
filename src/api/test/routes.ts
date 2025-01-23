import express from "express";

import { getSuccess } from "./handlers";

const router = express.Router();

router.get("/", getSuccess);

export default router;
