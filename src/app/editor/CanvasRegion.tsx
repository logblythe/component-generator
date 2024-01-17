import { Element, Frame } from "@craftjs/core";
import React from "react";

import { ResizableContainer } from "../components/user";

const CanvasRegion = () => (
  <Frame>
    <Element
      canvas
      is={ResizableContainer}
      width="auto"
      height="100%"
      background={{ r: 255, g: 255, b: 255, a: 1 }}
      padding={["40", "40", "40", "40"]}
      custom={{ displayName: "App" }}
    />
  </Frame>
);

export default CanvasRegion;
