import { isChatgpt, isClaude } from "./platform";

export const getContentAreaElement = () => {
  if (isClaude())
    return document.querySelector(".sticky.bottom-0").parentElement
      .firstElementChild;

  if (isChatgpt())
    return document.querySelector(".composer-parent > :nth-child(1)");
};
