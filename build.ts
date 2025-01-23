import { build } from "esbuild";
import { glob } from "tinyglobby";
import esbuildPluginPino from "esbuild-plugin-pino";

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
