import { useEditor } from "@craftjs/core";
import { Button as RadixButton } from "@radix-ui/themes";
import React from "react";

import { Button } from "../../user";

export const ButtonGenerator = () => {
  const {
    connectors: { create },
  } = useEditor();

  return (
    <RadixButton
      ref={(ref) =>
        create(ref as HTMLButtonElement, <Button text="Dragged Button" />)
      }
    >
      Button
    </RadixButton>
  );
};
