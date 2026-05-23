import { existsSync } from "node:fs";

const requiredFiles = [
  "README.md",
  "frontend/README.md",
  "backend/README.md",
  "database/README.md",
  "devops/README.md",
  "system-design/README.md",
  "dsa/README.md",
  "mock-interviews/README.md",
  "debugging-playbooks/README.md",
  "production-incidents/README.md"
];

const missing = requiredFiles.filter((file) => !existsSync(file));

if (missing.length > 0) {
  console.error(`Missing required files:\n${missing.join("\n")}`);
  process.exit(1);
}

console.log("Repository structure check passed.");

