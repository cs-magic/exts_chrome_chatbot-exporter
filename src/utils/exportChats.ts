import { getContentAreaElement } from "./getContentAreaElement";
import { isChatgpt } from "./platform";
import { formatToday } from "@cs-magic/common/dist/datetime/format-today";
import { getConversationName } from "./getConversationName";
import { element2image } from "packages_frontend/common/src/element2image";

export const exportChats = ({ isDark }: { isDark: boolean }) => {
  let targetElement = getContentAreaElement();
  if (isChatgpt())
    targetElement = targetElement.querySelector(
      // 4个不行，5 个缺头部，6 个比较完整
      ":first-child > :first-child > :first-child > :first-child > :first-child > :first-child",
    );

  void element2image(targetElement as HTMLElement, {
    approach: isChatgpt() ? "html2canvas" : "modern-screenshot",
    filename: `${formatToday()} - chat - ${getConversationName()}.jpeg`,
    backgroundColor: isDark
      ? "#171717"
      : // "rgb(249, 249, 249)",
        "white",
  });
};
