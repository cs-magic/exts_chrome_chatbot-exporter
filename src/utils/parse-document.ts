import { LlmPlatform } from "@/utils/const";

export const checkLlmPlatform = (): LlmPlatform => {
  const url = window.location.href.toLowerCase();
  console.log({ url });

  if (url.startsWith("https://chatgpt.com/c/")) return LlmPlatform.ChatGPT;

  if (url.startsWith("https://claude.ai/chat/")) return LlmPlatform.Claude;

  if (url.startsWith("https://www.perplexity.ai/search/"))
    return LlmPlatform.Perplexity;

  if (url.startsWith("https://metaso.cn/search/")) return LlmPlatform.Mita;

  if (url.startsWith("https://yuewen.cn/chats/")) return LlmPlatform.JieYue;

  return LlmPlatform.default;
};

export const getScreenshotAreaElement = () => {
  const llmPlatform = checkLlmPlatform();

  console.log({ llmPlatform });

  switch (llmPlatform) {
    case LlmPlatform.Perplexity:
      return document.querySelector(".col-span-8");

    case LlmPlatform.ChatGPT:
      return document.querySelector(".composer-parent").firstElementChild;

    case LlmPlatform.Claude:
      return document.querySelector(".sticky.bottom-0").previousElementSibling;

    case LlmPlatform.Mita:
      return document.querySelector("[class*='Search_search-result__']");

    case LlmPlatform.JieYue:
      return document.querySelector("[class*='message-list_inner__']");

    default:
      return null;
  }
};
