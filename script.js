// ============================
// GTTOOLS – 100 Tools Version
// ============================

// ---- TOOL DEFINITIONS (METADATA) ----

// Text tools (high-usage)
const TEXT_TOOLS = [
  { id: "word-count", name: "Word Counter", category: "Text / Stats", group: "text", action: "wordCount" },
  { id: "char-count", name: "Character Counter", category: "Text / Stats", group: "text", action: "charCount" },
  { id: "remove-extra-spaces", name: "Remove Extra Spaces", category: "Clean", group: "text", action: "removeExtraSpaces" },
  { id: "remove-line-breaks", name: "Remove Line Breaks", category: "Clean", group: "text", action: "removeLineBreaks" },
  { id: "remove-empty-lines", name: "Remove Empty Lines", category: "Clean", group: "text", action: "removeEmptyLines" },
  { id: "sort-lines-az", name: "Sort Lines A→Z", category: "Lines", group: "text", action: "sortLinesAZ" },
  { id: "sort-lines-za", name: "Sort Lines Z→A", category: "Lines", group: "text", action: "sortLinesZA" },
  { id: "uppercase", name: "Uppercase Converter", category: "Case", group: "text", action: "uppercase" },
  { id: "lowercase", name: "Lowercase Converter", category: "Case", group: "text", action: "lowercase" },
  { id: "titlecase", name: "Title Case Converter", category: "Case", group: "text", action: "titlecase" },
  { id: "sentencecase", name: "Sentence Case Converter", category: "Case", group: "text", action: "sentencecase" },
  { id: "reverse-text", name: "Reverse Text", category: "Reverse", group: "text", action: "reverseText" },
  { id: "find-replace", name: "Find & Replace", category: "Text", group: "text", action: "findReplace" },
  { id: "add-line-numbers", name: "Add Line Numbers", category: "Lines", group: "text", action: "addLineNumbers" },
  { id: "merge-lines", name: "Merge Lines", category: "Lines", group: "text", action: "mergeLines" },
  { id: "email-extractor", name: "Email Extractor", category: "Extract", group: "text", action: "emailExtract" },
  { id: "url-extractor", name: "URL Extractor", category: "Extract", group: "text", action: "urlExtract" },
  { id: "number-extractor", name: "Number Extractor", category: "Extract", group: "text", action: "numberExtract" },
  { id: "hashtag-generator", name: "Hashtag Generator", category: "Social", group: "text", action: "hashtags" },
  { id: "slug-generator", name: "Slug Generator", category: "SEO", group: "text", action: "slug" },
  { id: "random-password", name: "Random Password Generator", category: "Generator", group: "text", action: "password" },
  { id: "lorem-ipsum", name: "Lorem Ipsum Generator", category: "Generator", group: "text", action: "lorem" },
  { id: "text-to-binary", name: "Text → Binary", category: "Convert", group: "text", action: "textToBinary" },
  { id: "binary-to-text", name: "Binary → Text", category: "Convert", group: "text", action: "binaryToText" },
  { id: "reading-time", name: "Reading Time Calculator", category: "Stats", group: "text", action: "readingTime" }
];

