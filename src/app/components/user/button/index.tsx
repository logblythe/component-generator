import {useNode} from "@craftjs/core";
import {Button as RadixButton} from "@radix-ui/themes";
import React from "react";

import {Text} from "../index";
import {StyleProps} from "../types";
import {Settings} from "./settings";

export type PropTypes = React.ComponentProps<typeof RadixButton> &
    StyleProps & {
    text: string;
};

export const Button = ({text, ...rest}: PropTypes) => {
    const {
        connectors: {connect, drag},
    } = useNode();

    const {
        fontSize,
        fontWeight,
        padding,
        margin,
        textColor,
        backgroundColor,
        borderRadius,
        borderColor,
        ...otherProps
    } = rest;

    return (
        <RadixButton
            title={backgroundColor}
            ref={(ref) => connect(drag(ref as HTMLElement))}
            style={{
                padding: padding?.map(value => `${value}px`).join(' ') ?? "0 10px",
                margin: margin?.map(value => `${value}px`).join(' ') ?? "5px 0",
                borderRadius: `${borderRadius}px`,
                border: `2px solid ${borderColor}`,
                color: `${textColor}`,
                backgroundColor: `${backgroundColor}`,
                fontSize: `${fontSize}px`,
                fontWeight: fontWeight,
                maxWidth: "max-content",
            }}
            {...otherProps}
        >
            <Text text={text}/>
        </RadixButton>
    );
};

Button.craft = {
    displayName: "Button",
    props: {
        background: {r: 255, g: 255, b: 255, a: 0.5},
        color: {r: 92, g: 90, b: 90, a: 1},
        buttonStyle: "full",
        text: "Button",
        margin: ["5", "0", "5", "0"],
        textComponent: {
            // ...Text.craft.props,
            textAlign: "center",
        },
    },
    related: {
        settings: Settings,
    },
};
