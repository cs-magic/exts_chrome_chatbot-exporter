import { useDarkMode } from "@cs-magic/react/dist/hooks/use-dark-mode";
import { cn } from "@cs-magic/shadcn/dist/lib/utils";
import { Button } from "@cs-magic/shadcn/dist/ui/button";
import { Separator } from "@cs-magic/shadcn/dist/ui/separator";
import React from "react";
import { exportChats } from "../utils/exportChats";

export const Entry = () => {
  const isDark = useDarkMode();
  const theme = isDark
    ? "bg-gray-800 text-gray-200"
    : "bg-gray-200 text-gray-800";

  // console.log("matchMedia: ", window.matchMedia);

  const S = () => (
    <Separator
      orientation={"horizontal"}
      className={cn("grow w-auto bg-gray-900 ", theme)}
    />
  );

  return (
    <Button
      onClick={exportChats}
      className={"fixed bottom-1/2 right-2 sm:right-4"}
    >
      Export
    </Button>
  );
};
