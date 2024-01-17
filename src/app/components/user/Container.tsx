import { Node, useNode } from "@craftjs/core";
import { Flex as RadixFlex, Responsive } from "@radix-ui/themes";
import cx from "classnames";

import { Button } from "./button";
import { Settings } from "./resizable-container/settings";
import { Text } from "./text";

// TODO: Figure out how to type this
// type PropType = React.ComponentProps<typeof RadixFlex> & {
//   className?: string;
//   children?: React.ReactNode;
// };

type PropType = {
  className?: string;
  children?: React.ReactNode;
  direction?: "row" | "column";
  gap?: Responsive<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9">;
};

const defaultProps: Partial<PropType> = {
  direction: "column",
};

export const Container = (props: Partial<PropType>) => {
  props = {
    ...defaultProps,
    ...props,
  };

  const { children, className, ...rest } = props;

  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <RadixFlex
      className={cx("w-full min-h-10", className)}
      ref={(ref) => connect(drag(ref as HTMLDivElement))}
      {...rest}
    >
      {children}
    </RadixFlex>
  );
};

Container.craft = {
  displayName: "Container",
  props: defaultProps,
  rules: {
    canDrag: () => true,
    // canMoveIn: (incomingNodes: Node[], currentNode: Node) => {
    //   if (currentNode.id !== "ROOT") {
    //     return incomingNodes.every(
    //       (node) => node.data.type === Button || node.data.type === Text
    //     );
    //   }
    //   return true;
    // },
  },
  related: {
    settings: Settings,
  },
};
