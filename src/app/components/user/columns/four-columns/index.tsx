import { Element } from "@craftjs/core";
import { Box } from "@radix-ui/themes";
import React from "react";

import { Container } from "../../index";

export const FourColumns = () => (
  <Element
    canvas
    id="four-column-parent"
    is={Container}
    gap="4"
    direction={"row"}
    className="border p-2"
  >
    <Element canvas id="four-column-1" is={Container} className="border" />
    <Element canvas id="four-column-2" is={Container} className="border" />
    <Element canvas id="four-column-3" is={Container} className="border" />
    <Element canvas id="four-column-4" is={Container} className="border" />
  </Element>
);

FourColumns.craft = {
  displayName: "Four Columns",
};
