import { Request, Response, NextFunction } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
  console.log(`Incoming request - method: ${req.method}, body: ${JSON.stringify(req.body)}`);
  next();
};
