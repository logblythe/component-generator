import { Element, useEditor } from "@craftjs/core";
import { Button as RadixButton } from "@radix-ui/themes";
import React from "react";

import { Container } from "../../user";

export const ContainerGenerator = () => {
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
            is={Container}
            className="border flex flex-row p-4 gap-4"
          />
        )
      }
    >
      Container
    </RadixButton>
  );
};
