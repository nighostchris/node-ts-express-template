import pino from "pino";

import { env } from "@config";

export const logger = pino({
  base: {},
  level: env.LOG_LEVEL,
  transport: {
    target: "pino-pretty",
    options: {
      colorize: env.NODE_ENV === "development",
      translateTime: "SYS:yyyy-mm-dd HH:MM:ss.l",
    },
  },
  timestamp: env.NODE_ENV === "development",
});
