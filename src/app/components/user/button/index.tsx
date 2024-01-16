import {useNode} from "@craftjs/core";
import {Button as RadixButton} from "@radix-ui/themes";
import React from "react";

import {Settings} from "./settings";

export type RadixButtonPropTypes = React.ComponentProps<typeof RadixButton>;

export type PropTypes = RadixButtonPropTypes & {
    fontSize?: string;
    fontWeight?: string;
    textColor?: string;
    backgroundColor?: string;
    text?: string;
    paddingX?: string;
    paddingY?: string;
    borderRadius?: string;
    borderColor?: string;
};

export const Button = ({
                           children,
                           paddingY,
                           paddingX,
                           textColor,
                           backgroundColor,
                           fontWeight,
                           fontSize,
                           borderRadius,
                           borderColor,
                           ...rest
                       }: PropTypes) => {
    const {
        connectors: {connect, drag},
    } = useNode();

    return (
        <RadixButton
            style={{
                borderRadius: `${borderRadius}px`,
                border: `2px solid ${borderColor}`,
                paddingTop: `${paddingY}px`,
                paddingRight: `${paddingX}px`,
                paddingBottom: `${paddingY}px`,
                paddingLeft: `${paddingX}px`,
                color: `${textColor}`,
                backgroundColor: `${backgroundColor}`,
                fontSize: `${fontSize}px`,
                fontWeight: fontWeight,
                maxWidth: "max-content",
            }}
            ref={(ref) => connect(drag(ref as HTMLElement))} {...rest}>
            {children}
        </RadixButton>
    );
};

Button.craft = {
    related: {
        settings: Settings,
    },
};
