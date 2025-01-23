import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    // silent: true,
    testTimeout: 60000,
    coverage: {
      provider: "v8",
    },
    include: ["tests/**/*.test.ts"],
    // Please align with .env
    env: {
      // General
      LOG_LEVEL: "silent",
      NODE_ENV: "development",
      // Web Server
      WEB_SERVER_HOST: "0.0.0.0",
      WEB_SERVER_PORT: "3010",
    },
  },
  resolve: {
    alias: {
      // Please align it with tsconfig.paths.json
      "@config": path.resolve(__dirname, "./src/config.ts"),
      "@logger": path.resolve(__dirname, "./src/logger.ts"),
    },
  },
});
