import { mountReactApp } from "@cs-magic/react/utils/mount-react-app"; // Check for dark mode preference
import { Entry } from "./react/entry";

import "../../../assets/styles/main.css";

const element = document.createElement("div");
document.body.appendChild(element);
mountReactApp(element, Entry);
