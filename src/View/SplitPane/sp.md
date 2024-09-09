## Description
The `SplitPane` component allows for the creation of resizable panes within a container. It supports both horizontal and vertical orientations, and enables users to adjust the size of the panes by dragging a resize handle.

## Use Case
This component is ideal for:
- Creating split views with adjustable pane sizes.
- Building layouts that require resizable sections, such as sidebars, content areas, or panels.
- Enhancing user interfaces with flexible, interactive components.

## Props Table

| Prop Name       | Type                                            | Description                                                          | Default Value | Required |
|-----------------|-------------------------------------------------|----------------------------------------------------------------------|---------------|----------|
| `initialSizes`  | `number[]`                                      | Initial sizes of the panes as percentages of the total container size.| `[50, 50]`    | No       |
| `minSizes`      | `number[]`                                      | Minimum sizes of the panes as percentages of the total container size.| `[10, 10]`    | No       |
| `maxSizes`      | `number[]`                                      | Maximum sizes of the panes as percentages of the total container size.| `[90, 90]`    | No       |
| `orientation`   | `"horizontal" \| "vertical"`                    | Orientation of the split panes.                                       | `"horizontal"`| No       |
| `onPaneResize`  | `(sizes: number[]) => void`                     | Callback function triggered when the pane sizes are adjusted.         | `undefined`   | No       |
| `className`     | `string`                                        | Additional class names for custom styling.                            | `undefined`   | No       |
| `style`         | `React.CSSProperties`                           | Inline styles for custom styling.                                     | `undefined`   | No       |
| `children`      | `React.ReactNode`                               | Child components to be rendered inside the panes.                     | `undefined`   | Yes      |

## Example

```typescript
import React from "react";
import SplitPane from "./SplitPane";

const App: React.FC = () => {
  return (
    <SplitPane initialSizes={[30, 70]} minSizes={[20, 20]} maxSizes={[80, 80]} orientation="vertical">
      <div style={{ background: "#f0f0f0", height: "100%" }}>Pane 1</div>
      <div style={{ background: "#e0e0e0", height: "100%" }}>Pane 2</div>
    </SplitPane>
  );
};

export default App;
```
