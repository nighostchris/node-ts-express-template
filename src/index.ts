import http from "http";
// import https from "https";
import { promisify } from "util";

import { env } from "@config";
import { logger } from "@logger";
import { setup } from "@server";

// Initialize web server
const httpServer = http.createServer(setup()).listen(env.WEB_SERVER_PORT, parseInt(env.WEB_SERVER_HOST));
// const httpsServer = https.createServer(setup()).listen(env.WEB_SERVER_PORT, env.WEB_SERVER_HOST);

try {
  // Start the server and listen to incoming requests
  await promisify(httpServer.listen.bind(httpServer));
  logger.info(`server listening on http://${env.WEB_SERVER_HOST}:${env.WEB_SERVER_PORT}`);
  // await promisify(httpsServer.listen.bind(httpsServer));
  // logger.info(`server listening on https://${env.WEB_SERVER_HOST}:${env.WEB_SERVER_PORT}`);
} catch (error) {
  logger.error("failed to start web server", error);
  process.exit(1);
}
