import { useNode } from "@craftjs/core";
import { Box, Flex, Grid, RadioGroup, Text } from "@radix-ui/themes";

import { ContainerProps } from ".";

export const Settings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <Flex gap="4" direction="column">
      <Box>
        <Text>Flex-Direction</Text>
        <RadioGroup.Root
          defaultValue={props.flexDirection}
          onValueChange={(flexDirection) => {
            setProp(
              (props: ContainerProps) => (props.flexDirection = flexDirection)
            );
          }}
        >
          <Grid gap="2" columns="2">
            <Text as="label" size="2">
              <Flex gap="2">
                <RadioGroup.Item value="row" /> row
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2">
                <RadioGroup.Item value="column" /> column
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2">
                <RadioGroup.Item value="row-reverse" /> row-reverse
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2">
                <RadioGroup.Item value="column-reverse" /> column-reverse
              </Flex>
            </Text>
          </Grid>
        </RadioGroup.Root>
      </Box>

      <Box>
        <Text>Align-items</Text>
        <RadioGroup.Root
          defaultValue={props.alignItems}
          onValueChange={(alignItems) => {
            setProp((props: ContainerProps) => (props.alignItems = alignItems));
          }}
        >
          <Grid gap="2" columns="2">
            <Text as="label" size="2">
              <Flex gap="2">
                <RadioGroup.Item value="flex-start" /> flex-start
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2">
                <RadioGroup.Item value="flex-end" /> flex-end
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2">
                <RadioGroup.Item value="center" /> center
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2">
                <RadioGroup.Item value="stretch" /> stretch
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2">
                <RadioGroup.Item value="baseline" /> baseline
              </Flex>
            </Text>
          </Grid>
        </RadioGroup.Root>
      </Box>

      <Box>
        <Text>Justify-Content</Text>
        <RadioGroup.Root
          defaultValue={props.justifyContent}
          onValueChange={(justifyContent) => {
            setProp(
              (props: ContainerProps) => (props.justifyContent = justifyContent)
            );
          }}
        >
          <Grid gap="2" columns="2">
            <Text as="label" size="2">
              <Flex gap="2">
                <RadioGroup.Item value="flex-start" /> flex-start
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2">
                <RadioGroup.Item value="flex-end" /> flex-end
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2">
                <RadioGroup.Item value="center" /> center
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2">
                <RadioGroup.Item value="space-between" /> space-between
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2">
                <RadioGroup.Item value="space-around" /> space-around
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2">
                <RadioGroup.Item value="space-evenly" /> space-evenly
              </Flex>
            </Text>
          </Grid>
        </RadioGroup.Root>
      </Box>
    </Flex>
  );
};
