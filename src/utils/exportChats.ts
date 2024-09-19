import { getContentAreaElement } from "./getContentAreaElement";
import { element2png } from "@cs-magic/exts_chrome_claude-enhancer/src/utils/element2png";
import { isChatgpt } from "./platform";
import { formatToday } from "@cs-magic/common/dist/datetime/format-today";

export const exportChats = ({ isDark }: { isDark: boolean }) => {
  let targetElement = getContentAreaElement();
  if (isChatgpt())
    targetElement = targetElement.querySelector(
      ":first-child > :first-child > :first-child > :first-child > :first-child > :first-child",
      // ":first-child > :first-child > :first-child > :first-child > :first-child",
      // ":first-child > :first-child > :first-child > :first-child", // 四个不行
    );

  void element2png(targetElement as HTMLElement, {
    approach: isChatgpt() ? "html2canvas" : "modern-screenshot",
    filename: `${formatToday()} - chat - {TITLE}.png`,
    backgroundColor: isDark
      ? "#171717"
      : // "rgb(249, 249, 249)",
        "white",
  });
};
