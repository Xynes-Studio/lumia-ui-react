## Description
The `Code` component is a flexible and customizable UI element for displaying code snippets in various programming languages. It supports syntax highlighting, formatting, and can be editable or non-editable based on the requirements. This component can be used in blogs, documentation sites, or any application that needs to present code to users.

## Use Case
The `Code` component is ideal for:
- Displaying code snippets in different programming languages with syntax highlighting.
- Allowing users to edit and format code in real-time.
- Embedding formatted code within articles, tutorials, or documentation.

## Props Table

| Prop Name        | Type                                    | Description                                                        | Default Value     | Required |
|------------------|-----------------------------------------|--------------------------------------------------------------------|-------------------|----------|
| `code`           | `string`                                | The code snippet to be displayed.                                  | `undefined`       | Yes      |
| `language`       | `'html' \| 'css' \| 'JS' \| 'js' \| 'jsx' \| 'javascript' \| 'rust' \| 'sql' \| 'php' \| 'python' \| 'auto'` | The programming language of the code for syntax highlighting.     | `'auto'`          | No       |
| `editable`       | `boolean`                               | Whether the code is editable by the user.                           | `false`           | No       |
| `codeClassName`  | `string`                                | Additional class name for the code element.                         | `undefined`       | No       |
| `babel`          | `boolean`                               | Whether to use Babel for formatting the code.                       | `false`           | No       |
| `span`           | `boolean`                               | Whether to render the code inside a `span` element.                 | `false`           | No       |

## Example Use Case

### Example 1: Displaying HTML Code
A non-editable code snippet displaying HTML code.
```jsx
<Code
  code="<div>Hello, World!</div>"
  language="html"
/>
```