// Image tools (frontend-only)
const IMAGE_TOOLS = [
  { id: "img-resize", name: "Image Resize", category: "Image", group: "image", action: "resize" },
  { id: "img-compress-placeholder", name: "Image Compress (Simple)", category: "Image", group: "image", action: "imgCompressPlaceholder" },
  { id: "img-crop-placeholder", name: "Image Crop (Basic)", category: "Image", group: "image", action: "imgCropPlaceholder" },
  { id: "img-rotate", name: "Rotate 90°", category: "Image", group: "image", action: "rotate90" },
  { id: "img-flip-h", name: "Flip Horizontal", category: "Image", group: "image", action: "flipH" },
  { id: "img-flip-v", name: "Flip Vertical", category: "Image", group: "image", action: "flipV" },
  { id: "img-grayscale", name: "Grayscale", category: "Filter", group: "image", action: "grayscale" },
  { id: "img-invert", name: "Invert Colors", category: "Filter", group: "image", action: "invert" },
  { id: "img-sepia", name: "Sepia Filter", category: "Filter", group: "image", action: "sepia" },
  { id: "img-blur", name: "Blur Image", category: "Filter", group: "image", action: "blur" },
  { id: "img-pixelate", name: "Pixelate Image", category: "Filter", group: "image", action: "pixelate" },
  { id: "img-brightness+", name: "Brightness +", category: "Adjust", group: "image", action: "brightnessUp" },
  { id: "img-brightness-", name: "Brightness -", category: "Adjust", group: "image", action: "brightnessDown" },
  { id: "img-border", name: "Add Border", category: "Style", group: "image", action: "border" },
  { id: "img-rounded", name: "Rounded Corners", category: "Style", group: "image", action: "roundedCorners" },
  { id: "img-circle", name: "Circle Crop", category: "Style", group: "image", action: "circle" },
  { id: "img-to-base64", name: "Image → Base64 (placeholder)", category: "Convert", group: "image", action: "imgToBase64Placeholder" },
  { id: "base64-to-img", name: "Base64 → Image (placeholder)", category: "Convert", group: "image", action: "base64ToImgPlaceholder" },
  { id: "img-download-png", name: "Download as PNG", category: "Export", group: "image", action: "downloadPng" },
  { id: "img-download-jpg", name: "Download as JPG", category: "Export", group: "image", action: "downloadJpg" }
];

// PDF & file tools (mostly placeholders for now)
const PDF_TOOLS = [
  { id: "jpg-to-pdf", name: "JPG → PDF", category: "PDF Convert", group: "pdf", action: "placeholder" },
  { id: "pdf-to-jpg", name: "PDF → JPG", category: "PDF Convert", group: "pdf", action: "placeholder" },
  { id: "docx-to-pdf", name: "Word (DOCX) → PDF", category: "PDF Convert", group: "pdf", action: "placeholder" },
  { id: "ppt-to-pdf", name: "PPT → PDF", category: "PDF Convert", group: "pdf", action: "placeholder" },
  { id: "excel-to-pdf", name: "Excel → PDF", category: "PDF Convert", group: "pdf", action: "placeholder" },
  { id: "pdf-to-word", name: "PDF → Word", category: "PDF Convert", group: "pdf", action: "placeholder" },
  { id: "pdf-to-text", name: "PDF → Text", category: "PDF Convert", group: "pdf", action: "placeholder" },
  { id: "pdf-split", name: "PDF Splitter", category: "PDF Tools", group: "pdf", action: "placeholder" },
  { id: "pdf-merge", name: "PDF Merger", category: "PDF Tools", group: "pdf", action: "placeholder" },
  { id: "pdf-compress", name: "Compress PDF", category: "PDF Tools", group: "pdf", action: "placeholder" },
  { id: "pdf-unlock", name: "Unlock PDF", category: "PDF Tools", group: "pdf", action: "placeholder" },
  { id: "pdf-protect", name: "Protect PDF (Password)", category: "PDF Tools", group: "pdf", action: "placeholder" },
  { id: "pdf-rotate", name: "Rotate PDF Pages", category: "PDF Tools", group: "pdf", action: "placeholder" },
  { id: "pdf-remove-pages", name: "Remove PDF Pages", category: "PDF Tools", group: "pdf", action: "placeholder" },
  { id: "pdf-metadata", name: "PDF Metadata Viewer", category: "PDF Tools", group: "pdf", action: "placeholder" }
];

