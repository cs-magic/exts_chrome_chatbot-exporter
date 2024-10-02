import { APP_ID } from "@/config";
import { mountReactApp } from "@cs-magic/react/utils/mount-react-app"; // Check for dark mode preference
import { Entry } from "./react/entry";

import "../../../assets/styles/main.css";

console.log(APP_ID, "init...");
const element = document.createElement("div");
document.body.appendChild(element);
mountReactApp(element, Entry);
