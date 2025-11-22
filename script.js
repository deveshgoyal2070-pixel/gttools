// =========================
// GTTOOLS – Frontend Tools
// =========================

// ---- TOOL DEFINITIONS ----

// Text tools
const TEXT_TOOLS = [
  // Case
  { id: "txt-uppercase", name: "Uppercase Converter", category: "Case", group: "text", action: "uppercase" },
  { id: "txt-lowercase", name: "Lowercase Converter", category: "Case", group: "text", action: "lowercase" },
  { id: "txt-titlecase", name: "Title Case Converter", category: "Case", group: "text", action: "titlecase" },
  { id: "txt-sentencecase", name: "Sentence Case Converter", category: "Case", group: "text", action: "sentencecase" },
  { id: "txt-invertcase", name: "Invert Case", category: "Case", group: "text", action: "invertcase" },
  { id: "txt-alternating", name: "Alternating Case", category: "Case", group: "text", action: "alternating" },

  // Spaces / lines
  { id: "txt-remove-extra-spaces", name: "Remove Extra Spaces", category: "Clean", group: "text", action: "removeExtraSpaces" },
  { id: "txt-trim", name: "Trim Text (Start/End)", category: "Clean", group: "text", action: "trim" },
  { id: "txt-trim-lines", name: "Trim Each Line", category: "Lines", group: "text", action: "trimLines" },
  { id: "txt-remove-empty-lines", name: "Remove Empty Lines", category: "Lines", group: "text", action: "removeEmptyLines" },
  { id: "txt-sort-lines-az", name: "Sort Lines A–Z", category: "Lines", group: "text", action: "sortLinesAZ" },
  { id: "txt-sort-lines-za", name: "Sort Lines Z–A", category: "Lines", group: "text", action: "sortLinesZA" },
  { id: "txt-reverse-lines", name: "Reverse Lines Order", category: "Lines", group: "text", action: "reverseLines" },

  // Reverse
  { id: "txt-reverse-text", name: "Reverse Text", category: "Reverse", group: "text", action: "reverseText" },
  { id: "txt-reverse-words", name: "Reverse Each Word", category: "Reverse", group: "text", action: "reverseWords" },

  // Line operations
  { id: "txt-add-line-numbers", name: "Add Line Numbers", category: "Lines", group: "text", action: "addLineNumbers" },
  { id: "txt-find-replace", name: "Find & Replace", category: "Text", group: "text", action: "findReplace" },

  // Counters
  { id: "txt-word-count", name: "Word Counter", category: "Stats", group: "text", action: "wordCount" },
  { id: "txt-char-count", name: "Character Counter", category: "Stats", group: "text", action: "charCount" },
  { id: "txt-line-count", name: "Line Counter", category: "Stats", group: "text", action: "lineCount" },
  { id: "txt-paragraph-count", name: "Paragraph Counter", category: "Stats", group: "text", action: "paragraphCount" },
  { id: "txt-reading-time", name: "Reading Time Estimator", category: "Stats", group: "text", action: "readingTime" },

  // Cleaning / filters
  { id: "txt-remove-punct", name: "Remove Punctuation", category: "Clean", group: "text", action: "removePunctuation" },
  { id: "txt-keep-numbers", name: "Keep Only Numbers", category: "Clean", group: "text", action: "keepNumbers" },
  { id: "txt-remove-numbers", name: "Remove Numbers", category: "Clean", group: "text", action: "removeNumbers" },

  // Naming styles
  { id: "txt-slug", name: "Slug Generator", category: "Naming", group: "text", action: "slug" },
  { id: "txt-snake", name: "snake_case Converter", category: "Naming", group: "text", action: "snake" },
  { id: "txt-kebab", name: "kebab-case Converter", category: "Naming", group: "text", action: "kebab" },
  { id: "txt-camel", name: "camelCase Converter", category: "Naming", group: "text", action: "camel" },
  { id: "txt-pascal", name: "PascalCase Converter", category: "Naming", group: "text", action: "pascal" },
  { id: "txt-hashtags", name: "Hashtag Generator", category: "Social", group: "text", action: "hashtags" },

  // Extractors
  { id: "txt-email-extract", name: "Email Extractor", category: "Extract", group: "text", action: "emailExtract" },
  { id: "txt-url-extract", name: "URL Extractor", category: "Extract", group: "text", action: "urlExtract" },

  // Encoding
  { id: "txt-b64-encode", name: "Base64 Encode (Text)", category: "Encode", group: "text", action: "b64Encode" },
  { id: "txt-b64-decode", name: "Base64 Decode (Text)", category: "Encode", group: "text", action: "b64Decode" },
  { id: "txt-url-encode", name: "URL Encode (Text)", category: "Encode", group: "text", action: "urlEncode" },
  { id: "txt-url-decode", name: "URL Decode (Text)", category: "Encode", group: "text", action: "urlDecode" },

  // JSON
  { id: "txt-json-pretty", name: "JSON Pretty Print", category: "JSON", group: "text", action: "jsonPretty" },
  { id: "txt-json-minify", name: "JSON Minify", category: "JSON", group: "text", action: "jsonMinify" },

  // Generators
  { id: "txt-lorem", name: "Lorem Ipsum Generator", category: "Generator", group: "text", action: "lorem" },
  { id: "txt-password", name: "Random Password Generator", category: "Generator", group: "text", action: "password" }
];

