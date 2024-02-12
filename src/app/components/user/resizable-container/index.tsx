import {Node} from "@craftjs/core";
import React from "react";
import {Text as RadixText} from "@radix-ui/themes";

import {Button} from "../button";
import {Resizer} from "../Resizer";
import {Text} from "../text";
import {Settings} from "./settings";
import {StyleProps} from "../types";


export type PropTypes = React.ComponentProps<typeof RadixText> &
    StyleProps & {
    children: React.ReactNode;
};

const defaultProps = {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    fillSpace: "no",
    padding: ["0", "0", "0", "0"],
    margin: ["0", "0", "0", "0"],
    background: {r: 255, g: 255, b: 255, a: 1},
    color: {r: 0, g: 0, b: 0, a: 1},
    shadow: 0,
    radius: 0,
    width: "100%",
    height: "auto",
};

export const ResizableContainer = (props: Partial<PropTypes>) => {
    props = {
        ...defaultProps,
        ...props,
    };
    const {
        flexDirection,
        alignItems,
        justifyContent,
        fillSpace,
        backgroundColor,
        textColor,
        padding,
        margin,
        boxShadow,
        borderRadius,
        children,
    } = props;

    return (
        <Resizer
            propKey={{width: "width", height: "height"}}
            style={{
                justifyContent: justifyContent,
                flexDirection: flexDirection,
                alignItems: alignItems,
                background: backgroundColor,
                color: textColor,
                padding: padding
                    ? `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`
                    : undefined,
                margin: margin
                    ? `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`
                    : undefined,
                boxShadow:
                    boxShadow === 0
                        ? "none"
                        : `0px 3px 100px ${boxShadow}px rgba(0, 0, 0, 0.13)`,
                borderRadius: `${borderRadius}px`,
                flex: fillSpace === "yes" ? 1 : "unset",
            }}
        >
            {children}
        </Resizer>
    );
};

ResizableContainer.craft = {
    displayName: "Container",
    props: defaultProps,
    rules: {
        canDrag: () => true,
        canMoveIn: (incomingNodes: Node[], currentNode: Node) => {
            if (currentNode.id !== "ROOT") {
                return incomingNodes.every(
                    (node) => node.data.type === Button || node.data.type === Text
                );
            }
            return true;
        },
    },
    related: {
        settings: Settings,
    },
};
