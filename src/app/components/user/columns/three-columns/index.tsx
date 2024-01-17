import { Element } from "@craftjs/core";
import { Box } from "@radix-ui/themes";
import React from "react";

import { Container } from "../../index";

export const ThreeColumns = () => (
  <Element
    canvas
    id="three-column-parent"
    is={Container}
    gap={"4"}
    direction="row"
    className="border p-2"
  >
    <Element canvas id="three-column-1" is={Container} className="border" />
    <Element canvas id="three-column-2" is={Container} className="border" />
    <Element canvas id="three-column-3" is={Container} className="border" />
  </Element>
);

ThreeColumns.craft = {
  displayName: "Three Columns",
};