// Image tools (all canvas-based)
const IMAGE_TOOLS = [
  { id: "img-resize", name: "Image Resize", category: "Basic", group: "image", action: "resize" },
  { id: "img-rotate-90", name: "Rotate 90°", category: "Basic", group: "image", action: "rotate90" },
  { id: "img-rotate-180", name: "Rotate 180°", category: "Basic", group: "image", action: "rotate180" },
  { id: "img-rotate-270", name: "Rotate 270°", category: "Basic", group: "image", action: "rotate270" },
  { id: "img-flip-h", name: "Flip Horizontal", category: "Basic", group: "image", action: "flipH" },
  { id: "img-flip-v", name: "Flip Vertical", category: "Basic", group: "image", action: "flipV" },

  { id: "img-grayscale", name: "Grayscale", category: "Filter", group: "image", action: "grayscale" },
  { id: "img-invert", name: "Invert Colors", category: "Filter", group: "image", action: "invert" },
  { id: "img-sepia", name: "Sepia", category: "Filter", group: "image", action: "sepia" },
  { id: "img-brightness+", name: "Brightness +", category: "Adjust", group: "image", action: "brightnessUp" },
  { id: "img-brightness-", name: "Brightness -", category: "Adjust", group: "image", action: "brightnessDown" },
  { id: "img-contrast+", name: "Contrast +", category: "Adjust", group: "image", action: "contrastUp" },
  { id: "img-contrast-", name: "Contrast -", category: "Adjust", group: "image", action: "contrastDown" },

  { id: "img-blur", name: "Blur", category: "Filter", group: "image", action: "blur" },
  { id: "img-pixelate", name: "Pixelate", category: "Filter", group: "image", action: "pixelate" },

  { id: "img-border", name: "Add Border", category: "Style", group: "image", action: "border" },
  { id: "img-circle", name: "Circle Crop", category: "Style", group: "image", action: "circle" },

  { id: "img-download-png", name: "Download PNG", category: "Export", group: "image", action: "downloadPng" },
  { id: "img-download-jpg", name: "Download JPG", category: "Export", group: "image", action: "downloadJpg" }
];

// Dev tools
const DEV_TOOLS = [
  // JSON / CSV
  { id: "dev-json-validate", name: "JSON Validator", category: "JSON", group: "dev", action: "jsonValidate" },
  { id: "dev-json-format", name: "JSON Formatter", category: "JSON", group: "dev", action: "jsonPretty" },
  { id: "dev-json-minify", name: "JSON Minifier", category: "JSON", group: "dev", action: "jsonMinify" },
  { id: "dev-json-to-csv", name: "JSON → CSV", category: "Data", group: "dev", action: "jsonToCsv" },
  { id: "dev-csv-to-json", name: "CSV → JSON", category: "Data", group: "dev", action: "csvToJson" },

  // XML
  { id: "dev-xml-format", name: "XML Formatter", category: "XML", group: "dev", action: "xmlPretty" },
  { id: "dev-xml-minify", name: "XML Minifier", category: "XML", group: "dev", action: "xmlMinify" },

  // Encoding
  { id: "dev-b64-encode", name: "Base64 Encode", category: "Encode", group: "dev", action: "b64Encode" },
  { id: "dev-b64-decode", name: "Base64 Decode", category: "Encode", group: "dev", action: "b64Decode" },
  { id: "dev-url-encode", name: "URL Encode", category: "Encode", group: "dev", action: "urlEncode" },
  { id: "dev-url-decode", name: "URL Decode", category: "Encode", group: "dev", action: "urlDecode" },
  { id: "dev-html-escape", name: "HTML Escape", category: "HTML", group: "dev", action: "htmlEscape" },
  { id: "dev-html-unescape", name: "HTML Unescape", category: "HTML", group: "dev", action: "htmlUnescape" },

  // Security / IDs
  { id: "dev-jwt-decode", name: "JWT Decoder", category: "Security", group: "dev", action: "jwtDecode" },
  { id: "dev-uuid", name: "UUID Generator", category: "Generator", group: "dev", action: "uuid" },
  { id: "dev-random-string", name: "Random String Generator", category: "Generator", group: "dev", action: "randomString" },
  { id: "dev-api-key", name: "API Key Generator", category: "Generator", group: "dev", action: "apiKey" },

  // SEO / meta
  { id: "dev-robots", name: "robots.txt Generator", category: "SEO", group: "dev", action: "robots" },
  { id: "dev-sitemap", name: "sitemap.xml Generator", category: "SEO", group: "dev", action: "sitemap" },
  { id: "dev-meta-tags", name: "Meta Tags Generator", category: "SEO", group: "dev", action: "metaTags" },
  { id: "dev-og-tags", name: "OpenGraph Tags Generator", category: "SEO", group: "dev", action: "ogTags" },

  // Regex / text
  { id: "dev-regex-tester", name: "Regex Tester", category: "Regex", group: "dev", action: "regexTest" },
  { id: "dev-diff", name: "Diff Checker (Simple)", category: "Compare", group: "dev", action: "diff" },

  // Network / URL
  { id: "dev-url-parser", name: "URL Parser", category: "Network", group: "dev", action: "urlParse" },
  { id: "dev-query-parser", name: "Query String Parser", category: "Network", group: "dev", action: "queryParse" },
  { id: "dev-ip-extract", name: "IP Extractor", category: "Network", group: "dev", action: "ipExtract" },

  // JSON viewer
  { id: "dev-json-viewer", name: "JSON Viewer (Pretty)", category: "JSON", group: "dev", action: "jsonPretty" }
];

const TOOLS = [...TEXT_TOOLS, ...IMAGE_TOOLS, ...DEV_TOOLS];

// ---- GLOBAL STATE ----
let currentTool = null;
let currentGroupFilter = "all";

// Image state
let imageCanvas = null;
let imageCtx = null;
let imageLoaded = false;

// =====================
// INITIALISATION
// =====================

document.addEventListener("DOMContentLoaded", () => {
  setupGroupFilters();
  setupSearch();
  renderToolList();

  // Default: first text tool
  currentTool = TEXT_TOOLS[0];
  showTool(currentTool);
  highlightActiveItem();
});

// =====================
// SIDEBAR / FILTERS
// =====================

