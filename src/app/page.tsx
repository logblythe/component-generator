"use client";

import { Editor } from "@craftjs/core";
import { Box, Flex } from "@radix-ui/themes";
import cx from "classnames";
import { useState } from "react";

import { Button, Container, ResizableContainer, Text } from "./components/user";
import {
  FourColumns,
  OneHalfColumns,
  OneHalfInverseColumns,
  SingleColumn,
  ThreeColumns,
  TwoColumns,
} from "./components/user/columns";
import CanvasRegion from "./editor/CanvasRegion";
import { Header } from "./editor/Header";
import { RenderNode } from "./editor/RenderNode";
import SidePanel from "./editor/SidePanel";
import { SidePanelToggler } from "./editor/SidePanel/SidePanelToggler";

export default function Page() {
  const [state, setState] = useState({
    isSidebarVisible: true,
    isEditingEnabled: true,
  });

  const { isSidebarVisible, isEditingEnabled } = state;

  return (
    <main className="min-h-screen page-container">
      <Editor
        resolver={{
          Button,
          Text,
          ResizableContainer,
          SingleColumn,
          TwoColumns,
          ThreeColumns,
          FourColumns,
          OneHalfColumns,
          OneHalfInverseColumns,
          Container,
          Box,
        }}
        onRender={RenderNode}
      >
        <Flex className="min-h-screen p-0 bg-white">
          <Flex
            direction={"column"}
            className={`pt-1 transition-width duration-300 ease-out space-y-2 ${
              isSidebarVisible ? "w-[300px]" : "w-8"
            }`}
          >
            <SidePanelToggler state={state} setState={setState} />
            <SidePanel isSidebarVisible={isSidebarVisible} />
          </Flex>

          <Box className="bg-[#F2F2F2] w-full px-12">
            <Header
              isEditingEnabled={isEditingEnabled}
              onEnableEditingChange={(isEditingEnabled) => {
                setState({
                  isSidebarVisible: isEditingEnabled,
                  isEditingEnabled: isEditingEnabled,
                });
              }}
            />
            <CanvasRegion />
          </Box>
        </Flex>
      </Editor>
    </main>
  );
}
