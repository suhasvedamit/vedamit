import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const GH_PAGES_BIN = path.join(ROOT, "node_modules/gh-pages/bin/gh-pages.js");

// #region agent log
const DEBUG_ENDPOINT =
  "http://127.0.0.1:7810/ingest/8b41e689-4930-4fc2-a143-a5c62b8ef119";
const DEBUG_SESSION = "b23f10";

function debugLog(message, data, hypothesisId, runId = "pre-fix") {
  fetch(DEBUG_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Debug-Session-Id": DEBUG_SESSION,
    },
    body: JSON.stringify({
      sessionId: DEBUG_SESSION,
      runId,
      hypothesisId,
      location: "scripts/deploy-gh-pages.mjs",
      message,
      data,
      timestamp: Date.now(),
    }),
  }).catch(() => {});
}
// #endregion

function gitOk(args) {
  const r = spawnSync("git", args, {
    cwd: ROOT,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
  return r.status === 0 ? (r.stdout ?? "").trim() : null;
}

const insideGit = gitOk(["rev-parse", "--is-inside-work-tree"]) === "true";
const originUrl = gitOk(["remote", "get-url", "origin"]);
const distDir = path.join(ROOT, "dist");
const distExists = existsSync(distDir);
const repoFromEnv = process.env.GHPAGES_REPO?.trim() || "";

let repoArgSource = "none";
if (repoFromEnv) repoArgSource = "GHPAGES_REPO";
else if (originUrl) repoArgSource = "origin-remote";

// #region agent log
debugLog(
  "deploy-gh-pages diagnostics",
  {
    insideGit,
    hasOrigin: Boolean(originUrl),
    distExists,
    hasGHPAGES_REPO: Boolean(repoFromEnv),
    repoArgSource,
  },
  "H-A",
);
// #endregion

if (!insideGit) {
  console.error(
    "deploy-gh-pages: not inside a git work tree. gh-pages requires a git checkout.",
  );
  process.exit(1);
}
if (!distExists) {
  console.error("deploy-gh-pages: dist/ is missing. Run build:pages first.");
  process.exit(1);
}
if (!repoFromEnv && !originUrl) {
  console.error(
    'deploy-gh-pages: no git remote "origin" and GHPAGES_REPO is unset.\n' +
      "Set GHPAGES_REPO to the GitHub repo URL, e.g.\n" +
      "  GHPAGES_REPO=https://github.com/you/repo.git npm run deploy",
  );
  process.exit(1);
}

const ghArgs = [GH_PAGES_BIN, "-d", "dist"];
if (repoFromEnv) {
  ghArgs.push("-r", repoFromEnv);
}

// #region agent log
debugLog(
  "spawning gh-pages",
  { argCount: ghArgs.length, repoArgSource },
  "H-A",
);
// #endregion

const run = spawnSync(process.execPath, ghArgs, {
  cwd: ROOT,
  stdio: "inherit",
});

// #region agent log
debugLog(
  "gh-pages exit",
  { status: run.status ?? "null" },
  "H-A",
  "post-spawn",
);
// #endregion

process.exit(run.status === null ? 1 : run.status);
