import { Static, Type } from "@sinclair/typebox";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { validate } from "@utils/validations";

export const getSuccessRequestBodySchema = Type.Object({
  hello: Type.String(),
});

type GetSuccessRequestBody = Static<typeof getSuccessRequestBodySchema>;

export const getSuccess = async (req: Request, res: Response) => {
  // Validating request body
  try {
    validate(getSuccessRequestBodySchema, req.body);
  } catch (error) {
    return void res.status(StatusCodes.BAD_REQUEST).json({ success: false, error });
  }

  const { body }: { body: GetSuccessRequestBody } = req;

  return void res.status(StatusCodes.OK).json({ success: true });
};
