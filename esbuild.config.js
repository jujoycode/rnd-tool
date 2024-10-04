const esbuild = require("esbuild");

const buildOptions = {
  entryPoints: ["src/main/main.ts", "src/index.tsx"],
  bundle: true,
  outdir: "dist",
  platform: "node",
  target: "node20",
  external: ["electron"],
  loader: {
    ".tsx": "tsx",
    ".ts": "ts",
    ".png": "file",
    ".jpg": "file",
    ".svg": "file",
  },
  publicPath: "/assets", // 이미지 파일의 public 경로
};

esbuild.build(buildOptions).catch(() => process.exit(1));
