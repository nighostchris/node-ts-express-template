import { Static, Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";

import { formatValidationError } from "@utils/validations";

const schema = Type.Object({
  // General
  NODE_ENV: Type.String(),
  LOG_LEVEL: Type.String(),
  // Web Server
  WEB_SERVER_HOST: Type.String(),
  WEB_SERVER_PORT: Type.String(),
});

const validator = TypeCompiler.Compile(schema);

const errors = [...validator.Errors(process.env)];

if (errors.length > 0) {
  for (const error of errors) {
    console.error(formatValidationError(error));
  }

  process.exit(1);
}

const rawEnv: { [key: string]: unknown } = {};

for (const property of Object.keys(schema.properties)) {
  const envVar = process.env[property];
  if (typeof envVar !== "undefined") {
    rawEnv[property] = envVar;
  }
}

const env = rawEnv as Static<typeof schema>;

export { env };
