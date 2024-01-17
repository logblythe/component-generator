import { Flex, Grid } from "@radix-ui/themes";

import {
  ButtonGenerator,
  ContainerGenerator,
  ResizableContainerGenerator,
  TextGenerator,
  TileGenerator,
} from "./generators";

export const ACCORDION_ITEMS = [
  {
    title: "Tiles",
    value: "Tiles",
    content: (
      <Flex direction={"column"} gap={"4"}>
        <TileGenerator columns={1} />
        <TileGenerator columns={2} />
        <TileGenerator columns={3} />
        <TileGenerator columns={4} />
        <TileGenerator columns={2} columnWidths={["1/3", "2/3"]} />
        <TileGenerator columns={2} columnWidths={["2/3", "1/3"]} />
      </Flex>
    ),
  },
  {
    title: "Elements",
    value: "Elements",
    content: (
      <Grid gap={"4"}>
        {/* <ResizableContainerGenerator /> */}
        <ButtonGenerator />
        <TextGenerator />
        <ContainerGenerator />
      </Grid>
    ),
  },
];
