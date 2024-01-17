import { useNode } from "@craftjs/core";
import { Box, Flex, Select, Slider, Text, TextField } from "@radix-ui/themes";

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
      <Text>Font Size</Text>
      <Flex direction="column">
        <Slider
          defaultValue={[18]}
          onValueChange={(value) =>
            setProp((props: PropTypes) => (props.fontSize = String(value[0])))
          }
        />
      </Flex>
      <Text>Border Radius</Text>
      <TextField.Root>
        <TextField.Input
          type="number"
          placeholder="Border radius"
          onChange={(e) => {
            const value = e.target.value;
            setProp((props: PropTypes) => (props.borderRadius = value));
          }}
        />
      </TextField.Root>
      <Text>Text Color</Text>
      <TextField.Root>
        <TextField.Input
          type="color"
          placeholder="Text color"
          onChange={(e) => {
            const value = e.target.value;
            setProp((props: PropTypes) => (props.textColor = value));
          }}
        />
      </TextField.Root>

      <Text>Background Color</Text>
      <TextField.Root>
        <TextField.Input
          type="color"
          placeholder="Background color"
          onChange={(e) => {
            const value = e.target.value;
            setProp((props: PropTypes) => (props.backgroundColor = value));
          }}
        />
      </TextField.Root>
      <Text>Border Color</Text>
      <TextField.Root>
        <TextField.Input
          type="color"
          placeholder="Border color"
          onChange={(e) => {
            const value = e.target.value;
            setProp((props: PropTypes) => (props.borderColor = value));
          }}
        />
      </TextField.Root>
      <Text>Padding x-axis</Text>
      <TextField.Root>
        <TextField.Input
          type="number"
          placeholder="Padding top"
          onChange={(e) => {
            const value = e.target.value;
            setProp((props: PropTypes) => (props.paddingX = value));
          }}
        />
      </TextField.Root>
      <Text>Padding y-axis</Text>
      <TextField.Root>
        <TextField.Input
          type="number"
          placeholder="Padding right"
          onChange={(e) => {
            const value = e.target.value;
            setProp((props: PropTypes) => (props.paddingY = value));
          }}
        />
      </TextField.Root>
      <Select.Root
        defaultValue="400"
        onValueChange={(value) => {
          setProp((props: PropTypes) => (props.fontWeight = value));
        }}
      >
        <Select.Trigger />
        <Select.Content>
          <Select.Group>
            <Select.Item value="400">Default</Select.Item>
            <Select.Item value="500">Medium</Select.Item>
            <Select.Item value="600">Bold</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </Box>
  );
};