function setupGroupFilters() {
  const buttons = document.querySelectorAll(".group-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentGroupFilter = btn.getAttribute("data-group");
      const searchVal = document.getElementById("searchBox").value || "";
      renderToolList(searchVal);
    });
  });
}

function setupSearch() {
  const searchBox = document.getElementById("searchBox");
  searchBox.addEventListener("input", () => {
    renderToolList(searchBox.value);
  });
}

function renderToolList(filterText = "") {
  const list = document.getElementById("toolList");
  list.innerHTML = "";

  const query = filterText.trim().toLowerCase();

  TOOLS.forEach((tool) => {
    if (currentGroupFilter !== "all" && tool.group !== currentGroupFilter) {
      return;
    }

    if (
      query &&
      !tool.name.toLowerCase().includes(query) &&
      !tool.category.toLowerCase().includes(query)
    ) {
      return;
    }

    const li = document.createElement("li");
    li.className = "tool-item";
    if (currentTool && tool.id === currentTool.id) {
      li.classList.add("active");
    }

    const nameEl = document.createElement("div");
    nameEl.className = "tool-name";
    nameEl.textContent = tool.name;

    const catEl = document.createElement("div");
    catEl.className = "tool-category";
    catEl.textContent = tool.category;

    const tagsEl = document.createElement("div");
    tagsEl.className = "tool-tags";
    const tag = document.createElement("span");
    tag.className = "tool-tag " + tool.group;
    tag.textContent =
      tool.group === "text" ? "Text" : tool.group === "image" ? "Image" : "Dev";
    tagsEl.appendChild(tag);

    li.appendChild(nameEl);
    li.appendChild(catEl);
    li.appendChild(tagsEl);

    li.addEventListener("click", () => {
      currentTool = tool;
      showTool(tool);
      highlightActiveItem();
    });

    list.appendChild(li);
  });
}

function highlightActiveItem() {
  const items = document.querySelectorAll(".tool-item");
  items.forEach((el) => {
    el.classList.remove("active");
    const name = el.querySelector(".tool-name")?.textContent || "";
    const tool = TOOLS.find((t) => t.name === name);
    if (tool && currentTool && tool.id === currentTool.id) {
      el.classList.add("active");
    }
  });
}

// =====================
// MAIN TOOL RENDER
// =====================

function showTool(tool) {
  const container = document.getElementById("toolDetails");
  container.innerHTML = "";

  const title = document.createElement("h2");
  title.textContent = tool.name;

  const desc = document.createElement("p");
  desc.textContent = `${tool.category} • ${tool.group.toUpperCase()} tool`;

  container.appendChild(title);
  container.appendChild(desc);

  if (tool.group === "image") {
    renderImageToolUI(container, tool);
  } else {
    renderTextToolUI(container, tool);
  }
}

// Text + Dev UI
function renderTextToolUI(container, tool) {
  const labelInput = document.createElement("label");
  labelInput.className = "label";
  labelInput.textContent =
    tool.group === "dev"
      ? "Input (paste your JSON / code / data here)"
      : "Input";

  const input = document.createElement("textarea");
  input.id = "inputText";
  input.className = "textarea";

  const actions = document.createElement("div");
  actions.className = "actions";

  const runBtn = document.createElement("button");
  runBtn.className = "btn";
  runBtn.textContent = "Run Tool";
  runBtn.addEventListener("click", runCurrentTool);

  const swapBtn = document.createElement("button");
  swapBtn.className = "btn secondary";
  swapBtn.textContent = "Swap (Output → Input)";
  swapBtn.addEventListener("click", () => {
    const out = document.getElementById("outputText");
    if (out && out.value) input.value = out.value;
  });

  actions.appendChild(runBtn);
  actions.appendChild(swapBtn);

  const info = document.createElement("div");
  info.id = "resultInfo";
  info.className = "label";
  info.style.marginTop = "4px";

  const labelOutput = document.createElement("label");
  labelOutput.className = "label";
  labelOutput.textContent = "Output";

  const output = document.createElement("textarea");
  output.id = "outputText";
  output.className = "textarea";
  output.readOnly = true;

  const copyRow = document.createElement("div");
  copyRow.className = "actions";

  const copyBtn = document.createElement("button");
  copyBtn.className = "btn secondary";
  copyBtn.textContent = "Copy Output";
  copyBtn.addEventListener("click", () => {
    if (!output.value) return;
    navigator.clipboard.writeText(output.value).then(
      () => (info.textContent = "✅ Output copied to clipboard."),
      () => (info.textContent = "❌ Copy blocked by browser.")
    );
  });

  copyRow.appendChild(copyBtn);

  container.appendChild(labelInput);
  container.appendChild(input);
  container.appendChild(actions);
  container.appendChild(info);
  container.appendChild(labelOutput);
  container.appendChild(output);
  container.appendChild(copyRow);
}

