import { Element } from "@craftjs/core";
import { Box } from "@radix-ui/themes";
import React from "react";

import { Container } from "../../index";

export const OneHalfColumns = () => (
  <Container gap={"4"} direction="row" className="border p-2">
    <Box className="w-1/3">
      <Element
        canvas
        id="one-half-column-1"
        is={Container}
        className="border"
      />
    </Box>
    <Box className="w-2/3">
      <Element
        canvas
        id="one-half-column-2"
        is={Container}
        className="border"
      />
    </Box>
  </Container>
);

OneHalfColumns.craft = {
  displayName: "One Half Columns",
};
