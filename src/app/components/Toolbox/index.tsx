import { useEditor, useNode } from "@craftjs/core";
import { Box, Button as RadixButton, Flex, Text } from "@radix-ui/themes";

import { Button } from "../user";

export const Toolbox = () => {
  const {
    connectors: { create },
  } = useEditor();

  return (
    <Flex direction={"column"}>
      <Box pb="4">
        <Text>Drag to add</Text>
      </Box>
      <RadixButton
        ref={(ref) =>
          create(ref as HTMLButtonElement, <Button>Dragged</Button>)
        }
      >
        Button
      </RadixButton>
    </Flex>
  );
};
