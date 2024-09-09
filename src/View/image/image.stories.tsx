import { useState } from "react";

import { Meta, StoryObj } from "@storybook/react";

import { Image } from "./image";
import { LmCkAdd } from "@icons/lmCkAdd";

const meta: Meta<typeof Image> = {
  component: Image,
};

export default meta;
type Story = StoryObj<typeof Image>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const ImageWithHooks = () => {
  const [image, setImage] = useState<string>(
    "https://images.pexels.com/photos/16039120/pexels-photo-16039120/free-photo-of-sunlit-rocks-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  );

  // Sets a click handler to change the label's value
  const handleImageUpdate = (url: string) => {
    // Your logic to handle image update
    setImage(url);
  };

  return (
    <Image
      source={image}
      style={{
        width: "500px",
        height: "400px",
      }}
      fit="cover"
      canUpdate={true}
      onUpdate={handleImageUpdate}
    />
  );
};

export const ImageOnly: Story = {
  render: () => <ImageWithHooks />,
};

const ImageWithHooksSecond = () => {
  const [image, setImage] = useState<string>(
    "https://images.pexels.com/photos/16039120/pexels-photo-16039120/free-photo-of-sunlit-rocks-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  );

  // Sets a click handler to change the label's value
  const handleImageUpdate = (url: string) => {
    // Your logic to handle image update
    setImage(url);
  };

  return (
    <Image
      source={image}
      style={{
        width: "500px",
        height: "400px",
      }}
      fit="cover"
      canUpdate={true}
      onUpdate={handleImageUpdate}
      overlay={true}
      title="This is an image."
      description="Eu qui Lorem eiusmod ex in pariatur cillum pariatur eiusmod mollit eu. Anim nisi ipsum tempor incididunt est reprehenderit enim amet qui incididunt labore sit. Dolor Lorem nisi proident aute dolore fugiat consequat id duis pariatur non aliquip et adipisicing. Velit esse adipisicing ipsum excepteur ipsum sint excepteur officia."
      icon={LmCkAdd}
    />
  );
};

export const ImageWithOverlayAndAlsoCanUpdate: Story = {
  render: () => <ImageWithHooksSecond />,
};
const ImageWithHooksThird = () => {
  const [image] = useState<string>(
    "https://images.pexels.com/photos/16039120/pexels-photo-16039120/free-photo-of-sunlit-rocks-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  );

  return (
    <Image
      source={image}
      style={{
        width: "500px",
        height: "400px",
      }}
      fit="cover"
      overlay={true}
      title="This is an image."
      description="Eu qui Lorem eiusmod ex in pariatur cillum pariatur eiusmod mollit eu. Anim nisi ipsum tempor incididunt est reprehenderit enim amet qui incididunt labore sit. Dolor Lorem nisi proident aute dolore fugiat consequat id duis pariatur non aliquip et adipisicing. Velit esse adipisicing ipsum excepteur ipsum sint excepteur officia."
      icon={LmCkAdd}
    />
  );
};

export const ImageWithOverlay: Story = {
  render: () => <ImageWithHooksThird />,
};
