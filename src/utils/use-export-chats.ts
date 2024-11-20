import { formatToday } from "@cs-magic/common/datetime/format-today";
import { element2image } from "@cs-magic/common-frontend/element2image";
import { useDarkMode } from "@cs-magic/react/hooks/use-dark-mode";

import { getConversationName } from "./getConversationName";
import { isChatgpt } from "./platform";

import { getScreenshotAreaElement } from "@/utils/parse-document";

export const useExportChats = () => {
  const backgroundColor = useDarkMode() ? "#21211E" : "white";

  return () => {
    const element = getScreenshotAreaElement() as HTMLElement;
    if (!element) return alert("no content to be exported");

    console.log({ element });
    void element2image(element, {
      approach: isChatgpt() ? "html2canvas" : "modern-screenshot",
      filename: `${formatToday()} - chat - ${getConversationName()}.jpeg`,
      backgroundColor: backgroundColor,
    });
  };
};
