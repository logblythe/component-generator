import { useNode } from "@craftjs/core";
import { Text as RadixText } from "@radix-ui/themes";
import React from "react";

type PropTypes = React.ComponentProps<typeof RadixText>;

export const Text = ({ children, ...rest }: PropTypes) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <RadixText ref={(ref) => connect(drag(ref as HTMLSpanElement))} {...rest}>
      {children}
    </RadixText>
  );
};
