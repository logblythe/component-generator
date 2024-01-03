import { useNode } from "@craftjs/core";
import { Button as RadixButton } from "@radix-ui/themes";
import React from "react";

import { Settings } from "./settings";

export type PropTypes = React.ComponentProps<typeof RadixButton>;

export const Button = ({ children, ...rest }: PropTypes) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <RadixButton ref={(ref) => connect(drag(ref as HTMLElement))} {...rest}>
      {children}
    </RadixButton>
  );
};

Button.craft = {
  related: {
    settings: Settings,
  },
};
