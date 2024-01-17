import { Accordion } from "../primitives";
import { ACCORDION_ITEMS } from "./accordionItems";

export const Toolbox = () => {
  return <Accordion items={ACCORDION_ITEMS} defaultValue="Tiles" />;
};
