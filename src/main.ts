import { mountReactApp } from "@cs-magic/exts_chrome_claude-enhancer/src/react/bridge";
import { Row } from "./react/row";

import "../../../assets/styles/main.css";
import { getContentAreaElement } from "./utils/getContentAreaElement";
import { APP_ID } from "./utils/const";

const observer = new MutationObserver(async (mutations, observer) => {
  const contentAreaElement = getContentAreaElement();
  if (!contentAreaElement) return;

  const app = document.querySelector(`#${APP_ID}`);
  if (app) return;

  console.log("-- mounting");

  const div = document.createElement("div");
  div.id = APP_ID;

  mountReactApp(div, Row);

  contentAreaElement.parentElement.insertBefore(
    // why div is ok, but div.firstElementChild is null
    div,
    contentAreaElement.nextElementSibling,
  );
});
observer.observe(document.body, { subtree: true, childList: true });
