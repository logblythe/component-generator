import { Element } from "@craftjs/core";
import { Box } from "@radix-ui/themes";
import React from "react";

import { Container } from "../../index";

export const OneHalfInverseColumns = () => (
  <Container gap={"4"} direction="row" className="border p-2">
    <Box className="w-2/3">
      <Element
        canvas
        id="one-half-inverse-column-1"
        is={Container}
        className="border"
      />
    </Box>
    <Box className="w-1/3">
      <Element
        canvas
        id="one-half-inverse-column-2"
        is={Container}
        className="border"
      />
    </Box>
  </Container>
);

OneHalfInverseColumns.craft = {
  displayName: "One Half Inverse Columns",
};
