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
      <Text>Margin Top</Text>
      <TextField.Root>
        <TextField.Input
          type="number"
          placeholder="Margin top"
          onChange={(e) => {
            const value = e.target.value;
            setProp((props: PropTypes) => (props.marginTop = value));
          }}
        />
      </TextField.Root>
      <Text>Margin Right</Text>
      <TextField.Root>
        <TextField.Input
          type="number"
          placeholder="Margin right"
          onChange={(e) => {
            const value = e.target.value;
            setProp((props: PropTypes) => (props.marginRight = value));
          }}
        />
      </TextField.Root>
      <Text>Margin Bottom</Text>
      <TextField.Root>
        <TextField.Input
          type="number"
          placeholder="Margin bottom"
          onChange={(e) => {
            const value = e.target.value;
            setProp((props: PropTypes) => (props.marginBottom = value));
          }}
        />
      </TextField.Root>
      <Text>Margin Left</Text>
      <TextField.Root>
        <TextField.Input
          type="number"
          placeholder="Margin left"
          onChange={(e) => {
            const value = e.target.value;
            setProp((props: PropTypes) => (props.marginLeft = value));
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