// Developer tools (working)
const DEV_TOOLS = [
  { id: "json-formatter", name: "JSON Formatter", category: "JSON", group: "dev", action: "jsonPretty" },
  { id: "json-validator", name: "JSON Validator", category: "JSON", group: "dev", action: "jsonValidate" },
  { id: "json-minify", name: "JSON Minifier", category: "JSON", group: "dev", action: "jsonMinify" },
  { id: "json-viewer", name: "JSON Viewer", category: "JSON", group: "dev", action: "jsonPretty" },
  { id: "json-to-csv", name: "JSON → CSV", category: "Data", group: "dev", action: "jsonToCsv" },
  { id: "csv-to-json", name: "CSV → JSON", category: "Data", group: "dev", action: "csvToJson" },
  { id: "html-beautify", name: "HTML Beautifier", category: "Code", group: "dev", action: "htmlBeautify" },
  { id: "css-beautify", name: "CSS Beautifier", category: "Code", group: "dev", action: "simpleBeautify" },
  { id: "js-beautify", name: "JS Beautifier", category: "Code", group: "dev", action: "simpleBeautify" },
  { id: "html-minify", name: "HTML Minifier", category: "Code", group: "dev", action: "htmlMinify" },
  { id: "css-minify", name: "CSS Minifier", category: "Code", group: "dev", action: "minifyWhitespace" },
  { id: "js-minify", name: "JS Minifier", category: "Code", group: "dev", action: "minifyWhitespace" },
  { id: "regex-tester", name: "Regex Tester", category: "Regex", group: "dev", action: "regexTest" },
  { id: "diff-checker", name: "Diff Checker", category: "Compare", group: "dev", action: "diff" },
  { id: "b64-encode", name: "Base64 Encode", category: "Encode", group: "dev", action: "b64Encode" },
  { id: "b64-decode", name: "Base64 Decode", category: "Encode", group: "dev", action: "b64Decode" },
  { id: "url-encode", name: "URL Encode", category: "Encode", group: "dev", action: "urlEncode" },
  { id: "url-decode", name: "URL Decode", category: "Encode", group: "dev", action: "urlDecode" },
  { id: "html-escape", name: "HTML Escape", category: "HTML", group: "dev", action: "htmlEscape" },
  { id: "html-unescape", name: "HTML Unescape", category: "HTML", group: "dev", action: "htmlUnescape" },
  { id: "uuid", name: "UUID Generator", category: "Security", group: "dev", action: "uuid" },
  { id: "random-string", name: "Random String Generator", category: "Security", group: "dev", action: "randomString" },
  { id: "jwt-decode", name: "JWT Decoder", category: "Security", group: "dev", action: "jwtDecode" },
  { id: "color-convert", name: "Color Converter (HEX↔RGB)", category: "Color", group: "dev", action: "colorConvert" },
  { id: "qr-generate", name: "QR Code Generator (placeholder)", category: "QR", group: "dev", action: "placeholder" }
];

// Utility tools
const UTIL_TOOLS = [
  { id: "unit-converter", name: "Unit Converter (placeholder)", category: "Utility", group: "util", action: "placeholder" },
  { id: "currency-converter", name: "Currency Converter (offline demo)", category: "Utility", group: "util", action: "currencyDemo" },
  { id: "time-zone-converter", name: "Time Zone Converter (placeholder)", category: "Utility", group: "util", action: "placeholder" },
  { id: "epoch-to-time", name: "Epoch → Human Time", category: "Time", group: "util", action: "epochToTime" },
  { id: "time-to-epoch", name: "Human Time → Epoch", category: "Time", group: "util", action: "timeToEpoch" },
  { id: "word-frequency", name: "Word Frequency Counter", category: "Text", group: "util", action: "wordFrequency" },
  { id: "md-to-html", name: "Markdown → HTML", category: "Convert", group: "util", action: "mdToHtml" },
  { id: "html-to-md", name: "HTML → Markdown (basic)", category: "Convert", group: "util", action: "htmlToMdBasic" },
  { id: "text-compare", name: "Text Compare Tool", category: "Compare", group: "util", action: "diff" },
  { id: "emoji-picker", name: "Emoji Extractor", category: "Fun", group: "util", action: "emojiExtract" },
  { id: "fake-data", name: "Fake Data Generator", category: "Dev / Test", group: "util", action: "fakeData" },
  { id: "yt-thumb", name: "YouTube Thumbnail Downloader (info)", category: "Media", group: "util", action: "ytThumbInfo" },
  { id: "insta-dp", name: "Instagram DP Downloader (info)", category: "Media", group: "util", action: "instaDpInfo" },
  { id: "case-converter", name: "Case Converter (multi)", category: "Text", group: "util", action: "caseCombo" },
  { id: "emoji-insert-demo", name: "Emoji Helper (demo list)", category: "Fun", group: "util", action: "emojiHelper" }
];

