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
    padding,
    margin,
    textColor,
    fontWeight,
    fontSize,
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
        padding: padding?.map(value => `${value}px`).join(' ') ?? 0,
        margin: margin?.map(value => `${value}px`).join(' ') ?? 0,
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
