import { Static, TSchema } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";

import { formatValidationError } from "./format-validation-error";

export const validate = <S extends TSchema>(schema: S, value: unknown) => {
  const validator = TypeCompiler.Compile(schema);
  const errors = [...validator.Errors(value)];

  if (errors.length > 0) {
    throw errors.map((error) => formatValidationError(error));
  }

  return value as Static<typeof schema>;
};
