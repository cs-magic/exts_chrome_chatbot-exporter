import { isChatgpt, isClaude, isPerplexityAI } from "./platform";

export const getInputAreaElement = () => {
  if (isClaude())
    // .parentElement.firstElementChild 在初始化问题页的时候有 bug
    return document.querySelector(".sticky.bottom-0");

  if (isChatgpt())
    return document.querySelector(".composer-parent")?.lastElementChild;

  if (isPerplexityAI())
    return document.querySelector(".bottom-mobileNavHeight");
};
