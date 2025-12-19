const fs = require("fs");
const path = require("path");

const tools = require("./data/tools.json");
const template = fs.readFileSync("tool-template.html", "utf8");

const BASE_URL = "https://deveshgoyal2070-pixel.github.io/gttools";

tools.forEach(tool => {
  const category = tool.category.toLowerCase().replace(/\s+/g, "");
  const dirPath = path.join("tools", category);

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const toolUrl = `${BASE_URL}/tools/${category}/${tool.slug}.html`;

  const html = template
    .replace(/{{TOOL_NAME}}/g, tool.name)
    .replace(/{{TOOL_DESC}}/g, tool.desc)
    .replace(/{{TOOL_URL}}/g, toolUrl);

  const filePath = path.join(dirPath, `${tool.slug}.html`);
  fs.writeFileSync(filePath, html);

  console.log("Created:", filePath);
});

console.log("✅ All tool pages generated successfully");
