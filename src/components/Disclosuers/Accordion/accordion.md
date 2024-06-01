## Description
The `Accordion` component is a collapsible UI element used to hide and show content. It supports customizable headers and can be used to organize information in a compact and user-friendly way. This component can be integrated into various parts of an application where content needs to be expandable and collapsible.

## Use Case
The `Accordion` component is ideal for:
- Displaying FAQs where each question can be expanded to reveal the answer.
- Organizing content in a compact manner where sections can be expanded and collapsed.
- Providing a navigable list of items or options where details are hidden until needed.

## Props Table

| Prop Name   | Type                         | Description                                                         | Default Value | Required |
|-------------|------------------------------|---------------------------------------------------------------------|---------------|----------|
| `headerText`| `string`                     | The text to be displayed in the header of the accordion.            | `""`          | Yes      |
| `children`  | `React.ReactNode`            | The content to be displayed inside the accordion body.              | `undefined`   | No       |
| `hidden`    | `boolean`                    | Whether the accordion content is initially hidden.                  | `false`       | No       |

## Example Use Case

### Example 1: Simple Accordion
A simple accordion to display additional information.
```jsx
<Accordion
  headerText="More Information"
>
  <p>This is the hidden content that is revealed when the accordion is expanded.</p>
</Accordion>
```