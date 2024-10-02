import { useExportChats } from "@/utils/use-export-chats";
import { useDarkMode } from "@cs-magic/react/hooks/use-dark-mode";
import { Button } from "@cs-magic/shadcn/ui/button";
import React from "react";

export const Entry = () => {
  const isDark = useDarkMode();
  const theme = isDark
    ? "bg-gray-800 text-gray-200"
    : "bg-gray-200 text-gray-800";

  // console.log("matchMedia: ", window.matchMedia);
  const exportChats = useExportChats();

  return (
    <Button
      onClick={exportChats}
      className={"fixed bottom-1/2 right-2 sm:right-4"}
    >
      Export
    </Button>
  );
};