const TOOLS = [...TEXT_TOOLS, ...IMAGE_TOOLS, ...PDF_TOOLS, ...DEV_TOOLS, ...UTIL_TOOLS];

// ---- STATE ----
let currentTool = null;
let currentGroupFilter = "all";

// Image state
let imageCanvas = null;
let imageCtx = null;
let imageLoaded = false;

// ========================
// INIT
// ========================

document.addEventListener("DOMContentLoaded", () => {
  setupGroupFilters();
  setupSearch();
  renderToolList();
});

// ========================
// SIDEBAR + SEARCH
// ========================

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
    if (currentGroupFilter !== "all" && tool.group !== currentGroupFilter) return;
    if (
      query &&
      !tool.name.toLowerCase().includes(query) &&
      !tool.category.toLowerCase().includes(query)
    ) {
      return;
    }

    const li = document.createElement("li");
    li.className = "tool-item";
    if (currentTool && tool.id === currentTool.id) li.classList.add("active");

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
      tool.group === "text"
        ? "Text"
        : tool.group === "image"
        ? "Image"
        : tool.group === "pdf"
        ? "PDF"
        : tool.group === "dev"
        ? "Dev"
        : "Utility";
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

// ========================
// MAIN TOOL RENDER
// ========================

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

// ---- Text / Dev / PDF / Utility UI ----

function renderTextToolUI(container, tool) {
  const labelInput = document.createElement("label");
  labelInput.className = "label";
  labelInput.textContent =
    tool.group === "dev"
      ? "Input (JSON / code / data):"
      : tool.group === "pdf"
      ? "Input (PDF info / notes / placeholder text):"
      : "Input text:";

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

  if (tool.group === "pdf" || tool.action === "placeholder") {
    info.textContent =
      "ℹ️ Ye advanced conversion tool future upgrade/extra libraries ke liye ready hai. Abhi yaha explanation / notes show honge.";
  }

  const labelOutput = document.createElement("label");
  labelOutput.className = "label";
  labelOutput.textContent = "Output:";

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

// ---- Image UI ----

function renderImageToolUI(container, tool) {
  imageCanvas = null;
  imageCtx = null;
  imageLoaded = false;

  const label = document.createElement("label");
  label.className = "label";
  label.textContent = "Upload image:";

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
  resetBtn.textContent = "Reset Canvas";

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
    if (!imageCanvas) return;
    imageCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
    imageLoaded = false;
    info.textContent = "Canvas cleared. Re-upload to continue.";
  });

  container.appendChild(uploadWrap);
  container.appendChild(actions);
  container.appendChild(info);
  container.appendChild(canvasWrap);
}

// ========================
// RUNNER – TEXT/DEV/PDF/UTIL
// ========================

function runCurrentTool() {
  if (!currentTool) return;
  if (currentTool.group === "image") return; // handled by button

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
    } else if (currentTool.group === "pdf") {
      ({ result, info } = runPdfAction(currentTool, text));
    } else if (currentTool.group === "util") {
      ({ result, info } = runUtilAction(currentTool.action, text));
    } else {
      result = text;
      info = "Basic passthrough.";
    }

    outputEl.value = result;
    infoEl.textContent = info || "Done.";
  } catch (e) {
    outputEl.value = "";
    infoEl.textContent = "❌ Error: " + e.message;
  }
}

// ========================
// TEXT ACTIONS
// ========================

