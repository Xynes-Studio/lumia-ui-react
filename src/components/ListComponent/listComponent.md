## Description
The `ListComponent` is a flexible and customizable component for rendering nested lists. It supports both ordered and unordered lists and can handle multiple levels of nesting. This component is ideal for displaying hierarchical data or creating structured content.

## Use Case
The `ListComponent` is ideal for:
- Displaying hierarchical data such as organizational structures or file directories.
- Creating structured content with nested lists.
- Generating lists with different bullet or numbering styles for each level.

## Props Table

| Prop Name | Type                                      | Description                                                        | Default Value      | Required |
|-----------|-------------------------------------------|--------------------------------------------------------------------|--------------------|----------|
| `items`   | `ListItem[]`                              | Array of list items to be rendered. Each item can have nested children. | `[]`               | Yes      |
| `type`    | `'ordered-list' \| 'unordered-List'`      | Defines whether the list is ordered or unordered.                  | `'unordered-List'` | No       |

## ListItem Interface

| Prop Name  | Type         | Description                                                        | Default Value | Required |
|------------|--------------|--------------------------------------------------------------------|---------------|----------|
| `text`     | `string`     | The text content of the list item.                                 | `undefined`   | Yes      |
| `level`    | `number`     | The level of the list item (used for styling nested lists).        | `1`           | Yes      |
| `children` | `ListItem[]` | Array of child list items for creating nested lists.               | `undefined`   | No       |

## Example Use Case

### Example 1: Unordered List
A basic unordered list with nested items.
```jsx
const items = [
  {
    text: 'Item 1',
    level: 1,
    children: [
      {
        text: 'Item 1.1',
        level: 2,
      },
      {
        text: 'Item 1.2',
        level: 2,
        children: [
          {
            text: 'Item 1.2.1',
            level: 3,
          },
        ],
      },
    ],
  },
  {
    text: 'Item 2',
    level: 1,
  },
];

<ListComponent items={items} type="unordered-List" />
```