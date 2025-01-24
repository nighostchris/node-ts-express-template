import { build } from "esbuild";
import esbuildPluginPino from "esbuild-plugin-pino";
import { glob } from "tinyglobby";

const entryPoints = await glob(["src/**/*.ts"], { ignore: ["src/**/*.d.ts"] });

await build({
  entryPoints,
  bundle: true,
  format: "cjs",
  outdir: "dist",
  platform: "node",
  outExtension: { ".js": ".cjs" },
  plugins: [esbuildPluginPino({ transports: ["pino-pretty"] })],
});
