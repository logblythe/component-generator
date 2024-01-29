import { useEditor } from "@craftjs/core";
import { Button, Flex, Text } from "@radix-ui/themes";
import React from "react";

export const SettingsPanel = () => {
  const { actions, selected } = useEditor((state, query) => {
    const [currentNodeId] = state.events.selected;
    let selected;

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings:
          state.nodes[currentNodeId].related &&
          state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected,
    };
  });

  return selected ? (
    <Flex direction="column" className="pt-3 p-4">
      <Text>Settings</Text>
      {selected.settings && React.createElement(selected.settings)}
      {selected.isDeletable ? (
        <Button onClick={() => actions.delete(selected.id)}>Delete</Button>
      ) : null}
    </Flex>
  ) : null;
};
