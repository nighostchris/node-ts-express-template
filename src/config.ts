import { Static, Type } from "@sinclair/typebox";
import dayjs from "dayjs";

import { validate } from "@utils/validations";

const schema = Type.Object({
  // General
  NODE_ENV: Type.String(),
  LOG_LEVEL: Type.Union(
    [
      Type.Literal("fatal"),
      Type.Literal("error"),
      Type.Literal("warn"),
      Type.Literal("info"),
      Type.Literal("debug"),
      Type.Literal("trace"),
      Type.Literal("silent"),
    ],
    { default: "debug" },
  ),
  // Web Server
  WEB_SERVER_HOST: Type.String(),
  WEB_SERVER_PORT: Type.String({
    minLength: 0,
    pattern: "^(?:0|[1-9][0-9]{0,4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]{1}|6553[0-5])$",
  }),
});

try {
  validate(schema, process.env);
} catch (error: any) {
  for (const e of error) {
    console.log(`[${dayjs().format("YYYY-MM-DD HH:mm:ss.SSS")}] ERROR: ${e}`);
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
