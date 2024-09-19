import { Button } from "@cs-magic/shadcn/dist/ui/button";
import { Separator } from "@cs-magic/shadcn/dist/ui/separator";
import { cn } from "@cs-magic/shadcn/dist/lib/utils";
import { useDarkMode } from "@cs-magic/react/dist/hooks/use-dark-mode";
import { isChatgpt } from "../utils/platform";
import { exportChats } from "../utils/exportChats";

export const Row = () => {
  const isDark = useDarkMode();
  const theme = isDark
    ? "bg-gray-800 text-gray-200"
    : "bg-gray-200 text-gray-800";

  console.log("matchMedia: ", window.matchMedia);

  const S = () => (
    <Separator
      orientation={"horizontal"}
      className={cn("grow w-auto bg-gray-900 ", theme)}
    />
  );

  return (
    <div
      className={cn(
        "flex justify-center items-center w-full overflow-hidden gap-2",
        isChatgpt() && "m-2",
      )}
    >
      <div
        className={cn(
          "flex justify-center items-center w-full",
          isChatgpt() && "md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem]",
        )}
      >
        <S />
        <Button
          className={cn("shrink-0", theme)}
          onClick={() => {
            exportChats({ isDark });
          }}
        >
          Export
        </Button>
        <S />
      </div>
    </div>
  );
};
