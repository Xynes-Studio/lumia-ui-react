import { Flex } from "@app/View";
import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./accordion"; // Adjust the import paths as necessary

// Define meta information for the Accordion component
const meta: Meta = {
  title: "Disclosures/Accordion",
  component: Accordion,
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;
export default meta;

// Define the story type
type AccordionStory = StoryObj<typeof meta>;

// Stories with args
export const DefaultAccordion: AccordionStory = {
  args: {
    headerText: "Accordion Header",
    children: (
      <div>
        This is the content of the accordion. It can include text, images, or any other elements.
      </div>
    ),
    hidden: true,
  },
};

export const AccordionWithChildren: AccordionStory = {
  args: {
    headerText: "Accordion with Custom Content",
    children: (
      <Flex>
        <div style={{ padding: "1rem" }}>
          <p>This is a custom content inside the accordion.</p>
        </div>
      </Flex>
    ),
    hidden: true,
  },
};
