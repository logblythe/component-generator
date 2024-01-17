import { useEditor, useNode } from "@craftjs/core";
import { Text as RadixText } from "@radix-ui/themes";
import React from "react";
import ContentEditable from "react-contenteditable";

import { StyleProps } from "../types";
import { Settings } from "./settings";

export type PropTypes = React.ComponentProps<typeof RadixText> &
  StyleProps & {
    text: string;
  };

export const Text = ({ text, ...rest }: PropTypes) => {
  const {
    connectors: { connect, drag },
    setProp,
  } = useNode();

  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const {
    marginTop,
    marginRight,
    marginLeft,
    marginBottom,
    textColor,
    fontWeight,
    fontSize,
    textAlign,
  } = rest;

  return (
    <ContentEditable
      innerRef={connect}
      html={text} // innerHTML of the editable div
      disabled={!enabled}
      onChange={(e) => {
        setProp((prop) => (prop.text = e.target.value), 500);
      }} // use true to disable editing
      tagName="h2" // Use a custom HTML tag (uses a div by default)
      style={{
        marginTop: `${marginTop}px`,
        marginRight: `${marginRight}px`,
        marginBottom: `${marginBottom}px`,
        marginLeft: `${marginLeft}px`,
        color: `${textColor}`,
        fontSize: `${fontSize}px`,
        fontWeight: fontWeight,
      }}
    />
  );
};

Text.craft = {
  displayName: "Text",
  props: {
    text: "Text",
  },
  related: {
    settings: Settings,
  },
};
