import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export default (err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, error: err.message });
};
