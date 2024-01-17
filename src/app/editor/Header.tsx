import { useEditor } from "@craftjs/core";
import { ResetIcon } from "@radix-ui/react-icons";
import {
  Button,
  Flex,
  HoverCard,
  IconButton,
  Switch,
  Text,
} from "@radix-ui/themes";
import lz from "lzutf8";

type PropsType = {
  isEditingEnabled: boolean;
  onEnableEditingChange: (enabled: boolean) => void;
};

export const Header = ({
  isEditingEnabled,
  onEnableEditingChange,
}: PropsType) => {
  const { enabled, canUndo, canRedo, actions, query } = useEditor(
    (state, query) => ({
      enabled: state.options.enabled,
      canUndo: query.history.canUndo(),
      canRedo: query.history.canRedo(),
    })
  );

  const handleSave = () => {
    const json = query.serialize();
    const encoded = lz.encodeBase64(lz.compress(json));
    localStorage.setItem("craftjs-demo", encoded);
  };

  const handleLoad = () => {
    const encoded = localStorage.getItem("craftjs-demo") as string;
    const decoded = lz.decompress(lz.decodeBase64(encoded));
    actions.deserialize(decoded);
  };

  return (
    <Flex gap={"4"} className="py-2">
      <Text as="label" size="2">
        <Flex gap="2">
          <Switch
            defaultChecked={isEditingEnabled}
            onCheckedChange={(isChecked) => {
              onEnableEditingChange(isChecked);
              actions.setOptions((options) => (options.enabled = isChecked));
            }}
          />
          Enable Editing
        </Flex>
      </Text>
      <IconButton
        className={`border rounded-full p-2 ${
          isEditingEnabled ? "cursor-pointer" : "cursor-not-allowed"
        }`}
        disabled={!canUndo || !enabled}
        onClick={() => actions.history.undo()}
      >
        <HoverCard.Root>
          <HoverCard.Trigger>
            <ResetIcon height={"16"} width={"16"} />
          </HoverCard.Trigger>
          <HoverCard.Content size={"1"}>Undo</HoverCard.Content>
        </HoverCard.Root>
      </IconButton>
      <IconButton
        className={`border rounded-full p-2 ${
          isEditingEnabled ? "cursor-pointer" : "cursor-not-allowed"
        }`}
        onClick={() => actions.history.redo()}
        disabled={!canRedo || !enabled}
      >
        <HoverCard.Root>
          <HoverCard.Trigger>
            <ResetIcon className="rotate-180" height={"16"} width={"16"} />
          </HoverCard.Trigger>
          <HoverCard.Content size={"1"}>Redo</HoverCard.Content>
        </HoverCard.Root>
      </IconButton>
      <Button className="border rounded-full p-2" onClick={handleSave}>
        Save
      </Button>
      <Button className="border rounded-full p-2" onClick={handleLoad}>
        Load
      </Button>
    </Flex>
  );
};