function runTextAction(action, text) {
  let result = "";
  let info = "";

  switch (action) {
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
    case "removeExtraSpaces":
      result = text.replace(/\s+/g, " ").trim();
      break;
    case "removeLineBreaks":
      result = text.replace(/\r?\n|\r/g, " ");
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
    case "reverseText":
      result = text.split("").reverse().join("");
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
    case "addLineNumbers":
      result = text
        .split("\n")
        .map((l, i) => `${i + 1}. ${l}`)
        .join("\n");
      break;
    case "mergeLines":
      result = text.split("\n").join(" ");
      break;

    case "emailExtract": {
      const m = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g);
      if (!m) {
        result = "No emails found.";
      } else {
        const u = Array.from(new Set(m));
        result = u.join("\n");
        info = `Found ${u.length} unique email(s).`;
      }
      break;
    }
    case "urlExtract": {
      const m = text.match(/https?:\/\/[^\s]+/g);
      if (!m) {
        result = "No URLs found.";
      } else {
        const u = Array.from(new Set(m));
        result = u.join("\n");
        info = `Found ${u.length} unique URL(s).`;
      }
      break;
    }
    case "numberExtract": {
      const m = text.match(/\d+(\.\d+)?/g);
      if (!m) {
        result = "No numbers found.";
      } else {
        result = m.join("\n");
        info = `Found ${m.length} numbers.`;
      }
      break;
    }
    case "hashtags": {
      const words = Array.from(new Set(wordsFromText(text)));
      result = words.map((w) => "#" + w.toLowerCase()).join(" ");
      break;
    }
    case "slug":
      result = wordsFromText(text)
        .join("-")
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, "")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
      break;
    case "password":
      result = generateRandomPassword();
      break;
    case "lorem":
      result = generateLoremIpsum();
      break;
    case "textToBinary":
      result = Array.from(text)
        .map((ch) => ch.charCodeAt(0).toString(2).padStart(8, "0"))
        .join(" ");
      break;
    case "binaryToText":
      result = text
        .trim()
        .split(/\s+/)
        .map((bin) =>
          String.fromCharCode(parseInt(bin.replace(/[^01]/g, ""), 2) || 0)
        )
        .join("");
      break;
    case "readingTime": {
      const words = getWords(text).length;
      const mins = Math.max(1, Math.round(words / 200));
      result = `Words: ${words}\nEstimated reading time: ${mins} minute(s).`;
      break;
    }
    default:
      result = text;
      info = "Basic passthrough (no transform).";
      break;
  }

  return { result, info };
}

// ========================
// DEV ACTIONS
// ========================

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

    case "htmlBeautify": {
      result = formatXml(text);
      break;
    }
    case "htmlMinify": {
      result = text.replace(/\n+/g, "").replace(/\s{2,}/g, " ").trim();
      break;
    }
    case "minifyWhitespace": {
      result = text.replace(/\s+/g, " ").trim();
      break;
    }
    case "simpleBeautify": {
      result = text
        .split(";")
        .map((p) => p.trim())
        .filter(Boolean)
        .join(";\n");
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
          out.push("  " + left);
        } else {
          if (left) out.push("- " + left);
          if (right) out.push("+ " + right);
        }
      }
      result = out.join("\n");
      info = "Simple line-by-line diff.";
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
    case "htmlEscape":
      result = encodeHtmlEntities(text);
      break;
    case "htmlUnescape":
      result = decodeHtmlEntities(text);
      break;

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

    case "colorConvert": {
      const val = text.trim();
      if (val.startsWith("#")) {
        const rgb = hexToRgb(val);
        if (!rgb) {
          result = "Invalid HEX color.";
        } else {
          result = `HEX: ${val}\nRGB: ${rgb.r}, ${rgb.g}, ${rgb.b}`;
        }
      } else if (val.toLowerCase().startsWith("rgb")) {
        const rgbMatch = val.match(/(\d+),\s*(\d+),\s*(\d+)/);
        if (!rgbMatch) {
          result = "Invalid RGB input. Example: rgb(255, 0, 0)";
        } else {
          const [r, g, b] = rgbMatch.slice(1).map((n) => parseInt(n, 10));
          result = `RGB: ${r}, ${g}, ${b}\nHEX: ${rgbToHex(r, g, b)}`;
        }
      } else {
        result =
          "Enter either HEX (#ff0000) or RGB format (rgb(255, 0, 0)).";
      }
      break;
    }

    default:
      result = text;
      info =
        "Basic dev fallback (no custom logic). You can extend this action later.";
      break;
  }

  return { result, info };
}

