## Description
The `Image` component is a flexible and customizable image container that supports various properties such as overlay, aspect ratio, border radius, and object fit. It also allows for additional functionalities like update options and icons.

## Use Case
This component is ideal for:
- Displaying images with specific styles and properties.
- Adding overlays and icons to images.
- Handling image updates with custom update UI options.

## Props Table

| Prop Name                    | Type                                          | Description                                                                 | Default Value         | Required |
|------------------------------|-----------------------------------------------|-----------------------------------------------------------------------------|-----------------------|----------|
| `title`                      | `string`                                      | The title of the image, used for accessibility.                             | `"Image Component"`   | No       |
| `numberOfLinesForTitle`      | `number`                                      | Number of lines for the title text.                                         | `undefined`           | No       |
| `description`                | `string`                                      | The description of the image.                                               | `undefined`           | No       |
| `numberOfLinesForDescription`| `number`                                      | Number of lines for the description text.                                   | `undefined`           | No       |
| `overlay`                    | `boolean`                                     | Whether to display an overlay over the image.                               | `undefined`           | No       |
| `overlayOpacity`             | `number`                                      | The opacity of the overlay.                                                 | `undefined`           | No       |
| `source`                     | `string`                                      | The source URL of the image.                                                | `undefined`           | Yes      |
| `icon`                       | `React.FC<AssetProps>`                        | An optional icon to be displayed over the image.                            | `undefined`           | No       |
| `aspectRatio`                | `number`                                      | The aspect ratio of the image.                                              | `undefined`           | No       |
| `canUpdate`                  | `boolean`                                     | Whether the image can be updated.                                           | `undefined`           | No       |
| `updateUI`                   | `"overlay" \| "pen"`                          | The UI option for updating the image.                                       | `undefined`           | No       |
| `onUpdate`                   | `(url: string, file: Blob) => void`           | Callback function to handle image updates.                                  | `undefined`           | No       |
| `accepted`                   | `string`                                      | The accepted file types for image updates.                                  | `undefined`           | No       |
| `fit`                        | `"contain" \| "cover" \| "fill" \| "scale-down" \| "none"` | How the image should fit within its container.                              | `"cover"`             | No       |
| `borderRadius`               | `number`                                      | The border radius of the image container.                                   | `spacing.borderRadius.r2` | No       |

## Example

```typescript
import React from "react";
import { Image } from "./Image";

const App: React.FC = () => {
  return (
    <Image
      source="https://example.com/image.jpg"
      title="Sample Image"
      description="This is a sample image."
      overlay={true}
      overlayOpacity={0.5}
      borderRadius={10}
      fit="cover"
    />
  );
};

export default App;
```
