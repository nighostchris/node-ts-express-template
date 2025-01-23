import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const getSuccess = async (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({ success: true });
};
