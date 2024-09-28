import { mountReactApp } from "@cs-magic/exts_chrome_claude-artifact-enhancer/src/react/bridge"; // Check for dark mode preference
import { Entry } from "./react/entry";

import "../../../assets/styles/main.css";

const element = document.createElement("div");
document.body.appendChild(element);
mountReactApp(element, Entry);