// Image UI
function renderImageToolUI(container, tool) {
  imageCanvas = null;
  imageCtx = null;
  imageLoaded = false;

  const label = document.createElement("label");
  label.className = "label";
  label.textContent = "Upload image";

  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";

  const uploadWrap = document.createElement("div");
  uploadWrap.style.marginBottom = "10px";
  uploadWrap.appendChild(label);
  uploadWrap.appendChild(fileInput);

  const actions = document.createElement("div");
  actions.className = "actions";

  const applyBtn = document.createElement("button");
  applyBtn.className = "btn";
  applyBtn.textContent =
    tool.action === "downloadPng" || tool.action === "downloadJpg"
      ? "Download"
      : "Apply Tool";

  const resetBtn = document.createElement("button");
  resetBtn.className = "btn secondary";
  resetBtn.textContent = "Reset";

  actions.appendChild(applyBtn);
  actions.appendChild(resetBtn);

  const info = document.createElement("div");
  info.id = "resultInfo";
  info.className = "label";
  info.style.marginTop = "4px";

  const canvasWrap = document.createElement("div");
  canvasWrap.className = "image-canvas-wrapper";

  const canvas = document.createElement("canvas");
  canvasWrap.appendChild(canvas);

  imageCanvas = canvas;
  imageCtx = canvas.getContext("2d");

  fileInput.addEventListener("change", () => {
    const file = fileInput.files && fileInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const maxW = 900;
        const ratio = img.width > maxW ? maxW / img.width : 1;
        const w = img.width * ratio;
        const h = img.height * ratio;
        imageCanvas.width = w;
        imageCanvas.height = h;
        imageCtx.clearRect(0, 0, w, h);
        imageCtx.drawImage(img, 0, 0, w, h);
        imageLoaded = true;
        info.textContent = "✅ Image loaded.";
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });

  applyBtn.addEventListener("click", () => {
    runImageTool(tool, info);
  });

  resetBtn.addEventListener("click", () => {
    // Simple: clear and ask user to re-upload
    if (!imageCanvas) return;
    imageCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
    imageLoaded = false;
    info.textContent = "Canvas cleared. Re-upload an image.";
  });

  container.appendChild(uploadWrap);
  container.appendChild(actions);
  container.appendChild(info);
  container.appendChild(canvasWrap);
}

// =====================
// RUN TEXT / DEV TOOLS
// =====================

function runCurrentTool() {
  if (!currentTool) return;
  if (currentTool.group === "image") return; // image handled via its own button

  const inputEl = document.getElementById("inputText");
  const outputEl = document.getElementById("outputText");
  const infoEl = document.getElementById("resultInfo");

  const text = (inputEl.value || "").toString();
  let result = "";
  let info = "";

  try {
    if (currentTool.group === "text") {
      ({ result, info } = runTextAction(currentTool.action, text));
    } else if (currentTool.group === "dev") {
      ({ result, info } = runDevAction(currentTool.action, text));
    } else {
      result = text;
      info = "Unknown group.";
    }

    outputEl.value = result;
    infoEl.textContent = info || "Done.";
  } catch (err) {
    outputEl.value = "";
    infoEl.textContent = "❌ Error: " + err.message;
  }
}

// ---- TEXT ACTIONS ----

function runTextAction(action, text) {
  let result = "";
  let info = "";

  switch (action) {
    case "uppercase":
      result = text.toUpperCase();
      break;
    case "lowercase":
      result = text.toLowerCase();
      break;
    case "titlecase":
      result = toTitleCase(text);
      break;
    case "sentencecase":
      result = toSentenceCase(text);
      break;
    case "invertcase":
      result = invertCase(text);
      break;
    case "alternating":
      result = alternatingCase(text);
      break;

    case "removeExtraSpaces":
      result = text.replace(/\s+/g, " ").trim();
      break;
    case "trim":
      result = text.trim();
      break;
    case "trimLines":
      result = text
        .split("\n")
        .map((l) => l.trim())
        .join("\n");
      break;
    case "removeEmptyLines":
      result = text
        .split("\n")
        .filter((l) => l.trim() !== "")
        .join("\n");
      break;
    case "sortLinesAZ":
      result = text
        .split("\n")
        .sort((a, b) => a.localeCompare(b))
        .join("\n");
      break;
    case "sortLinesZA":
      result = text
        .split("\n")
        .sort((a, b) => b.localeCompare(a))
        .join("\n");
      break;
    case "reverseLines":
      result = text.split("\n").reverse().join("\n");
      break;

    case "reverseText":
      result = text.split("").reverse().join("");
      break;
    case "reverseWords":
      result = text
        .split(/\s+/)
        .map((w) => w.split("").reverse().join(""))
        .join(" ");
      break;

    case "addLineNumbers":
      result = text
        .split("\n")
        .map((l, i) => `${i + 1}. ${l}`)
        .join("\n");
      break;

    case "findReplace": {
      const search = prompt("Text to find:");
      if (!search) {
        result = text;
        break;
      }
      const replacement = prompt("Replace with:", "") ?? "";
      const re = new RegExp(escapeRegExp(search), "g");
      result = text.replace(re, replacement);
      break;
    }

    case "wordCount": {
      const words = getWords(text);
      result = `Words: ${words.length}`;
      break;
    }
    case "charCount": {
      const withSpaces = text.length;
      const withoutSpaces = text.replace(/\s/g, "").length;
      result =
        `Characters (with spaces): ${withSpaces}\n` +
        `Characters (without spaces): ${withoutSpaces}`;
      break;
    }
    case "lineCount": {
      const lines = text ? text.split("\n").length : 0;
      result = `Lines: ${lines}`;
      break;
    }
    case "paragraphCount": {
      const paras = text
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter((p) => p).length;
      result = `Paragraphs: ${paras}`;
      break;
    }
    case "readingTime": {
      const words = getWords(text).length;
      const mins = Math.max(1, Math.round(words / 200));
      result = `Words: ${words}\nApprox reading time: ${mins} minute(s).`;
      break;
    }

    case "removePunctuation":
      result = text.replace(/[^\w\s]|_/g, "");
      break;
    case "keepNumbers":
      result = text.replace(/[^0-9]/g, "");
      break;
    case "removeNumbers":
      result = text.replace(/[0-9]/g, "");
      break;

    case "slug":
      result = wordsFromText(text)
        .join("-")
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, "")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
      break;
    case "snake":
      result = wordsFromText(text)
        .join("_")
        .toLowerCase()
        .replace(/[^a-z0-9_]/g, "")
        .replace(/_+/g, "_")
        .replace(/^_|_$/g, "");
      break;
    case "kebab":
      result = wordsFromText(text)
        .join("-")
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, "")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
      break;
    case "camel": {
      const words = wordsFromText(text);
      result = words
        .map((w, i) => {
          const lower = w.toLowerCase();
          return i === 0
            ? lower
            : lower.charAt(0).toUpperCase() + lower.slice(1);
        })
        .join("");
      break;
    }
    case "pascal": {
      const words = wordsFromText(text);
      result = words
        .map((w) => {
          const lower = w.toLowerCase();
          return lower.charAt(0).toUpperCase() + lower.slice(1);
        })
        .join("");
      break;
    }
    case "hashtags": {
      const words = Array.from(new Set(wordsFromText(text)));
      result = words.map((w) => "#" + w.toLowerCase()).join(" ");
      break;
    }

    case "emailExtract": {
      const matches = text.match(
        /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g
      );
      if (!matches) {
        result = "No emails found.";
      } else {
        const unique = Array.from(new Set(matches));
        result = unique.join("\n");
        info = `Found ${unique.length} unique email(s).`;
      }
      break;
    }
    case "urlExtract": {
      const matches = text.match(/https?:\/\/[^\s]+/g);
      if (!matches) {
        result = "No URLs found.";
      } else {
        const unique = Array.from(new Set(matches));
        result = unique.join("\n");
        info = `Found ${unique.length} unique URL(s).`;
      }
      break;
    }

    case "b64Encode":
      result = btoa(unescape(encodeURIComponent(text)));
      break;
    case "b64Decode":
      result = decodeURIComponent(escape(atob(text)));
      break;
    case "urlEncode":
      result = encodeURIComponent(text);
      break;
    case "urlDecode":
      result = decodeURIComponent(text);
      break;

    case "jsonPretty": {
      if (!text.trim()) {
        result = "";
        break;
      }
      const obj = JSON.parse(text);
      result = JSON.stringify(obj, null, 2);
      break;
    }
    case "jsonMinify": {
      if (!text.trim()) {
        result = "";
        break;
      }
      const obj = JSON.parse(text);
      result = JSON.stringify(obj);
      break;
    }

    case "lorem":
      result = generateLoremIpsum();
      break;
    case "password":
      result = generateRandomPassword();
      break;

    default:
      result = text;
      info = "Basic passthrough (no extra transform).";
      break;
  }

  return { result, info };
}

