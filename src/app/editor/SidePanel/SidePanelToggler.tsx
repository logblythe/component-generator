import { ChevronRightIcon } from "@radix-ui/react-icons";
import { HoverCard, IconButton } from "@radix-ui/themes";
import { Dispatch, SetStateAction } from "react";

import { StateType } from "../type";

export const SidePanelToggler = ({
  state: { isSidebarVisible, isEditingEnabled },
  setState,
}: {
  state: StateType;
  setState: Dispatch<
    SetStateAction<{
      isSidebarVisible: boolean;
      isEditingEnabled: boolean;
    }>
  >;
}) => (
  <HoverCard.Root>
    <HoverCard.Trigger>
      <IconButton
        onClick={() =>
          setState((state) => ({
            ...state,
            isSidebarVisible: !state.isSidebarVisible,
          }))
        }
        className={`${
          isEditingEnabled ? "cursor-pointer" : "cursor-not-allowed"
        }`}
        disabled={!isEditingEnabled}
      >
        <ChevronRightIcon
          height={"20"}
          width={"20"}
          className={`transition-transform transform ${
            isSidebarVisible ? "rotate-180" : "rotate-0"
          }`}
        />
      </IconButton>
    </HoverCard.Trigger>
    <HoverCard.Content size={"1"}>Toggle Panel</HoverCard.Content>
  </HoverCard.Root>
);
