import { useNode } from "@craftjs/core";
import { Box, Text, TextField } from "@radix-ui/themes";

import { PropTypes } from "./index";

export const Settings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <Box>
      <Text>Settings</Text>
      <TextField.Root>
        <TextField.Input
          onChange={(e) => {
            const value = e.target.value;
            setProp((props: PropTypes) => (props.color = "sky"));
          }}
        />
      </TextField.Root>
    </Box>
  );
};
