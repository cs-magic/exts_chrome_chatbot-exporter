import { getScreenshotAreaElement } from "@/utils/parse-document";
import { element2image } from "@cs-magic/common-frontend/dist/element2image";
import { formatToday } from "@cs-magic/common/datetime/format-today";
import { useDarkMode } from "@cs-magic/react/hooks/use-dark-mode";
import { getConversationName } from "src/utils/getConversationName";
import { isChatgpt } from "src/utils/platform";

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