// ========================
// PDF ACTIONS (placeholders)
// ========================

function runPdfAction(tool, text) {
  let result = "";
  let info =
    "⚠️ Ye PDF tool advanced conversion ke liye plan hai. Pure frontend me iske liye extra libraries (pdf.js / jsPDF / DOCX parser) ya backend ki zarurat hogi.";

  result =
    `Tool: ${tool.name}\n\n` +
    "Abhi demo mode me hai. Future me yaha:\n" +
    "- file upload UI\n" +
    "- PDF pages preview\n" +
    "- merge/split/convert buttons\n\n" +
    "Filhaal aap yaha notes / instructions likh sakte ho, ya text output dekh sakte ho.";

  return { result, info };
}

// ========================
// UTILITY ACTIONS
// ========================

function runUtilAction(action, text) {
  let result = "";
  let info = "";

  switch (action) {
    case "placeholder":
      result =
        "Ye tool abhi placeholder hai. Isko aage chalke backend/API/extra logic se upgrade kar sakta hai.";
      info =
        "Frontend structure ready hai. Future me yaha real conversion logic add karega.";
      break;

    case "currencyDemo": {
      const amount = parseFloat(text || "1") || 1;
      // Simple demo: 1 USD = 80 INR (static)
      const inr = amount * 80;
      result =
        `Static demo (no live rates):\n\n` +
        `${amount} USD ≈ ${inr.toFixed(2)} INR (assuming 1 USD = 80 INR)`;
      info = "Live currency conversion ke liye API / backend integrate karna padega.";
      break;
    }

    case "epochToTime": {
      const ts = parseInt(text.trim(), 10);
      if (isNaN(ts)) {
        result = "Please enter a valid Unix timestamp (seconds).";
      } else {
        const d = new Date(ts * 1000);
        result = d.toISOString();
      }
      break;
    }

    case "timeToEpoch": {
      const d = new Date(text.trim());
      if (isNaN(d.getTime())) {
        result = "Please enter a valid datetime (e.g. 2025-01-01T12:00:00).";
      } else {
        result = Math.floor(d.getTime() / 1000).toString();
      }
      break;
    }

    case "wordFrequency": {
      const words = getWords(text).map((w) => w.toLowerCase());
      const map = {};
      words.forEach((w) => {
        map[w] = (map[w] || 0) + 1;
      });
      const entries = Object.entries(map).sort((a, b) => b[1] - a[1]);
      result = entries
        .map(([w, c]) => `${w}: ${c}`)
        .join("\n");
      break;
    }

    case "mdToHtml": {
      // very basic markdown → HTML
      let out = text;
      out = out.replace(/^### (.*$)/gim, "<h3>$1</h3>");
      out = out.replace(/^## (.*$)/gim, "<h2>$1</h2>");
      out = out.replace(/^# (.*$)/gim, "<h1>$1</h1>");
      out = out.replace(/\*\*(.*)\*\*/gim, "<strong>$1</strong>");
      out = out.replace(/\*(.*)\*/gim, "<em>$1</em>");
      out = out.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>');
      out = out.replace(/\n$/gim, "<br />");
      result = out;
      break;
    }

    case "htmlToMdBasic": {
      let out = text;
      out = out.replace(/<h1>(.*?)<\/h1>/gim, "# $1\n");
      out = out.replace(/<h2>(.*?)<\/h2>/gim, "## $1\n");
      out = out.replace(/<h3>(.*?)<\/h3>/gim, "### $1\n");
      out = out.replace(/<strong>(.*?)<\/strong>/gim, "**$1**");
      out = out.replace(/<b>(.*?)<\/b>/gim, "**$1**");
      out = out.replace(/<em>(.*?)<\/em>/gim, "*$1*");
      out = out.replace(/<i>(.*?)<\/i>/gim, "*$1*");
      out = out.replace(/<a [^>]*href="(.*?)"[^>]*>(.*?)<\/a>/gim, "[$2]($1)");
      out = out.replace(/<br\s*\/?>/gim, "\n");
      out = out.replace(/<[^>]+>/g, "");
      result = out;
      break;
    }

    case "emojiExtract": {
      const m = text.match(
        /([\u231A-\u231B\u23E9-\u23EC\u23F0-\u23F4\u25FD-\u25FE\u2600-\u2604\u260E\u2611\u2614-\u2615\u2648-\u2653\u267B\u26A1\u26AA-\u26AB\u26BD-\u26BE\u26C4-\u26C5\u26CE\u26D4\u26EA\u26F2-\u26F3\u26F5\u26FA\u26FD\u2702\u2705\u2708-\u2709\u270A-\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B-\u2B1C\u2B50\u2B55\u1F004\u1F0CF\u1F170-\u1F171\u1F17E-\u1F17F\u1F18E\u1F191-\u1F19A\u1F1E6-\u1F1FF\u1F201-\u1F202\u1F21A\u1F22F\u1F232-\u1F236\u1F238-\u1F23A\u1F250-\u1F251\u1F300-\u1F6FF\u1F900-\u1F9FF])/g
      );
      if (!m) {
        result = "No emojis found.";
      } else {
        const u = Array.from(new Set(m));
        result = u.join(" ");
        info = `Found ${u.length} unique emoji(s).`;
      }
      break;
    }

    case "fakeData": {
      const sample = [
        { name: "Amit Sharma", email: "amit.sharma@example.com" },
        { name: "Priya Verma", email: "priya.verma@example.com" },
        { name: "Rohan Gupta", email: "rohan.gupta@example.com" }
      ];
      result = sample
        .map((x, i) => `${i + 1}. ${x.name} — ${x.email}`)
        .join("\n");
      info = "Static fake data demo. Aage chalke random generator add kar sakta hai.";
      break;
    }

    case "ytThumbInfo": {
      result =
        "YouTube Thumbnail Downloader (frontend-safe way):\n\n" +
        "1. Video URL se video ID nikaalo (v= ke baad wala part).\n" +
        "2. Thumbnail URL format:\n" +
        "   https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg\n\n" +
        "Example:\n" +
        "Video: https://www.youtube.com/watch?v=dQw4w9WgXcQ\n" +
        "Thumb: https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg";
      info =
        "Ye safe info tool hai. Direct downloader banane ke liye backend / proxy ki zarurat pad sakti hai.";
      break;
    }

    case "instaDpInfo": {
      result =
        "Instagram DP Downloader info:\n\n" +
        "- Officially Instagram scraping allow nahi karta.\n" +
        "- Jo bhi site DP download karti hai, wo backend se request handle karti hai.\n" +
        "- Pure frontend-only DP downloader reliable nahi banta.\n\n" +
        "Isliye GTTOOLS me isko sirf 'info tool' ki tarah rakho ya backend ke through implement karo.";
      info = "Safe explanation only. No scraping is done here.";
      break;
    }

    case "caseCombo": {
      const original = text;
      const upper = original.toUpperCase();
      const lower = original.toLowerCase();
      const title = toTitleCase(original);
      const sentence = toSentenceCase(original);
      result =
        "ORIGINAL:\n" +
        original +
        "\n\nUPPERCASE:\n" +
        upper +
        "\n\nlowercase:\n" +
        lower +
        "\n\nTitle Case:\n" +
        title +
        "\n\nSentence case:\n" +
        sentence;
      break;
    }

    case "emojiHelper": {
      result =
        "Common emojis:\n\n" +
        "😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚\n" +
        "😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🥳 😏 😒 😞 😔 😟 😕 🙁 ☹️\n\n" +
        "Copy the ones you want and paste into your content.";
      break;
    }

    default:
      result = text;
      info =
        "Basic utility fallback (no specific logic yet). You can extend this later.";
  }

  return { result, info };
}

// ========================
// IMAGE TOOL LOGIC
// ========================

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
      rotateCanvas(90);
      infoEl.textContent = "✅ Rotated 90°.";
      break;

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

    case "blur":
      applyCanvasFilter("blur(2px)");
      infoEl.textContent = "✅ Applied blur.";
      break;

    case "pixelate":
      pixelate(6);
      infoEl.textContent = "✅ Applied pixelate effect.";
      break;

    case "border":
      drawBorder();
      infoEl.textContent = "✅ Added border.";
      break;

    case "roundedCorners":
      roundedCorners();
      infoEl.textContent = "✅ Rounded corners applied.";
      break;

    case "circle":
      circleCrop();
      infoEl.textContent = "✅ Circle crop (transparent corners).";
      break;

    case "imgCompressPlaceholder":
      infoEl.textContent =
        "ℹ️ Demo: Image compression fully control karne ke liye quality slider + JPEG export add karna padega. Abhi image jaisi hai vaisi hi hai.";
      break;

    case "imgCropPlaceholder":
      infoEl.textContent =
        "ℹ️ Basic crop tool banane ke liye selection rectangle UI chahiye (drag-to-select). Abhi ye placeholder info hai.";
      break;

    case "imgToBase64Placeholder": {
      const dataURL = imageCanvas.toDataURL("image/png");
      const output = document.getElementById("outputText");
      if (output) {
        output.value = dataURL;
        const infoElm = document.getElementById("resultInfo");
        if (infoElm) {
          infoElm.textContent =
            "✅ Image converted to Data URL (Base64). Longer images → bigger text.";
        }
      } else {
        infoEl.textContent =
          "Open text tool (e.g. Base64 viewer) to see the string.";
      }
      break;
    }

    case "base64ToImgPlaceholder":
      infoEl.textContent =
        "Abhi ye sirf placeholder hai. Base64 → Image ke liye text area se dataURL read karke new image create kar sakta hai.";
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
        "✅ Basic grayscale applied (default fall-back effect).";
      break;
  }
}

// ---- Canvas helpers ----

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
  imageCtx.lineWidth = 8;
  imageCtx.strokeStyle = "white";
  imageCtx.strokeRect(4, 4, w - 8, h - 8);
}

