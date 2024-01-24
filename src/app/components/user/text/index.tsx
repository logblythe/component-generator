import { useNode } from "@craftjs/core";
import { Text as RadixText } from "@radix-ui/themes";
import React from "react";

import { Settings } from "./settings";

export type RadixTextPropTypes = React.ComponentProps<typeof RadixText>;
export type PropTypes = RadixTextPropTypes & {
  fontSize?: string;
  textAlign?: string;
  fontWeight?: string;
  textColor?: string;
  text?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
};

export const Text = ({ children, marginTop, marginRight, marginLeft, marginBottom, textColor, fontWeight, fontSize, textAlign, ...rest }: PropTypes) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <RadixText
        style={{
          marginTop: `${marginTop}px`,
          marginRight: `${marginRight}px`,
          marginBottom: `${marginBottom}px`,
          marginLeft: `${marginLeft}px`,
          color: `${textColor}`,
          fontSize: `${fontSize}px`,
          fontWeight: fontWeight,
        }}
        ref={(ref) => connect(drag(ref as HTMLSpanElement))} {...rest}>
      {children}
    </RadixText>
  );
};

Text.craft = {
  related: {
    settings: Settings,
  },
};
