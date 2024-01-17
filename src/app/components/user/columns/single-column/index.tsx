import { Element } from "@craftjs/core";
import React, { ReactElement } from "react";

import { Container } from "../../index";

export const SingleColumn = () => (
  <Element
    canvas
    id="single-column-parent"
    is={Container}
    direction="row"
    className="p-2 border"
  >
    <Element canvas id="single-column-child" is={Container} />
  </Element>
);

SingleColumn.craft = {
  displayName: "Single Column",
};
