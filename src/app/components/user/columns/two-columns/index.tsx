import { Element } from "@craftjs/core";
import { Box, Flex } from "@radix-ui/themes";
import React from "react";

import { Container } from "../../index";

export const TwoColumns = () => (
  <Element
    canvas
    id="two-column-parent"
    is={Container}
    gap={"4"}
    direction="row"
    className="p-2 border"
  >
    <Element canvas id="two-column-1" is={Container} className="border" />
    <Element canvas id="two-column-2" is={Container} className="border" />
  </Element>
);

TwoColumns.craft = {
  displayName: "Two Columns",
};
