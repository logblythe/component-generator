import { useNode } from "@craftjs/core";
import { Flex as RadixFlex } from "@radix-ui/themes";

//TODO: figure out a way to make it work with Element component from craftjs
//@ts-ignore
export const Container = ({ children }) => {
  return (
    <RadixFlex p="4" direction={"column"} width={"100%"}>
      {children}
    </RadixFlex>
  );
};
