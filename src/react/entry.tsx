import { Button } from "@cs-magic/shadcn/ui/button";
import React from "react";
import ReactDraggable from "react-draggable";

import LogoSVG from "../../assets/logo.svg";

import { useExportChats } from "@/utils/use-export-chats";

export const Entry = () => {
  const [dragging, setDragging] = React.useState(false);
  const exportChats = useExportChats();

  return (
    <ReactDraggable
      axis={"y"}
      onDrag={() => {
        // console.log("== drag");
        setDragging(true);
      }}
      onStop={() => {
        if (!dragging) {
          // onClick
          exportChats();
        }

        setDragging(false);
        // console.log("== drag end");
      }}
    >
      <Button
        className={
          "fixed top-1/3 right-0 z-[9999] !rounded-l-full bg-indigo-500/50 hover:bg-indigo-500 text-white !w-12 !h-8"
        }
        size={"sm"}
      >
        <LogoSVG width={32} />
      </Button>
    </ReactDraggable>
  );
};
