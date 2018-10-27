const htmlImportSupported = "import" in document.createElement("link");
const htmlTemplateSupported = "content" in document.createElement("template");
const customElementsSupported = "registerElement" in document;

if (!customElementsSupported) {
  loadScript("./webcomponents-bundle.js");
}

if (!htmlImportSupported) {
  loadScript("./html-imports.min.js");
}

if (!htmlTemplateSupported) {
  loadScript("./template.js");
}

function loadScript(scriptUrl) {
  const script = document.createElement("script");
  script.src = scriptUrl;
  const ref = document.querySelector("title");
  document.querySelector("script").parentNode.insertBefore(script, ref);
}
