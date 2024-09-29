import { getScreenshotAreaElement } from "@/utils/parse-document";
import { element2image } from "@cs-magic/common-frontend/element2image";
import { formatToday } from "@cs-magic/common/datetime/format-today";
import { getConversationName } from "./getConversationName";
import { isChatgpt } from "./platform";

export const exportChats = () => {
  const element = getScreenshotAreaElement() as HTMLElement;
  if (!element) return alert("no content to be exported");

  console.log({ element });
  void element2image(element, {
    approach: isChatgpt() ? "html2canvas" : "modern-screenshot",
    filename: `${formatToday()} - chat - ${getConversationName()}.jpeg`,
  });
};