// ---- DEV ACTIONS ----

function runDevAction(action, text) {
  let result = "";
  let info = "";

  switch (action) {
    case "jsonValidate": {
      if (!text.trim()) {
        result = "Empty input.";
        break;
      }
      try {
        JSON.parse(text);
        result = "✅ Valid JSON.";
      } catch (e) {
        result = "❌ Invalid JSON.\n\n" + e.message;
      }
      break;
    }

    case "jsonPretty": {
      if (!text.trim()) break;
      const obj = JSON.parse(text);
      result = JSON.stringify(obj, null, 2);
      break;
    }

    case "jsonMinify": {
      if (!text.trim()) break;
      const obj = JSON.parse(text);
      result = JSON.stringify(obj);
      break;
    }

    case "jsonToCsv": {
      if (!text.trim()) break;
      const arr = JSON.parse(text);
      if (!Array.isArray(arr) || arr.length === 0) {
        result = "Input must be a non-empty JSON array of objects.";
        break;
      }
      const keys = Array.from(
        new Set(arr.flatMap((o) => Object.keys(o || {})))
      );
      const lines = [];
      lines.push(keys.join(","));
      for (const obj of arr) {
        const row = keys
          .map((k) => {
            const val = obj && obj[k] !== undefined ? obj[k] : "";
            const str = String(val).replace(/"/g, '""');
            return `"${str}"`;
          })
          .join(",");
        lines.push(row);
      }
      result = lines.join("\n");
      break;
    }

    case "csvToJson": {
      if (!text.trim()) break;
      const lines = text.split(/\r?\n/).filter((l) => l.trim());
      if (lines.length < 2) {
        result = "CSV must have header + at least one row.";
        break;
      }
      const headers = lines[0].split(",").map((h) => h.replace(/^"|"$/g, ""));
      const rows = lines.slice(1).map((line) => {
        const cols = line.split(",").map((c) => c.replace(/^"|"$/g, ""));
        const obj = {};
        headers.forEach((h, i) => {
          obj[h] = cols[i] ?? "";
        });
        return obj;
      });
      result = JSON.stringify(rows, null, 2);
      break;
    }

    case "xmlPretty":
      result = formatXml(text);
      break;

    case "xmlMinify":
      result = text.replace(/>\s+</g, "><").trim();
      break;

    case "b64Encode":
      result = btoa(unescape(encodeURIComponent(text)));
      break;

    case "b64Decode":
      result = decodeURIComponent(escape(atob(text)));
      break;

    case "urlEncode":
      result = encodeURIComponent(text);
      break;

    case "urlDecode":
      result = decodeURIComponent(text);
      break;

    case "htmlEscape":
      result = encodeHtmlEntities(text);
      break;

    case "htmlUnescape":
      result = decodeHtmlEntities(text);
      break;

    case "jwtDecode": {
      const parts = text.split(".");
      if (parts.length < 2) {
        result = "Invalid JWT: should be header.payload[.signature]";
        break;
      }
      const [h, p] = parts;
      try {
        const header = JSON.parse(
          decodeURIComponent(
            escape(atob(h.replace(/-/g, "+").replace(/_/g, "/")))
          )
        );
        const payload = JSON.parse(
          decodeURIComponent(
            escape(atob(p.replace(/-/g, "+").replace(/_/g, "/")))
          )
        );
        result =
          "Header:\n" +
          JSON.stringify(header, null, 2) +
          "\n\nPayload:\n" +
          JSON.stringify(payload, null, 2);
      } catch (e) {
        result = "Failed to decode JWT.\n\n" + e.message;
      }
      break;
    }

    case "uuid":
      result = crypto.randomUUID ? crypto.randomUUID() : fallbackUUID();
      break;

    case "randomString": {
      const len = parseInt(prompt("Length?", "16") || "16", 10) || 16;
      const chars =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let out = "";
      for (let i = 0; i < len; i++) {
        out += chars[Math.floor(Math.random() * chars.length)];
      }
      result = out;
      break;
    }

    case "apiKey": {
      const chars =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_";
      let out = "";
      for (let i = 0; i < 40; i++) {
        out += chars[Math.floor(Math.random() * chars.length)];
      }
      result = out;
      break;
    }

    case "robots":
      result =
        "User-agent: *\n" +
        "Disallow:\n\n" +
        "# Add Disallow: /path lines if needed.\n";
      break;

    case "sitemap": {
      const urls = getWords(text).filter((u) => u.startsWith("http"));
      const entries = urls
        .map((u) => `<url><loc>${u}</loc></url>`)
        .join("\n");
      result =
        `<?xml version="1.0" encoding="UTF-8"?>\n` +
        `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
        entries +
        `\n</urlset>`;
      break;
    }

    case "metaTags": {
      const title = prompt("Page title:", "My awesome page") || "";
      const desc = prompt("Description:", "Short description") || "";
      const url = prompt("Canonical URL:", "https://example.com") || "";
      result =
        `<title>${title}</title>\n` +
        `<meta name="description" content="${desc}" />\n` +
        `<link rel="canonical" href="${url}" />\n`;
      break;
    }

    case "ogTags": {
      const title = prompt("OG title:", "My page") || "";
      const desc = prompt("OG description:", "Description here") || "";
      const url = prompt("URL:", "https://example.com") || "";
      const img =
        prompt("Image URL:", "https://example.com/image.jpg") || "";
      result =
        `<meta property="og:title" content="${title}" />\n` +
        `<meta property="og:description" content="${desc}" />\n` +
        `<meta property="og:url" content="${url}" />\n` +
        `<meta property="og:image" content="${img}" />\n`;
      break;
    }

    case "regexTest": {
      const pattern = prompt("Regex pattern (without / /):", "\\d+");
      if (pattern == null) {
        result = text;
        break;
      }
      const flags = prompt("Flags (e.g. gi):", "g") || "g";
      const re = new RegExp(pattern, flags);
      const matches = text.match(re);
      if (!matches) {
        result = "No matches.";
      } else {
        result = matches.join("\n");
        info = `Found ${matches.length} matches.`;
      }
      break;
    }

    case "diff": {
      const other = prompt("Paste second text to compare:", "");
      if (other == null) {
        result = text;
        break;
      }
      const a = text.split("\n");
      const b = other.split("\n");
      const len = Math.max(a.length, b.length);
      const out = [];
      for (let i = 0; i < len; i++) {
        const left = a[i] ?? "";
        const right = b[i] ?? "";
        if (left === right) {
          out.push(`  ${left}`);
        } else {
          if (left) out.push(`- ${left}`);
          if (right) out.push(`+ ${right}`);
        }
      }
      result = out.join("\n");
      info = "Simple line-by-line diff.";
      break;
    }

    case "urlParse": {
      try {
        const u = new URL(text.trim());
        result =
          `Protocol: ${u.protocol}\n` +
          `Host: ${u.host}\n` +
          `Hostname: ${u.hostname}\n` +
          `Port: ${u.port || "(default)"}\n` +
          `Pathname: ${u.pathname}\n` +
          `Search: ${u.search}\n` +
          `Hash: ${u.hash}\n`;
      } catch {
        result =
          "Invalid URL. Example: https://example.com/path?query=1#hash";
      }
      break;
    }

    case "queryParse": {
      let qs = text.trim();
      if (qs.startsWith("?")) qs = qs.slice(1);
      const params = new URLSearchParams(qs);
      const obj = {};
      params.forEach((v, k) => {
        if (obj[k] === undefined) obj[k] = v;
        else if (Array.isArray(obj[k])) obj[k].push(v);
        else obj[k] = [obj[k], v];
      });
      result = JSON.stringify(obj, null, 2);
      break;
    }

    case "ipExtract": {
      const matches = text.match(
        /\b(?:(?:25[0-5]|2[0-4]\d|1?\d?\d)(?:\.(?!$)|$)){4}\b/g
      );
      if (!matches) {
        result = "No IPv4 addresses found.";
      } else {
        const unique = Array.from(new Set(matches));
        result = unique.join("\n");
        info = `Found ${unique.length} unique IP(s).`;
      }
      break;
    }

    default:
      // fallback: reuse text transformation where possible
      ({ result, info } = runTextAction(action, text));
      if (!info) {
        info =
          "Basic dev fallback using text action (you can extend this case later).";
      }
      break;
  }

  return { result, info };
}

// =====================
// IMAGE TOOL LOGIC
// =====================

function runImageTool(tool, infoEl) {
  if (!imageCanvas || !imageCtx) {
    infoEl.textContent = "❌ Canvas not ready.";
    return;
  }
  if (!imageLoaded && !["downloadPng", "downloadJpg"].includes(tool.action)) {
    infoEl.textContent = "Upload an image first.";
    return;
  }

  switch (tool.action) {
    case "resize": {
      const wStr = prompt(
        "New width (px):",
        imageCanvas.width.toString()
      );
      const hStr = prompt(
        "New height (px):",
        imageCanvas.height.toString()
      );
      const w = parseInt(wStr || "", 10);
      const h = parseInt(hStr || "", 10);
      if (!w || !h) {
        infoEl.textContent = "Invalid width/height.";
        return;
      }
      const temp = document.createElement("canvas");
      temp.width = w;
      temp.height = h;
      const tctx = temp.getContext("2d");
      tctx.drawImage(imageCanvas, 0, 0, w, h);
      imageCanvas.width = w;
      imageCanvas.height = h;
      imageCtx.drawImage(temp, 0, 0);
      infoEl.textContent = `✅ Resized to ${w}×${h}.`;
      break;
    }

    case "rotate90":
    case "rotate180":
    case "rotate270": {
      const angleMap = { rotate90: 90, rotate180: 180, rotate270: 270 };
      const deg = angleMap[tool.action];
      rotateCanvas(deg);
      infoEl.textContent = `✅ Rotated ${deg}°.`;
      break;
    }

    case "flipH": {
      const w = imageCanvas.width;
      const h = imageCanvas.height;
      const temp = document.createElement("canvas");
      temp.width = w;
      temp.height = h;
      const tctx = temp.getContext("2d");
      tctx.translate(w, 0);
      tctx.scale(-1, 1);
      tctx.drawImage(imageCanvas, 0, 0);
      imageCtx.clearRect(0, 0, w, h);
      imageCtx.drawImage(temp, 0, 0);
      infoEl.textContent = "✅ Flipped horizontally.";
      break;
    }

    case "flipV": {
      const w = imageCanvas.width;
      const h = imageCanvas.height;
      const temp = document.createElement("canvas");
      temp.width = w;
      temp.height = h;
      const tctx = temp.getContext("2d");
      tctx.translate(0, h);
      tctx.scale(1, -1);
      tctx.drawImage(imageCanvas, 0, 0);
      imageCtx.clearRect(0, 0, w, h);
      imageCtx.drawImage(temp, 0, 0);
      infoEl.textContent = "✅ Flipped vertically.";
      break;
    }

    case "grayscale":
      applyPixelFilter((r, g, b, a) => {
        const gray = 0.3 * r + 0.59 * g + 0.11 * b;
        return [gray, gray, gray, a];
      });
      infoEl.textContent = "✅ Applied grayscale.";
      break;

    case "invert":
      applyPixelFilter((r, g, b, a) => [255 - r, 255 - g, 255 - b, a]);
      infoEl.textContent = "✅ Inverted colors.";
      break;

    case "sepia":
      applyPixelFilter((r, g, b, a) => {
        const nr = 0.393 * r + 0.769 * g + 0.189 * b;
        const ng = 0.349 * r + 0.686 * g + 0.168 * b;
        const nb = 0.272 * r + 0.534 * g + 0.131 * b;
        return [nr, ng, nb, a];
      });
      infoEl.textContent = "✅ Applied sepia.";
      break;

    case "brightnessUp":
      applyPixelFilter((r, g, b, a) => [
        clamp(r + 20),
        clamp(g + 20),
        clamp(b + 20),
        a
      ]);
      infoEl.textContent = "✅ Brightness increased.";
      break;
    case "brightnessDown":
      applyPixelFilter((r, g, b, a) => [
        clamp(r - 20),
        clamp(g - 20),
        clamp(b - 20),
        a
      ]);
      infoEl.textContent = "✅ Brightness decreased.";
      break;
    case "contrastUp":
      adjustContrast(1.1);
      infoEl.textContent = "✅ Contrast slightly increased.";
      break;
    case "contrastDown":
      adjustContrast(0.9);
      infoEl.textContent = "✅ Contrast slightly decreased.";
      break;

    case "blur":
      // using canvas filter for simplicity
      applyCanvasFilter("blur(2px)");
      infoEl.textContent = "✅ Applied blur.";
      break;

    case "pixelate":
      pixelate(6);
      infoEl.textContent = "✅ Applied pixelate effect.";
      break;

    case "border":
      drawBorder();
      infoEl.textContent = "✅ Added simple border.";
      break;

    case "circle":
      circleCrop();
      infoEl.textContent = "✅ Circle crop (transparent corners).";
      break;

    case "downloadPng":
      downloadCanvas("gttools-image.png", "image/png", infoEl);
      break;

    case "downloadJpg":
      downloadCanvas("gttools-image.jpg", "image/jpeg", infoEl);
      break;

    default:
      applyPixelFilter((r, g, b, a) => {
        const gray = 0.3 * r + 0.59 * g + 0.11 * b;
        return [gray, gray, gray, a];
      });
      infoEl.textContent =
        "✅ Basic grayscale applied (default image effect).";
      break;
  }
}

// Helpers for canvas

function rotateCanvas(deg) {
  const rad = (deg * Math.PI) / 180;
  const w = imageCanvas.width;
  const h = imageCanvas.height;
  const temp = document.createElement("canvas");
  const tctx = temp.getContext("2d");

  if (deg === 180) {
    temp.width = w;
    temp.height = h;
  } else {
    temp.width = h;
    temp.height = w;
  }

  tctx.translate(temp.width / 2, temp.height / 2);
  tctx.rotate(rad);
  tctx.drawImage(imageCanvas, -w / 2, -h / 2);

  imageCanvas.width = temp.width;
  imageCanvas.height = temp.height;
  imageCtx.clearRect(0, 0, temp.width, temp.height);
  imageCtx.drawImage(temp, 0, 0);
}

function applyPixelFilter(fn) {
  const w = imageCanvas.width;
  const h = imageCanvas.height;
  const imgData = imageCtx.getImageData(0, 0, w, h);
  const d = imgData.data;
  for (let i = 0; i < d.length; i += 4) {
    const [nr, ng, nb, na] = fn(d[i], d[i + 1], d[i + 2], d[i + 3]);
    d[i] = clamp(nr);
    d[i + 1] = clamp(ng);
    d[i + 2] = clamp(nb);
    d[i + 3] = clamp(na);
  }
  imageCtx.putImageData(imgData, 0, 0);
}

function adjustContrast(factor) {
  const w = imageCanvas.width;
  const h = imageCanvas.height;
  const imgData = imageCtx.getImageData(0, 0, w, h);
  const d = imgData.data;
  const c = factor;
  const intercept = 128 * (1 - c);
  for (let i = 0; i < d.length; i += 4) {
    d[i] = clamp(d[i] * c + intercept);
    d[i + 1] = clamp(d[i + 1] * c + intercept);
    d[i + 2] = clamp(d[i + 2] * c + intercept);
  }
  imageCtx.putImageData(imgData, 0, 0);
}

function applyCanvasFilter(filter) {
  const w = imageCanvas.width;
  const h = imageCanvas.height;
  const temp = document.createElement("canvas");
  temp.width = w;
  temp.height = h;
  const tctx = temp.getContext("2d");
  tctx.drawImage(imageCanvas, 0, 0);

  imageCtx.clearRect(0, 0, w, h);
  imageCtx.filter = filter;
  imageCtx.drawImage(temp, 0, 0);
  imageCtx.filter = "none";
}

function pixelate(size) {
  const w = imageCanvas.width;
  const h = imageCanvas.height;
  const temp = document.createElement("canvas");
  temp.width = Math.ceil(w / size);
  temp.height = Math.ceil(h / size);
  const tctx = temp.getContext("2d");
  tctx.imageSmoothingEnabled = false;
  tctx.drawImage(imageCanvas, 0, 0, temp.width, temp.height);
  imageCtx.imageSmoothingEnabled = false;
  imageCtx.clearRect(0, 0, w, h);
  imageCtx.drawImage(temp, 0, 0, temp.width, temp.height, 0, 0, w, h);
  imageCtx.imageSmoothingEnabled = true;
}

function drawBorder() {
  const w = imageCanvas.width;
  const h = imageCanvas.height;
  imageCtx.lineWidth = 10;
  imageCtx.strokeStyle = "white";
  imageCtx.strokeRect(5, 5, w - 10, h - 10);
}

function circleCrop() {
  const w = imageCanvas.width;
  const h = imageCanvas.height;
  const radius = Math.min(w, h) / 2;
  const temp = document.createElement("canvas");
  temp.width = w;
  temp.height = h;
  const tctx = temp.getContext("2d");
  tctx.save();
  tctx.beginPath();
  tctx.arc(w / 2, h / 2, radius, 0, Math.PI * 2);
  tctx.closePath();
  tctx.clip();
  tctx.drawImage(imageCanvas, 0, 0);
  tctx.restore();

  imageCtx.clearRect(0, 0, w, h);
  imageCtx.drawImage(temp, 0, 0);
}

function downloadCanvas(filename, mime, infoEl) {
  if (!imageCanvas) {
    infoEl.textContent = "No canvas to download.";
    return;
  }
  const link = document.createElement("a");
  link.href = imageCanvas.toDataURL(mime);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  infoEl.textContent = "✅ Download started.";
}

// =====================
// GENERIC HELPERS
// =====================

function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(/\s+/)
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : ""))
    .join(" ");
}

function toSentenceCase(str) {
  const lower = str.toLowerCase();
  return lower.replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
}

function invertCase(str) {
  return Array.from(str)
    .map((ch) => {
      if (ch >= "a" && ch <= "z") return ch.toUpperCase();
      if (ch >= "A" && ch <= "Z") return ch.toLowerCase();
      return ch;
    })
    .join("");
}

function alternatingCase(str) {
  let upper = true;
  return Array.from(str)
    .map((ch) => {
      if (/[a-zA-Z]/.test(ch)) {
        const res = upper ? ch.toUpperCase() : ch.toLowerCase();
        upper = !upper;
        return res;
      }
      return ch;
    })
    .join("");
}

function getWords(str) {
  return str
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0);
}

function wordsFromText(str) {
  return str
    .toLowerCase()
    .split(/[^a-zA-Z0-9]+/)
    .filter((w) => w.length > 0);
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function encodeHtmlEntities(str) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  };
  return str.replace(/[&<>"']/g, (ch) => map[ch]);
}

function decodeHtmlEntities(str) {
  const txt = document.createElement("textarea");
  txt.innerHTML = str;
  return txt.value;
}

function generateLoremIpsum() {
  const paras = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a dui est. Nunc suscipit, lorem quis finibus egestas, nunc orci suscipit nisl, sed facilisis orci lectus id metus.",
    "Suspendisse potenti. Mauris elementum, sem at dapibus efficitur, velit ligula blandit massa, a fermentum ex lacus et magna. Aliquam erat volutpat.",
    "Curabitur egestas, nunc non sagittis gravida, tortor risus commodo arcu, non interdum nulla purus nec neque. Donec tortor turpis, viverra in ornare eget, rhoncus non magna."
  ];
  return paras.join("\n\n");
}

function generateRandomPassword() {
  const length = 14;
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{};:,.<>?";
  let pass = "";
  for (let i = 0; i < length; i++) {
    pass += chars[Math.floor(Math.random() * chars.length)];
  }
  return pass;
}

function fallbackUUID() {
  let d = new Date().getTime();
  if (typeof performance !== "undefined" && typeof performance.now === "function") {
    d += performance.now();
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

function formatXml(xml) {
  if (!xml.trim()) return "";
  let formatted = "";
  const reg = /(>)(<)(\/*)/g;
  xml = xml.replace(reg, "$1\r\n$2$3");
  let pad = 0;
  xml.split("\r\n").forEach((node) => {
    let indent = 0;
    if (node.match(/.+<\/\w[^>]*>$/)) {
      indent = 0;
    } else if (node.match(/^<\/\w/)) {
      if (pad !== 0) pad -= 1;
    } else if (node.match(/^<\w[^>]*[^/]>.*$/)) {
      indent = 1;
    }
    const padding = new Array(pad + 1).join("  ");
    formatted += padding + node + "\r\n";
    pad += indent;
  });
  return formatted.trim();
}

function clamp(v) {
  return Math.max(0, Math.min(255, v));
}

