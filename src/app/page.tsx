"use client";

import { Editor, Element, Frame } from "@craftjs/core";
import { Flex, Grid, Text as RadixText } from "@radix-ui/themes";

import { SettingsPanel } from "./components/SettingsPanel";
import { Toolbox } from "./components/Toolbox";
import { Button, Container, Text } from "./components/user";

export default function Page() {
  return (
    <main className="min-h-screen p-24">
      <Editor resolver={{ Button, Text, Container }}>
        <Grid columns="3" gap="3">
          <Flex className="bg-red-400" direction={"row"} justify={"between"}>
            <Flex direction={"column"}>
              <RadixText>Insert</RadixText>
              <Toolbox />
            </Flex>
            <RadixText>Layers</RadixText>
          </Flex>
          <Flex className="bg-green-200">
            <Frame>
              <Element is={Container} canvas>
                <Button>Button</Button>
                <Text>Text</Text>
              </Element>
            </Frame>
          </Flex>
          <Flex className="bg-yellow-400" direction={"column"}>
            Styles
            <SettingsPanel />
          </Flex>
        </Grid>
      </Editor>
    </main>
  );
}
