import { ValueError } from "@sinclair/typebox/errors";

export const formatValidationError = (error: ValueError) => {
  return `${error.message.toLowerCase()} for property ${error.path
    .split("/")
    .filter((field) => field.length)
    .join(" -> ")}`;
};