function roundedCorners() {
  const w = imageCanvas.width;
  const h = imageCanvas.height;
  const radius = 30;
  const temp = document.createElement("canvas");
  temp.width = w;
  temp.height = h;
  const tctx = temp.getContext("2d");

  tctx.beginPath();
  tctx.moveTo(radius, 0);
  tctx.lineTo(w - radius, 0);
  tctx.quadraticCurveTo(w, 0, w, radius);
  tctx.lineTo(w, h - radius);
  tctx.quadraticCurveTo(w, h, w - radius, h);
  tctx.lineTo(radius, h);
  tctx.quadraticCurveTo(0, h, 0, h - radius);
  tctx.lineTo(0, radius);
  tctx.quadraticCurveTo(0, 0, radius, 0);
  tctx.closePath();
  tctx.clip();

  tctx.drawImage(imageCanvas, 0, 0);

  imageCtx.clearRect(0, 0, w, h);
  imageCtx.drawImage(temp, 0, 0);
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
  const link = document.createElement("a");
  link.href = imageCanvas.toDataURL(mime);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  infoEl.textContent = "✅ Download started.";
}

// ========================
// HELPERS
// ========================

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

function hexToRgb(hex) {
  let h = hex.replace("#", "");
  if (h.length === 3) {
    h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  }
  if (h.length !== 6) return null;
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  if ([r, g, b].some((x) => Number.isNaN(x))) return null;
  return { r, g, b };
}

function rgbToHex(r, g, b) {
  const toHex = (n) => {
    const h = n.toString(16);
    return h.length === 1 ? "0" + h : h;
  };
  return "#" + toHex(r) + toHex(g) + toHex(b);
}

function clamp(v) {
  return Math.max(0, Math.min(255, v));
}
