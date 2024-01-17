import * as RadixAccordion from "@radix-ui/react-accordion";
import React from "react";

import { AccordionContent } from "./AccordionContent";
import { AccordionItem } from "./AccordionItem";
import { AccordionTrigger } from "./AccordionTrigger";

interface IProps {
  defaultValue: string;
  items: { value: string; title: string; content: any }[];
}

export const Accordion: React.FC<IProps> = ({ items, defaultValue }) => (
  <RadixAccordion.Root
    className="bg-mauve6 rounded-md shadow-[0_2px_10px] shadow-black/5 w-full"
    type="single"
    defaultValue={defaultValue}
    collapsible
  >
    {items.map(({ title, value, content }) => (
      <AccordionItem value={value} key={value}>
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>{content}</AccordionContent>
      </AccordionItem>
    ))}
  </RadixAccordion.Root>
);
