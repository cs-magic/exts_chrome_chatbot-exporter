import { mountReactApp } from "@cs-magic/exts_chrome_claude-artifact-enhancer/src/react/bridge"; // Check for dark mode preference
import { Row } from "./react/row";

import "../../../assets/styles/main.css";
import { CHATBOT_EXPORTER_APP_ID } from "./utils/const";
import { getInputAreaElement } from "./utils/get-input-area-element";

// Check for dark mode preference
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

const observer = new MutationObserver(async (mutations, observer) => {
  const inputAreaElement = getInputAreaElement();
  if (!inputAreaElement) return;

  const app = document.querySelector(`#${CHATBOT_EXPORTER_APP_ID}`);
  if (!app) {
    console.log("-- mounting");

    const div = document.createElement("div");
    div.id = CHATBOT_EXPORTER_APP_ID;

    mountReactApp(div, Row);

    inputAreaElement.parentElement.insertBefore(
      // why div is ok, but div.firstElementChild is null
      div,
      inputAreaElement,
    );
  } else if (app.nextElementSibling !== inputAreaElement) {
    console.log("-- re-mounting");
    app.remove();
  }
});
observer.observe(document.body, { subtree: true, childList: true });
