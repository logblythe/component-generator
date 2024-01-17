import { Element, useEditor } from "@craftjs/core";
import { Button as RadixButton } from "@radix-ui/themes";
import React from "react";

import { ResizableContainer } from "../../user";

export const ResizableContainerGenerator = () => {
  const {
    connectors: { create },
  } = useEditor();

  return (
    <RadixButton
      ref={(ref) =>
        create(
          ref as HTMLElement,
          <Element
            canvas
            is={ResizableContainer}
            flexDirection="row"
            background={{ r: 78, g: 78, b: 78, a: 1 }}
            padding={["20", "20", "20", "20"]}
          />
        )
      }
    >
      Resizable Container
    </RadixButton>
  );
};
